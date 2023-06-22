// 22.062023 javascript

//task: palindrome
/*let str="malayalam";
let pal=str.split("");
console.log(pal);
let ans=pal.reverse();
console.log(ans);
let j=ans.join("");
console.log(j);
*/

// for in loop--> objects 
/*let obj={
    a:1,b:2,c:3
}
let obj1=[1,2,3,4,5];
for(let key in obj1){
    console.log(obj1[key]);
}
*/
//for of loop--> es6 feature--> arrays
/*for(let key of obj1){
    console.log(key);
}*/
//for each()
/*let num_arr=[1,2,3,4,5];
num_arr.forEach((ele)=> console.log(ele*ele));*/

//map()--> return the solution in array
/*//let arr=[1,2,3,4,5];
//let arr=['abi','kabi'];
let num = arr.map(ele => ele.repeat(3));
console.log(num);*/

    //filter()
   /* let num_arr=[1,2,3,4,5];
let num = num_arr.filter(ele =>{
    return (ele%2);
} )
    console.log(num);*/

 //task:returns array of names above birth year 2002
 /*let obj=[
    {
        name:'mahi',
        dob:2002
    },
    {
        name:'kiku',
        dob:2003
    },
    {
        name:'niru',
        dob:2004
    },
    {
        name:'madhu',
        dob:2005

    }
];
 //o/p:[kiku,niru,madhu]   
 let ans=obj.filter(ele=>ele.dob>=2003).map(ele=>ele.name);
 console.log(ans);*/

 //shallow copy
 /*const arr=[1,2,3,4,5]
 const arr1=[...arr];
 arr1[1]=200;
 console.log(arr,arr1);*/
 
 //obj over ride
 /*let obj_cp={
    name:"nive",
    year:2020,
    name:"nivethitha"
 }
 console.log(obj_cp);*/
 
 //task:
 // employee name,age,salary,phone number 

 /* Employee details salary above 25000 with name and age
 o/p:
  [
    {
        name:"nive",
        age:30
    },
    {
        name:"kiki",
        age:25
    },
 ]*/
 /*let obj=[{
    name:'niviee',
    age:20,
    salary:100000,
    number:9087658943},
    {
        name:'kiki',
        age:90,
        salary:2000,
        number:9867403875
    },
    {
        name:'madh',
        age:20,
        salary:200000,
        number:9846201875
        
    }
];
let emp=obj.filter(ele=>ele.salary>=25000).map(ele=>{
    return {name:ele.name,age:ele.age}})
    console.log(emp);*/

    //de-structing array elements--> unpacking elements

    /*let arr_nums=[10,20,30,40,50];
    let [a1,a2,a3,a4,a5] =arr_nums;
    console.log(a1,a2,a3,a4,a5);*/
    //rest array
   /* let arr_nums=[10,20,30,40,50,60,70,];
    let [a1,a2,a3,a4,...a5] =arr_nums;//rest operator->array rest of the elements stored
    console.log(a1,a2,a3,a4,a5);
    console.log(a5);*/
//skipping elements in a array
    /*let arr_nums=[10,20,30,40,50];
    let [a1,a2,,a3,a4] =arr_nums;
    console.log(a1,a2,a3);*/
    //task:o/p-> 10 20 40 50 (5) 60,70,80,90,100
    /*let arr_nums=[10,20,30,40,50,60,70,80,90,100];
    let [a1,a2,,a3,a4,...a5] =arr_nums;
    console.log(a1,a2,a3,a4,a5);*/
    //error-> rest operator should be at last
    /*let arr_nums=[10,20,30,40,50,60,70,80,90,100];
    let [a1,a2,a3,...a4,a5] =arr_nums;
    console.log(a1,a2,a3,a4,a5);//error*/

      //de-structing object elements:
      /*let obj={
        name:"nive",year:2025,city:"cbe",dept:"cse"
      }
      /*let{ name,year,city,...remaining}=obj//rest operator 
      console.log(name,year,city,remaining)
      let{ name: sname,year,city,...remaining}=obj//  : rename operator 
      console.log(sname,year,city,remaining)
      let{ name: sname,year,city,color="green"}=obj
      console.log(sname,year,city,color);//green*/

      /*let obj={
        name:"nive",year:2025,city:"cbe",dept:"cse",colour="blue"
      }
      let{ name: sname,year,city,color="green"}=obj
      console.log(sname,year,city,color);//default parameters =*/

//setTimeout()
//setTimeout(() => console.log('hjny'),3000); 
/*console.log("lolo");
setInterval(() => console.log('hjny'),0); 
console.log("lolo");*/

//promise
//states --> pending,resolved,reject


//Api call ilustration
/*const promisex =new Promise((resolve,reject)=> {
    setTimeout(()=> {
        reject('resolved')
    },4000)
})
promisex
.then((value) => console.log(value))
.catch(() => console.log("error")); */

//api call
const  abc = fetch("https://jsonplaceholder.typicode.com/todos");
abc
.then((response)=> response.json())
.then((data)=>console.log(data[0]))
.catch((error)=>{console.log('error',error)});

//single line
const apicall = async() => {
    const promise_from_api = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await promise_from_api.json();
    console.log(data);
}
apicall();//synchronized data is got using await






















