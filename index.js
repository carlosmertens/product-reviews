'use strict';

// import { User } from './User.js';

// let readlineSync = require('readline-sync');
// import readlineSync from 'readline-sync';

console.clear();

// let name = readlineSync.question('How should we call you?: ');
// name = name[0].toUpperCase() + name.slice(1).toLowerCase();

// console.log(name);

/*
//////////////////// USERS && PRODUCTS ////////////////////
*/

// Global variables to collect users and products
const users = [];
const products = [];
const stars = ['*', '**', '***', '****', '*****'];

/*
//////////////////// USER CLASS ////////////////////
*/

// Simple class to create users with login method

class User {
  constructor(userName, password) {
    this.userName = userName;
    this.password = password;
    this.logged = false;
  }

  login(userName, password) {
    // userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
    if (this.userName === userName && this.password === password) {
      this.logged = true;
    }
  }
}

/*
//////////////////// USER FUNCTION ////////////////////
*/

// Simple function to create fictional user in order to simulate customer experience when reviewing a product.

function createUser(userName, password) {
  // let userName = readlineSync.question('-> Your name: ');
  // userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
  // const password = readlineSync.question('-> Your password: ');

  // let userName = 'carlos';
  // const password = '1212';

  for (const user of users) {
    if (user.userName === userName) {
      console.log('>>> User name already taken!');

      return createUser();
    }
  }

  // users.push(new User(userName, password));
  // console.log('>>> User created!');

  return new User(userName, password);
}

/*
//////////////////// CLASS PRODUCT ////////////////////
*/

// Class to create products

class Product {
  constructor(name = 'unknown', color = 'unknown', price = 9999) {
    this.name = name;
    this.color = color;
    this.price = price;
    this.id = products.length + 1;
    this.reviews = [];
  }

  createReview(user) {
    // console.log({ user });
    if (user.logged) {
      this.reviews.push(Review(user.userName, this.reviews.length + 1));
      console.log('>>> Review created!');
    } else {
      console.log('>>> User not logged, please login first');
      // TODO:
    }

    return this.reviews.length;
  }

  editReview(user) {
    // TODO:
    // check if user indeed wrote a review
    // call write review function
    console.log(user);
  }
}

/*
//////////////////// CREATE REVIEW FACTORY FUNCTION ////////////////////
*/

function Review(userName, id) {
  return {
    // comment: readlineSync.question('Write your review: '),
    // starsIndex: Number(readlineSync.keyInSelect(stars, 'How many stars?')),
    // author: userName,

    reviewID: id,
    comment: 'This is a test comment!',
    starsIndex: 3,
    author: userName,
  };
}

// let animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'];
// let index = readlineSync.keyInSelect(animals, 'Which animal?');
// console.log('Ok, ' + animals[index] + ' goes to your room.');

/*
//////////////////// TEST PRODUCT & REVIEWS ////////////////////
*/

// Create a couple of users
console.log('////////// Create users //////////');

const carlos = createUser('carlos', '2121');
users.push(carlos);

const maria = createUser('maria', '8989');
users.push(maria);
maria.login('maria', '8989');

console.log({ users });

// Create a couple of products
console.log('////////// Create products //////////');

const product1 = new Product('Dolly Doll', 'white and red', 23.99);
products.push(product1);

const product2 = new Product('Patty Doll', 'blue and white', 20.99);
products.push(product2);

console.log({ products });

// Create a review
console.log('////////// Create reviews //////////');
product1.createReview(carlos);
product1.createReview(maria);

console.log({ products });

/*
//////////////////// FUNCTION HEADER ////////////////////
*/

function header(isLogged) {
  return;
}

const logged = true;

const messageIn = `**    Welcome to Reviews Page!                                **
**    We are glad you're here...                              **
**    we can't wait for your review!                          **`;

const messageOut = `**    Our products can only be seen by register customers!    **
**    We apologize for the inconvenience...                   **
**    but we are fighting bogus users.                        **`;

console.log(`****************************************************************
**                                                            **
**               PRODUCT REVIEW PAGE SIMULATION               **
**                                                            **
**  --------------------------------------------------------  **
**                                                            **
${messageIn}
**                                                            ** 
****************************************************************`);
