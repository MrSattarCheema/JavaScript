// // alert("Ello");
// //Coding challenge one
// let MarkWeight=78;
// let JohnWeight=92;
// let markHight=1.69;
// let johnHight=1.95;
// let markBMI=MarkWeight/markHight**2;
// let johnBMI=JohnWeight/johnHight**2;
// let markHigherBMI=markBMI>johnHight;
// console.log(markBMI,johnBMI, markHigherBMI,typeof(markHigherBMI));
// //Coding Challenge two
// if(markHigherBMI){
//     console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
// }
// else{
//     console.log(`John's BMI is higher than Mark's!`);
// }
// let d1=96,d2=108,d3=89,k1=88,k2=91,k3=110;
// let average1=(d1+d2+d3)/3;
// let average2=(k1+k2+k3)/3;
// console.log(`ava 1 ${average1} ava2 ${average2}`);
// if(average1>average2){
//     console.log(`Team Dolphins win`);
// }
// else if(average1===average2){
//     console.log(`Both are equal`);
// }
// else{
//     console.log(`Team Karlos wins`);
// }
// //Bonus Data
// let bAverage1=(97+112+101)/3;
// let bAverage2=(109+95+123)/3;
// if(bAverage1>bAverage2 && bAverage1>100){
//     console.log(`Team one wins`);
// }
// else if(bAverage2>=bAverage1 && bAverage2>=100){
//     console.log(`Team two wins`);
// }
// else{
//     console.log(`no one wins`);
// }

//----------------------Challenge 4
const value=275;
let tip=value>=50 && value<=300? .15 * value : .20* value;
console.log(`The bill was ${value}, the tip was ${tip}, and the total bill was ${value+tip}`);
