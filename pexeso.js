// correct code bkp start:
// let allElements = document.querySelectorAll('.card');

// let numberOfOpenedCards = 0;

// for (let i = 0; i < allElements.length; i++) {
//     allElements[i].addEventListener('click', function () {
//         numberOfOpenedCards++;
//         if (numberOfOpenedCards > 2) {
//             for (let j =0; j < allElements.length; j++) {
//                 allElements[j].classList.remove('show', 'open');   
                
//             }
//             allElements[i].classList.add('show', 'open');
                
//             numberOfOpenedCards = 1;   
           
//         } else {
//             allElements[i].classList.add('show', 'open');
//             console.log(numberOfOpenedCards);

//         }
// })
// }
//correct code bkp end



// Select 1st element
//  Add Class .show
// Select 10th element and 11th element, add class .match




// console.log(allElements);
// allElements[0].classList.add('show');


// for (let i = 0; i < allElements.length; i++) {
//     allElements[i].addEventListener('click', function () {
//         alert('element ' + i);
// })
// }
let allElements = document.querySelectorAll('.card');

let numberOfOpenedCards = 0;

let previousCardType;
let previousCardTypeIndex;
let actualCardType

let openCardsArray = [null, null];

// for (let i = 0; i < allElements.length; i++) {
//     allElements[i].addEventListener('click', function () {
//         console.log('For: Beginning: numberOfOpenedCards' + numberOfOpenedCards + ', iteration' + i + ', previous card type = ' + previousCardType + ', actual card type = ' + actualCardType);
//         numberOfOpenedCards++;
//         if (numberOfOpenedCards > 2) {
//             for (let j =0; j < allElements.length; j++) {
//                 allElements[j].classList.remove('show', 'open', 'disabled');   
                
//             }
//             allElements[i].classList.add('show', 'open', 'disabled');
//             // previousCardType = allElements[i].getAttribute('type');
                
//             numberOfOpenedCards = 1;   
           
//         } else {
//             allElements[i].classList.add('show', 'open', 'disabled');
//             console.log(numberOfOpenedCards);
//             if (numberOfOpenedCards === 1 || numberOfOpenedCards === 0) {
//                 previousCardType = allElements[i].getAttribute('type');
//                 previousCardTypeIndex = i;
//                 console.log(previousCardType);
//             } else if (numberOfOpenedCards === 2) {
//                 actualCardType = allElements[i].getAttribute('type');
//                 checkMatch (previousCardType,actualCardType, allElements[i], allElements[previousCardTypeIndex]);
//                 console.log(actualCardType);
//             }


//             // if (numberOfOpenedCards = 1) {
//             //     previousCardType = allElements[i].getAttribute('type');
//             // } else if (numberOfOpenedCards = 2) {
//             //     let actualCardType = allElements[i].getAttribute('type');
//             //     if (previousCardType === actualCardType) {
//             //         allElements[i].classList.add('match');  
//             //         allElements[i-1].classList.add('match');
//             //     }
//             // }
//             console.log(numberOfOpenedCards);
//             console.log(previousCardType);
//             console.log(actualCardType);

//         }
//         console.log('For: End: numberOfOpenedCards' + numberOfOpenedCards + ', iteration' + i + ', previous card type = ' + previousCardType + ', actual card type = ' + actualCardType);
        
// })
// }

// function checkMatch(cardOneType, cardTwoType, cardOneElement, cardTwoElement) {
//     console.log('checkMatch: Beginning: numberOfOpenedCards' + numberOfOpenedCards + ',  previous card type = ' + previousCardType + ', actual card type = ' + actualCardType);
       
//     if (cardOneType === cardTwoType) {
//         cardOneElement.classList.add('match');
//         cardTwoElement.classList.add('match');
//         previousCardType = null;
//         actualCardType = null;
//         previousCardTypeIndex = null;
//         numberOfOpenedCards = null;
//     }   
//     console.log('checkMatch: End: numberOfOpenedCards' + numberOfOpenedCards + ', previous card type = ' + previousCardType + ', actual card type = ' + actualCardType);
    
// }



// let allElements = document.querySelectorAll('.card');
// let numberOfOpenedCards = 0;

