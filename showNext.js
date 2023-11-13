import readlineSync from 'readline-sync';
import { header } from './header.js';

// ***** Function to show next step ***** //
export function showNext() {
  readlineSync.question('\nPress "enter" to continue ⏎ ');
  console.clear();
  header();
}
