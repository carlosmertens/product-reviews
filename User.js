'use strict';
import readlineSync from 'readline-sync';
/*
//////////////////// USER CONSTRUCTOR FUNCTION ////////////////////
*/

// Constructor function to create users with a prototype login method

export function User(userName, password) {
  this.userName = userName;
  this.password = password;
  this.logged = false;
  this.reviews = [];
}

User.prototype.login = function () {
  let userName = readlineSync.question('-> Your name: ');
  userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
  const password = readlineSync.question('-> Your password: ');

  if (this.userName === userName && this.password === password) {
    console.log(`Welcome to your review page, ${userName}!\n`);
    this.logged = true;
  } else {
    console.log('Please try again!\n');
  }
};

export class Employee extends User {
  constructor(userName, password, position) {
    super(userName, password);
    this.position = position;
  }
}
