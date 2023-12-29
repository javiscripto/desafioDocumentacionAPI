const mongoose= require("mongoose");

const productSchema= mongoose.Schema({
    title:{type:String,max:20},
    description:{type:String,max:30},
    code:{type:String,max:30},
    price:{type:Number},
    status:{type:Boolean},
    owner:{ type: String},
    stock:{type:Number},
    cat:{type:String,max:30}
});
const productModel= mongoose.model("products", productSchema);

module.exports= productModel;
