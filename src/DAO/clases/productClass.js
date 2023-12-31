const productModel = require("../models/productModel");

class ProductClass{
    constructor(){

    };
    //methods /metodos
    getAll=async()=>{
        try {
            const products= await productModel.find();
            return products

        } catch (error) {
            console.error("ha ocurrido un error en la db:", error)
        }
    };

    getById=async(pid)=>{
        try {
            const product=await productModel.finById(pid)
            if(!product){
                return null
            };
            return product;
            
        } catch (error) {
            console.error("ha ocurrido un error en la db:", error)
        }
    };

    createProduct=async(productData)=>{
        try {
            const newProduct = await productModel.create(productData);
            return newProduct;

        } catch (error) {
            console.error("ha ocurrido un error en la db:", error)
        }
    };

    deleteProduct=async(pid)=>{
    try {
        const deletedProduct= await productModel.findByIdAndDelete(pid);
        return deletedProduct

    } catch (error) {
        console.error("ha ocurrido un error en la db:", error)
    }        
    }

};
module.exports= ProductClass;