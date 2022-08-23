/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
 import Book from "./book.js";

 const cookWithElise = new Book(
   "Cook With Elise",
   0.5,
   25,
   15,
   150,
   "Food",
   "Adults",
   150,
   200,
 );

 const travelWithElise = new Book(
   "Travel With Elise",
   0.8,
   40,
   30,
   235,
   "Young Adults",
   220,
   298,
 );
 
 console.log("Cook with Elise:", cookWithElise);
 console.log("Travel with Elise:", travelWithElise);

 