const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    products: [
      {
        item: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
        quantity: { type: Number, default: 1 },
      },
    ],
  });


const cartModel=mongoose.model("carts",cartSchema);
module.exports=cartModel;