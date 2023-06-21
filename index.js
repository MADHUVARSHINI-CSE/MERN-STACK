//javascript
//declaration and initialization
let a="555"*0;
//display comment
console.log(a);
console.log(typeof a);

//addition of two numbers
/*let num1 = 10;
let num2 = 20;
console.log("addition of two numbers" +num1+ "and" +num2+ "="  +(num1+num2));*/
//variable without initialization
/*let xtr;
console.log(xtr);*/

// to stop data from all operations
/*const user = Object.freeze ({
    name:"padma",
    age: 20,
    college:"sece",
    mail:"padma@gamil.com"
});
user.name="lalli"//update comment
console.log(user.name);
delete user.age;//delete comment
console.log(user)*/


//mutation
/*const usex={
    name:'abc',
    age:20
}
const usery=userx;
usery.age=30;
console.log(userx,usery);*/
//using spread operations
/*const userx={
    name:'abc',
    age:20
}
const usery={...userx}; //...spread operator
usery.age=30;
console.log(userx,usery);*/

//optional chaining
/*const details={
    address:{
        street:"second street"
        //city:'coimbatore'
   }
   city:'coimbatore'
}
console.log(details?.address?.city);*/

// functions
/*(function sum(num1,num2){
    if(typeof num1 !== 'number'|| typeof num2 != 'number')
    console.log('Invalid number');
    console.log( num1+num2);
})(20,20);*/ //IIFE-->Imediate invoke function expression
//console.log(sum('hjk',40));*/
 

//differnce between == and ===
//arrow function 
/*const sum = (num1,num2) => num1+num2;
console.log(sum(20,20));*/

//higher order function and backup function
/*const sum = (num1,num2) => num1+num2;
const sub = (num1,num2) => num1-num2;
const multiply = (num1,num2) => num1*num2;
const divide= (num1,num2) => num1/num2;
const calculator =(num1,num2,opertaion) => {
    console.log(opertaion(num1,num2));
}
 calculator(10,20,sum);*/
 //strings and its operations
 let str ="   im studing at sece   ";
 //trim 
 let str1=str.trim();
 console.log(str1);
 console.log(str1);
 str2=str.replaceAll('e','o');
 console.log(str2);
 //array
 let arr=[1,2,3,"123",'4',6.25];
 arr.push(10);
 console.log(arr);

 //task:o/p--> [1,2,3,4,5,6,7,8,9,10]
 let arr3=[1,2,3,4,5];
 arr3.push(6,7,8,9,10);
 console.log(arr3);
 console.log( arr3.shift());
 
 //task:o/p-->"arish"
 let b="harish";
 console.log(b.slice(1,6));
 
 