
class Product {
  constructor(title, imageUrl, price, quantity) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.qty = quantity;
  }

};

let whiteTea = new Product("White Tea", "whiteTea.JPG", 5.99);
let greenTea = new Product("Green Tea", "greenTea.JPG", 3.99);
let oolongTea = new Product("Oolong Tea", "oolongTea.JPG", 4.99);
let blackTea = new Product("Black Tea", "blackTea.JPG", 6.99);


module.exports.whiteTea = whiteTea;
module.exports.greenTea = greenTea;
module.exports.oolongTea = oolongTea;
module.exports.blackTea = blackTea;

module.exports.prods = [whiteTea, greenTea, oolongTea, blackTea];


