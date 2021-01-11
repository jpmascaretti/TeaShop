const products = require("../models/products");
const path = require("path");
const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.txt"
);
let total_qty = 0;
const pcart = path.join(
  path.dirname(require.main.filename),
  "data",
  "cart.txt"
);

const fs = require("fs");

exports.renderhp = (req, res, next) => {
  res.render("homepage");
};

exports.renderaus = (req, res, next) => {
  res.render("aboutus");
};

exports.rendershop = (req, res, next) => {
  res.render("shop", { products: products.prods });
};

let cartProducts = [];

exports.addProducts = (req, res, next) => {
  cartProducts.push(JSON.stringify(req.body));
  res.redirect("/shop");
  fs.writeFile(p, JSON.stringify(cartProducts), (err) => {});
  //This works to save every added product in the cart as a text filew
};

exports.renderCart = (req, res, next) => {
  let tea_arr = [];
  let white_qty = 0;
  let black_qty = 0;
  let green_qty = 0;
  let oolong_qty = 0;
  let unique_black = 0;
  let unique_green = 0;
  let unique_white = 0;
  let unique_oolong = 0;
  let unique_qty = 0;

  fs.readFile(p, "utf8", function (err, data) {
    if (err) {
      res.render("cart", { total: 0 });
      return;
    } else {
      data = JSON.parse(data);

      for (i = 0; i < data.length; i++) {
        tea_arr.push(JSON.parse(data[i]).teatype);
      }

      tea_arr.forEach((cartprod) => {
        if (cartprod == "Oolong Tea") {
          oolong_qty = oolong_qty + 1;
          unique_oolong = 1;
        }
        if (cartprod == "White Tea") {
          white_qty = white_qty + 1;
          unique_white = 1;
        }
        if (cartprod == "Green Tea") {
          green_qty = green_qty + 1;
          unique_green = 1;
        }
        if (cartprod == "Black Tea") {
          black_qty = black_qty + 1;
          unique_black = 1;
        }
      });
      total_qty = white_qty + black_qty + green_qty + oolong_qty;
      products.whiteTea.qty = white_qty;
      products.blackTea.qty = black_qty;
      products.oolongTea.qty = oolong_qty;
      products.greenTea.qty = green_qty;
      unique_qty = unique_oolong + unique_green + unique_white + unique_black;
      total_price = white_qty*products.whiteTea.price + black_qty*products.blackTea.price + green_qty*products.greenTea.price + oolong_qty*products.oolongTea.price;

      //  This can be reduced to 4 cases only 4x better by using unique quantities
      if (
        white_qty >= 1 &&
        black_qty == 0 &&
        oolong_qty == 0 &&
        green_qty == 0
      ) {
        res.render("cart1", {
          unique: unique_qty,
          total: total_qty,
          white: products.whiteTea,
          green: products.greenTea,
          oolong: products.oolongTea,
          black: products.blackTea,
          tprice: total_price
        });
      } else if (
        white_qty == 0 &&
        black_qty >= 1 &&
        oolong_qty == 0 &&
        green_qty == 0
      ) {
        res.render("cart1", {
          unique: unique_qty,
          total: total_qty,
          white: products.whiteTea,
          green: products.greenTea,
          oolong: products.oolongTea,
          black: products.blackTea,
          tprice: total_price
        });
      } else if (
        white_qty == 0 &&
        black_qty == 0 &&
        oolong_qty >= 1 &&
        green_qty == 0
      ) {
        res.render("cart1", {
          unique: unique_qty,
          total: total_qty,
          white: products.whiteTea,
          green: products.greenTea,
          oolong: products.oolongTea,
          black: products.blackTea,
          tprice: total_price
        });
      } else if (
        white_qty == 0 &&
        black_qty == 0 &&
        oolong_qty == 0 &&
        green_qty >= 1
      ) {
        res.render("cart1", {
          unique: unique_qty,
          total: total_qty,
          white: products.whiteTea,
          green: products.greenTea,
          oolong: products.oolongTea,
          black: products.blackTea,
          tprice: total_price
        });
      } else if (
        white_qty >= 1 &&
        black_qty >= 1 &&
        oolong_qty == 0 &&
        green_qty == 0
      ) {
        res.render("cart2", {
          unique: unique_qty,
          total: total_qty,
          white: products.whiteTea,
          green: products.greenTea,
          oolong: products.oolongTea,
          black: products.blackTea,
          tprice: total_price
        });
      } else if (
        white_qty >= 1 &&
        black_qty == 0 &&
        oolong_qty >= 1 &&
        green_qty == 0
      ) {
        res.render("cart2", {
          unique: unique_qty,
          total: total_qty,
          white: products.whiteTea,
          green: products.greenTea,
          oolong: products.oolongTea,
          black: products.blackTea,
          tprice: total_price
        });
      } else if (
        white_qty >= 1 &&
        black_qty == 0 &&
        oolong_qty == 0 &&
        green_qty >= 1
      ) {
        res.render("cart2", {
          unique: unique_qty,
          total: total_qty,
          white: products.whiteTea,
          green: products.greenTea,
          oolong: products.oolongTea,
          black: products.blackTea,
          tprice: total_price
        });
      }
      else if (
        white_qty == 0 &&
        black_qty >= 1 &&
        oolong_qty >= 1 &&
        green_qty == 0
      ) {
        res.render("cart2", {
          unique: unique_qty,
          total: total_qty,
          white: products.whiteTea,
          green: products.greenTea,
          oolong: products.oolongTea,
          black: products.blackTea,
          tprice: total_price
        });
      }
      else if (
        white_qty == 0 &&
        black_qty >= 1 &&
        oolong_qty == 0 &&
        green_qty >= 1
      ) {
        res.render("cart2", {
          unique: unique_qty,
          total: total_qty,
          white: products.whiteTea,
          green: products.greenTea,
          oolong: products.oolongTea,
          black: products.blackTea,
          tprice: total_price
        });
      }
      else if (
        white_qty == 0 &&
        black_qty == 0 &&
        oolong_qty >= 1 &&
        green_qty >= 1
      ) {
        res.render("cart2", {
          unique: unique_qty,
          total: total_qty,
          white: products.whiteTea,
          green: products.greenTea,
          oolong: products.oolongTea,
          black: products.blackTea,
          tprice: total_price
        });
      }
      else if (
        white_qty >= 1 &&
        black_qty >= 1 &&
        oolong_qty >= 1 &&
        green_qty == 0
      ) {
        res.render("cart3", {
          unique: unique_qty,
          total: total_qty,
          white: products.whiteTea,
          green: products.greenTea,
          oolong: products.oolongTea,
          black: products.blackTea,
          tprice: total_price
        });
      }
      else if (
        white_qty >= 1 &&
        black_qty == 0 &&
        oolong_qty >= 1 &&
        green_qty >= 1
      ) {
        res.render("cart3", {
          unique: unique_qty,
          total: total_qty,
          white: products.whiteTea,
          green: products.greenTea,
          oolong: products.oolongTea,
          black: products.blackTea,
          tprice: total_price
        });
      }
      else if (
        white_qty >= 1 &&
        black_qty >= 1 &&
        oolong_qty == 0 &&
        green_qty >= 1
      ) {
        res.render("cart3", {
          unique: unique_qty,
          total: total_qty,
          white: products.whiteTea,
          green: products.greenTea,
          oolong: products.oolongTea,
          black: products.blackTea,
          tprice: total_price
        });
      }
      else if (
        white_qty == 0 &&
        black_qty >= 1 &&
        oolong_qty >= 1 &&
        green_qty >= 1
      ) {
        res.render("cart3", {
          unique: unique_qty,
          total: total_qty,
          white: products.whiteTea,
          green: products.greenTea,
          oolong: products.oolongTea,
          black: products.blackTea,
          tprice: total_price
        });
      }
      else if (
        white_qty >= 1 &&
        black_qty >= 1 &&
        oolong_qty >= 1 &&
        green_qty >= 1
      ) {
        res.render("cart4", {
          unique: unique_qty,
          total: total_qty,
          white: products.whiteTea,
          green: products.greenTea,
          oolong: products.oolongTea,
          black: products.blackTea,
          tprice: total_price
        });
      }
      else {
        res.render("cart1", {
          unique: unique_qty,
          total: total_qty,
          white: products.whiteTea,
          green: products.greenTea,
          oolong: products.oolongTea,
          black: products.blackTea,
          tprice: total_price
        });
      }
    }
  });
};
