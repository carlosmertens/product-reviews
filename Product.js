'use strict';
import readlineSync from 'readline-sync';

/*
//////////////////// CLASS PRODUCT ////////////////////
*/

// Class to create products

export class Product {
  constructor(name = 'unknown', color = 'unknown', price = 9999, id) {
    this.name = name;
    this.color = color;
    this.price = price;
    this.id = id;
    this.reviews = [];
  }

  createReview(user) {
    if (user.logged) {
      const reviewID = this.reviews.length + 1;
      this.reviews.push(createReview(user.userName, reviewID));
      console.log('>>> Review created!\n');
      return { productId: this.id, reviewID };
    } else {
      console.log(`>>> ${user.userName} is not logged, please login!\n`);
      user.login();
      return this.createReview(user);
    }
  }

  displayReviews() {
    if (this.reviews.length > 0) {
      console.log(`Customers reviews for ${this.name}`);
      for (const review of this.reviews) {
        console.log(
          `"${review.comment}" - ${review.author} ${review.like ? '❤️' : ''}`
        );
      }
    } else {
      console.log('>>> There is no reviews for this product yet!\n');
    }
  }
}

/*
//////////////////// CREATE REVIEW FACTORY FUNCTION ////////////////////
*/

function createReview(userName, id) {
  return {
    author: userName,
    reviewID: id,
    comment: readlineSync.question('Write your review: '),
    like: Number(readlineSync.keyInYN('Do you give it a heart?')),
  };
}
