/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,

  newBackpack: function (placeNewName) {
    this.name = placeNewName;
  },
  newVolume: function (placeNewVolume) {
    backpack.volume = placeNewVolume;
  },
  newColor: function (placeNewColor) {
    this.color =placeNewColor;
  },
  newPocketNumber: function (placeNewPocketNUmber) {
    backpack.pocketNum = placeNewPocketNUmber;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  }, 
};

console.log(backpack.name);
backpack.newBackpack("hiking backpack");
console.log("New backpack name:", backpack.name);

console.log("Volume before:", backpack.volume);
backpack.newVolume(70);
console.log("Volume after:", backpack.volume);

console.log("Color before:", backpack.color);
backpack.newColor("green");
console.log("Color after:", backpack.color);

console.log("Pocket number before:", backpack.pocketNum);
backpack.newPocketNumber("8");
console.log("Pocket number after:", backpack.pocketNum);

backpack.toggleLid(true);
console.log("The lid is open:", backpack.lidOpen);

backpack.newStrapLength(80, 90);
console.log("The new strap length left is:", backpack.strapLength.left, "The new strap length RIGHT is:", backpack.strapLength.right);