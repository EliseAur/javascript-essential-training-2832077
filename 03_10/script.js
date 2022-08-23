/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

const hikingPack = new Backpack(
  "Hiking Backpack",
  70,
  "blue",
  15,
  50,
  50,
  true,
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("The hiking Backpack:", hikingPack);
console.log("Lid status hiking backpack:", hikingPack.lidOpen);
console.log("Pocket number hiking backpack:", hikingPack.pocketNum);
