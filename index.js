'use strict';

let readlineSync = require('readline-sync');

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
    if (this.userName === userName && this.password === password) {
      this.logged = true;
    }
  }
}

/*
//////////////////// USER FUNCTION ////////////////////
*/

// Simple function to create fictional user in order to simulate customer experience when reviewing a product.
function createUser() {
  let userName = readlineSync.question('Your name: ');
  userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
  const password = readlineSync.question('Your password: ');

  console.log({ userName });

  for (const user of users) {
    if (user.userName === userName) {
      console.log('>>> User name already taken!');

      return createUser();
    }
  }

  users.push(new User(userName, password));
  console.log('>>> User created!');

  return;
}

// Create a couple of users
createUser();
// createUser();

//
// console.log({ users });

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
    if (user.logged) {
      console.log('User logged, so create review!');
      Review();
    } else {
      console.log('User not logged, please login first');
    }

    return this.reviews.length;
  }
}

const product1 = new Product('Dolly Doll', 'white and red', 23.99);
products.push(product1);
// products.push(new Product('Patty Doll', 'blue and white', 20.99));

product1.createReview(users[0]);
console.log({ products });

/*
//////////////////// CREATE REVIEW FACTORY FUNCTION ////////////////////
*/

function Review(userName) {
  return {
    comment: readlineSync.question('Write your review: '),
    starsIndex: readlineSync.keyInSelect(stars, 'How many stars?'),
    author: userName,
  };
}

// let animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'];
// let index = readlineSync.keyInSelect(animals, 'Which animal?');
// console.log('Ok, ' + animals[index] + ' goes to your room.');
