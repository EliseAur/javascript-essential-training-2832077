/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Backpack {
  constructor(
    // Defines parameters:
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen
  ) {
    // Define properties:
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
  }
  // Add methods like normal functions:
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
   this.strapLength.left = lengthLeft;
   this.strapLength.right = lengthRight;
  }
  newBackpackName(placeNewName) {
    this.name = placeNewName;
  }
  newVolume(placeNewVolume) {
    backpack.volume = placeNewVolume;
  }
  newColor(placeNewColor) {
    this.color =placeNewColor;
  }
  newPocketNumber(placeNewPocketNUmber) {
    backpack.pocketNum = placeNewPocketNUmber;
  }
}

export default Backpack;
