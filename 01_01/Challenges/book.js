/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

 class Book {
    constructor(
      // Defines parameters:
      name,
      weight,
      height,
      width,
      pages,
      category,
      age,
      priceMember,
      priceNotMember,
    ) {
      // Define properties:
      this.name = name;
      this.weight = weight;
      this.height = height;
      this.width = width;
      this.pages = pages;
      this.category = category;
      this.age = age;
      this.price = {
        memberPrice: priceMember,
        notMemberPrice: priceNotMember,
      };
    }
    // Add methods like normal functions:
    newBackpackName(placeNewName) {
        this.name = placeNewName;
      }
    
    newPrice(priceForMember, priceForNotMember) {
     this.price.memberPrice = priceForMember;
     this.price.notMemberPrice = priceForNotMember;
    }
    newPages(numberOfPages) {
      backpack.pages = numberOfPages;
    }
    
  }
  
  export default Book;
  