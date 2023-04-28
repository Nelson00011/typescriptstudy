// Primitive: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number 
age = 12.1

let userName: string;
userName = "Phyto"

let isInstructor: boolean;
isInstructor = true

// More complex types
//array of strings, booleans, numbers etc
let hobbies: string[];
hobbies=['first', 'second', 'third']

type Person =  {
    name: string;
    age: number;
};

let person: {
    name: string;
    age: number;
}[];

person = {
    name: "Max",
    age: 32
};

person = {
    isEmployee: true
};


let people: People[];
//Type inference can have Unions that are multi types.

let course: string | number  = "Complete String";


//Functions and types: 

function add(a: number, b: number):number {
    return a + b;
  }
  
function print(value: any){
    console.log(value);
}

// Generics (insert values)
//T means matching type in array & value
function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray, -1);  // [-1, 1, 2 ,3]
const stringArray = insertAtBeginning(['a','b', 'c'], 'd')

// updatedArray[0].split("");
