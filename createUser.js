'use strict';
import { User } from './User.js';
import readlineSync from 'readline-sync';

/*
//////////////////// USER FUNCTION ////////////////////
*/

// Recursive function to create fictional user in order to simulate
// customer experience when reviewing a product.
// Function take the global array of users to check if user already exists.
//

export function createUser(users) {
  let userName = readlineSync.question('-> Your name: ');
  userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
  const password = readlineSync.question('-> Your password: ');

  for (const user of users) {
    if (user.userName === userName) {
      console.log('>>> User name already taken!\n');

      return createUser(users);
    }
  }

  console.log('>>> New user created!\n');

  return new User(userName, password);
}
