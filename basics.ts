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