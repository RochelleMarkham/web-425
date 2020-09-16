/**
*===========================================
* Title: person.class.ts
* Author: Professor Krasso
* Date: 15 September 2020
* Modified by: Rochelle Markham
* Description: Person class that implements
*   a person interface
*===========================================
*/


import {IPerson} from "./person.interface";

class Person implements IPerson {

    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myName = new Person ("Rochelle", "Markham");

console.log(`My name is ${myName.firstName} ${myName.lastName}`);
