'use strict';
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

// ** Create a couple of users ** //
console.log('\n// Create a couple of users //');

const user1 = createUser(users);
users.push(user1);

const user2 = createUser(users);
users.push(user2);

// console.log({ users });

// ***** Log in user1 ***** //
console.log('\n// Sign in "user1" //');

user1.login();
// console.log({ user1 });

// ***** Create a couple of products ***** //
console.log('\n// Create a couple of products //');

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

// console.log({product1});

// ***** Create reviews ***** //
console.log('\n// Create reviews for "product1" with both users //');

console.log('User1:');
const user1Review1 = product1.createReview(user1);
user1.reviews.push(user1Review1);

console.log('User2');
const user2Review1 = product1.createReview(user2);
user2.reviews.push(user2Review1);

console.log('\n// Create reviews for "product2" with user2 //');
const user2Review2 = product2.createReview(user2);
user2.reviews.push(user2Review2);

// ***** Display reviews of product2 ***** //
console.log('\n// Display reviews of "product1" //');

product1.displayReviews();

// ***** Display user1 details and reviews ***** //
console.log('\n// Display users reviews and products reviews//');

console.log('Product1 reviews:', product1.reviews);
console.log('Product2 reviews:', product2.reviews);
console.log('User1 reviews:', user1.reviews);
console.log('User2 reviews:', user2.reviews);
