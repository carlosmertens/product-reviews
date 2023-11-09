/*
//////////////////// FUNCTION HEADER ////////////////////
*/

export function header(logged = true) {
  const messageIn = `**    Welcome to Reviews Page!                                **
**    We are glad you're here!                                **
**    We can't wait for your review!                          **`;

  const messageOut = `**    Our products can only be seen by register customers!    **
**    We apologize for the inconvenience...                   **
**    but we are fighting bogus users.                        **`;

  const headerMessage = logged ? messageIn : messageOut;
  console.log(`****************************************************************
**                                                            **
**               PRODUCT REVIEW PAGE SIMULATION               **
**                                                            **
**  --------------------------------------------------------  **
**                                                            **
${headerMessage}
**                                                            ** 
****************************************************************`);
}
