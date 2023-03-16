// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

let score: number = 20;  // gtivalid


age = 12;

let userName: string | string[];         // union type

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// Complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person =  {
    name: string,
    age: number; 
};  

let person: Person;               // single object

person = {
    name: 'Max',
    age: 32
}

let people:  Person[];                 // array of objects


// Type inference

let course: string | number = 'React';

course = 1343;

// Functions and types

function add(a: number, b: number) {
    return a + b;
}                                          // function type is inferred as number

function sub(a: number, b: number) : number {
    return a - b;
}                                       // we define type of function as this

function printOutput(value: any) {
    console.log(value); 
}                                       // type of function here is void like null and undefined