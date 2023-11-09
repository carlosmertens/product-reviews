'use strict';
import readlineSync from 'readline-sync';
import { header } from './header.js';
import { createUser } from './createUser.js';
import { Product } from './Product.js';

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

console.log(users);

showNext();

// ***** Log in user1 ***** //
console.log('\n// Sign in "user1" //');

user1.login();
console.log(users);

showNext();

// ***** Create a couple of products ***** //
console.log('\n// Create a couple of product instances //');

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

// ***** Function to show next step ***** //
function showNext() {
  readlineSync.question('\nPress "enter" to continue ⏎ ');
  console.clear();
  header();
}
