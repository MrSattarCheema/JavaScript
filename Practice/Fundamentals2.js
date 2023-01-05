'use strict'
//~~~~~~~~~~~~~~~~~~~~~~~~~~~Coding Challenge 1
// let calcAverage=(a,b,c)=>{
//     return (a+b+c)/3
// }
// let dolphinsAverage=calcAverage(44,23,71);
// let koalasAverage=calcAverage(65,54,49);
// console.log(`Average of Dolphins is ${dolphinsAverage} and Koalas with ${koalasAverage}`)
// let checkWinner=function(dolphinsAverage,koalasAverage){
//     if(dolphinsAverage>=2*koalasAverage){
//         console.log(`Dolphins win with ${dolphinsAverage} vs ${koalasAverage}`);
//     }
//     else if(koalasAverage>=2*dolphinsAverage){
//         console.log(`Koalas win with  ${koalasAverage} vs ${dolphinsAverage}`);
//     }
//     else
//     console.log(`NO one wins`)
// }
// checkWinner(dolphinsAverage,koalasAverage);

/* Array Methods .push('Name') .pop() .unshift('Name') .shift() .indexOf('Name') .includes('Name') */

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Coding Challenge 2
// function calcTip(bill){
//     if(bill<=300 && bill>=50){
//         return bill*.15;
//     }
//     else{
//         return bill*.20;
//     }
// }
// console.log(calcTip(100));
// const bills=[125,555,44];
// const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// const total=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
// console.log(`${bills}
// ${tips}
// ${total}`)

// const ageCalculator=function(dd,mm,yy){
//     const d=26,m=12,y=2022;
//     const arr=[d-dd,m-mm,y-yy];
//     return arr;
// }
// console.log(ageCalculator(20,9,2003),typeof(3))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~```Coding Challenge 3

// const mark={
//     fullName:'Mark Miller ',
//     mass: 78,
//     height:1.69,
//     calcBMI:function(){
//         this.BMI=this.mass/this.height**2;
//         return this.BMI;
//     }
// }
// const john={
//     fullName:'John Smith',
//     mass: 92,
//     height:1.95,
//     calcBMI:function(){
//         this.BMI=this.mass/this.height**2;
//         return this.BMI;
//     }
// }
// mark.calcBMI();
// john.calcBMI();
// mark.BMI>john.BMI ? console.log(`${mark.fullName}'s BMI ${mark.BMI} is higher than ${john.fullName} (${john.BMI})`):console.log(`${john.fullName}'s BMI ${john.BMI} is higher than ${mark.fullName} (${mark.BMI})`)

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Coding Challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [], total = [];
for (let i = 0; i < bills.length; i++) {
    if (bills[i] <= 300 && bills[i] >= 50) {
        tips.push(bills[i] * .15);
        total.push(bills[i]+(bills[i] * .15));
    }
    else {
        tips.push(bills[i] * .20);
        total.push(bills[i]+(bills[i] * .20));
    }
}
console.log(`${bills}
${tips}
${total}`)
