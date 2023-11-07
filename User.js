/*
//////////////////// USER CLASS ////////////////////
*/

// Simple class to create users with login method

export class User {
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
