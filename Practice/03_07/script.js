/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */


const closet = {
    name: "Stash Closet",
    volume: 500,
    color: "white",
    shelfs: 2,
    height: 70,
    width: 200,
    feet: {
        feetNumber: 8,
        feetHeight: 10,
        feetColor: "black",
    },
    doorOpen: false,
    toggleDoor: function (doorStatus) {
    this.doorOpen = doorStatus;
    },
    newFeet: function (feetNr, feetHei, feetCol) {
        this.feet.feetNumber = feetNr;
        this.feet.feetHeight = feetHei;
        this.feet.feetColor = feetCol;
    },
};

console.log( "This is the Stash Closet to hide all of your belongings:", closet);
console.log("The height value:", closet.height);
console.log("Feet details of the Stash Closet:", closet.feet);
console.log("Number of feet:",closet.feet.feetHeight);

var query = "shelfs";
console.log("The shelf value:", closet[query]);

console.log("feetNumber before", closet.feet.feetNumber);

closet.newFeet(6, 15, "white");

console.log("feetNumber after", closet.feet.feetNumber);

console.log(closet.feet);



