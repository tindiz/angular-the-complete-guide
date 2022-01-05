// Primitives: numbers, strings and booleans
// More complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number;
age = 12

let userName: string;
userName = 'Tin';

let isInstructor: boolean;
isInstructor = true;

// More complex types
let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

// Define an object
let person: {
    name: string;
    age: number;
};

person = {
    name: 'Tin',
    age: 21
}

// Define a list of objects
let people: {
    name: string;
    age: number;
}[];

// Type inference
let course = 'React - The Complete Guide';
// error
// course = 12;

// Union type
let un: string | number = 'Angular is cool';
un = 12;


// Type aliases
type Person = {
    name: string;
    age: number;
}

let p: Person;
let ps: Person[];


// Functions & types
function add(a: number, b: number) {
    return a + b;
}

function printOutput(value: any) {
    console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);


// Classes and interfaces
class Student {
    firstName: string;
    lastName: string;
    age: number;
    courses: string[];

    constructor(first: string, last: string, age: number, courses: string[]) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }

    enrol(courseName: string){
        this.courses.push(courseName);
    }
}

const student = new Student("Tin", "Dizdarevic", 21, ['Math', 'More Math'])
student.enrol('Javascript');


interface Human{
    firstName: string;
    age: number;

    greet: () => void;
}

let max: Human;
max = {
    firstName: 'Tin',
    age: 21,
    greet() {
        console.log('Hello!');
    }
};

class Instructor implements Human {
    firstName: string;
    age: number;
    greet() {
        console.log("Hi!!");
    }
}