// for (let i = 0; i < allElements.length; i++) {
//    allElements[i].addEventListener('click', function() {
//        numberOfOpenedCards++;
//        if (numberOfOpenedCards > 2) {
//            hideCards();
//            allElements[i].classList.add('show', 'open');
//            numberOfOpenedCards = 1
//        } else {
//            allElements[i].classList.add('show', 'open');
//            console.log(numberOfOpenedCards);
//        }
//    })
// }

// function hideCards() {
//    console.log('remove')
//    for (let i = 0; i < allElements.length; i++) {
//        allElements[i].classList.remove('show', 'open');
//    }
//    numberOfOpenedCards = 0;
// }

let numberOfMovesElement = document.querySelector('.moves');
let numberOfMoves = 0;


for (let i = 0; i < allElements.length; i++) {
    allElements[i].addEventListener('click', function () {
        console.log('For: Beginning: numberOfOpenedCards' + numberOfOpenedCards + ', iteration' + i + ', previous card type = ' + previousCardType + ', actual card type = ' + actualCardType);
        numberOfOpenedCards++;
        if (numberOfOpenedCards > 2) {
            for (let j =0; j < allElements.length; j++) {
                allElements[j].classList.remove('show', 'open', 'disabled');   
                
            }
            allElements[i].classList.add('show', 'open', 'disabled');
            numberOfMoves = numberOfMoves +1;
            numberOfMovesElement.innerHTML = numberOfMoves;
            // previousCardType = allElements[i].getAttribute('type');
            previousCardType = allElements[i].getAttribute('type');
                previousCardTypeIndex = i;
                console.log(previousCardType);    
            numberOfOpenedCards = 1;   
           
        } else {
            allElements[i].classList.add('show', 'open', 'disabled');
            numberOfMoves = numberOfMoves +1;
            numberOfMovesElement.innerHTML = numberOfMoves;
            console.log(numberOfOpenedCards);
            if (numberOfOpenedCards === 1 || numberOfOpenedCards === 0) {
                previousCardType = allElements[i].getAttribute('type');
                previousCardTypeIndex = i;
                console.log(previousCardType);
            } else if (numberOfOpenedCards === 2) {
                actualCardType = allElements[i].getAttribute('type');
                checkMatch (previousCardType,actualCardType, allElements[i], allElements[previousCardTypeIndex]);
                console.log(actualCardType);
            }


            // if (numberOfOpenedCards = 1) {
            //     previousCardType = allElements[i].getAttribute('type');
            // } else if (numberOfOpenedCards = 2) {
            //     let actualCardType = allElements[i].getAttribute('type');
            //     if (previousCardType === actualCardType) {
            //         allElements[i].classList.add('match');  
            //         allElements[i-1].classList.add('match');
            //     }
            // }
            console.log(numberOfOpenedCards);
            console.log(previousCardType);
            console.log(actualCardType);

        }
        console.log('For: End: numberOfOpenedCards' + numberOfOpenedCards + ', iteration' + i + ', previous card type = ' + previousCardType + ', actual card type = ' + actualCardType);
        
})
}

let numberOfMatchesElement = document.querySelector('.matches');
let numberOfMatches = 0;

function checkMatch(cardOneType, cardTwoType, cardOneElement, cardTwoElement) {
    console.log('checkMatch: Beginning: numberOfOpenedCards' + numberOfOpenedCards + ',  previous card type = ' + previousCardType + ', actual card type = ' + actualCardType + ', numberOfMatches = ' + numberOfMatches);
       
    if (cardOneType === cardTwoType) {
        cardOneElement.classList.add('match');
        cardTwoElement.classList.add('match');
        previousCardType = null;
        actualCardType = null;
        previousCardTypeIndex = null;
        numberOfOpenedCards = null;
        numberOfMatches = numberOfMatches + 1;
        numberOfMatchesElement.innerHTML = numberOfMatches;
    }   
    console.log('checkMatch: End: numberOfOpenedCards' + numberOfOpenedCards + ', previous card type = ' + previousCardType + ', actual card type = ' + actualCardType + ', numberOfMatches = ' + numberOfMatches);
    
    if (numberOfMatches === 1) {
        // zmenit class na show
        document.createTextNode('You have won');
        document.createElement
    }

}

















