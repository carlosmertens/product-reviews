'use strict';
import { header } from './header.js';
import { createUser } from './createUser.js';
import { Employee } from './User.js';
import { Product } from './Product.js';
import { showNext } from './showNext.js';

console.clear();

// Global variables to collect users and products
const users = [];
const products = [];

/*
//////////////////// TEST LABORATORY ////////////////////
*/

header();

// ** Create a couple of user instances ** //
console.log('\n// Create a couple of User instances //');

const user1 = createUser(users);
users.push(user1);

const user2 = createUser(users);
users.push(user2);

const employee1 = new Employee('Muhasin', '007', 'Teacher');
users.push(employee1);

console.log(users);

showNext();

// ***** Log in user1 ***** //
console.log('\n// Sign in "user1" //');

user1.login();
console.log(users);

showNext();

// ***** Create a couple of products ***** //
console.log('\n// Create a couple of Product instances //');

const product1 = new Product(
  'Dolly Doll',
  'white and red',
  23.99,
  products.length + 1
);
products.push(product1);

const product2 = new Product(
  'Patty Doll',
  'blue and white',
  20.99,
  products.length + 1
);
products.push(product2);

console.log(products);

showNext();

// ***** Create reviews ***** //
console.log(`\n// Create reviews for "${product1.name}" with both users //`);

console.log(`User ${user1.userName}:`);
const user1Review1 = product1.createReview(user1);
user1.reviews.push(user1Review1);

console.log(`User ${user2.userName}:`);
const user2Review1 = product1.createReview(user2);
user2.reviews.push(user2Review1);

showNext();

console.log(
  `\n// Create reviews for ${product2.name} with ${user2.userName} //`
);
const user2Review2 = product2.createReview(user2);
user2.reviews.push(user2Review2);

showNext();

// ***** Display reviews of product1 ***** //
console.log('\n// Display reviews of "product1" //');

product1.displayReviews();

showNext();

// ***** Display user1 details and reviews ***** //
console.log('\n// Display product reviews and user reviews //');

console.log('Product1 reviews:', product1.reviews);
console.log('Product2 reviews:', product2.reviews);
console.log('User1 reviews:', user1.reviews);
console.log('User2 reviews:', user2.reviews);

showNext();

// ***** Display user1 details and reviews ***** //
console.log('\n// Simple example of Polymorphism //');
employee1.login();
