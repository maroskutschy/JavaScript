let year5 = 2019;
let isLeap5;
//let restAfterDivision5 = year5 % 4;
//let restAfterDivision5
if (year5 % 4 == 0 && (year5 % 100 != 0 || year5 % 400 == 0) ) {
    isLeap5 = true;
} else {
    isLeap5 = false;
}
console.log(isLeap5);