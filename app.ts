// var user:string = "prerna"

// var sankhya:number = 1234

// console.log(sankhya);

// //var var_name:data_type = value

// function add1(a: number, b:number): number{
//   return a + b;
// }

// console.log(add1(1,2));

// console.log("hello");

//basic type ...

let num: number = 123_4556_4354
console.log(num);

let num1: bigint= 123_4556_4354n
console.log(num1);

let char: string = "hello"
console.log(char);

let isAvail:boolean = true;
console.log(isAvail);


let numArray: number[] = [1,2,3,4,5 ]
let StrArray: String[] = ["a","f","g" ]

let val: undefined = undefined
let val1: null = null

let obj:object = {
  name:"hello",
  age:34
}

let obj1 ={obj}
let obj2 ={...obj}
console.log(obj1);
console.log(obj2);

let obj3: {name:string, age:number} = {
  name:"hello",
  age:34
}

obj3 = {...obj3, age:44}
console.log(obj3);

//any type.............
let anyVal;

anyVal = 1
anyVal = "f"

function testAnyType (val:any){
  console.log(val);
  
}


//array....................
let numArray1: number[] = [1,2,3,4,5]
let strArray1: string[] = ["4","8"]


//tuples......
let arr: [number,string] =[2,"4"]
let coordinates3D:[number,number,number] =[34,54,56]

let response: [number,string]=[200,"success"]
console.log(response);
response.push(0)            //drawback of tupple in ts
console.log(response);

//enum............................

enum Color {
  Red,
  Blue,
  Greeen
}
enum Color1 {
  Red = 1,
  Blue,
  Greeen
}
enum Color2 {
  Red = "red",
  Blue = "blue",
  Greeen = "GreenWich"
}

console.log(Color.Greeen);
console.log(Color1.Greeen);
console.log(Color2.Greeen);

