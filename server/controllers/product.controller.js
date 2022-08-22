const db = require("../models");
const Product = db.product;

exports.create = async (req, res) => {
  console.log(req.body);
  Product.create(req.body)
    .then((data) => {
      res.send({
        message: "Product created successfully",
      });
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};

exports.findAll = async (req, res) => {
  Product.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};

exports.findProductById = async (req, res) => {
  try {
    console.log(req.body);
    const data = [];
    for (let key in req.body) {
      console.log(req.body[key]);
      const product = await Product.findOne({
        where: {
          id: req.body[key],
        },
      });
      data.push(product);
    }
    res.send(data);
  } catch (err) {
    res.send(err);
    console.log(err);
  }
};
