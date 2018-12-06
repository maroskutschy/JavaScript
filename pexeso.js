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
let actualCardType

for (let i = 0; i < allElements.length; i++) {
    allElements[i].addEventListener('click', function () {
        numberOfOpenedCards++;
        if (numberOfOpenedCards > 2) {
            for (let j =0; j < allElements.length; j++) {
                allElements[j].classList.remove('show', 'open', 'disabled');   
                
            }
            allElements[i].classList.add('show', 'open', 'disabled');
            // previousCardType = allElements[i].getAttribute('type');
                
            numberOfOpenedCards = 1;   
           
        } else {
            allElements[i].classList.add('show', 'open', 'disabled');
            console.log(numberOfOpenedCards);
            if (numberOfOpenedCards === 1 || numberOfOpenedCards === 0) {
                previousCardType = allElements[i].getAttribute('type');
            } else if (numberOfOpenedCards === 2) {
                actualCardType = allElements[i].getAttribute('type');
                checkMatch (previousCardType,actualCardType, allElements[i], allElements[i-1]);
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
})
}

function checkMatch(cardOneType, cardTwoType, cardOneElement, cardTwoElement) {
    if (cardOneType === cardTwoType) {
        cardOneElement.classList.add('match');
        cardTwoElement.classList.add('match');
    }   
}



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










