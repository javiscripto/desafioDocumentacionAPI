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
            

        } catch (error) {
            console.error("ha ocurrido un error en la db:", error)
        }
    };

    createProduct=async(productData)=>{
        try {
            

        } catch (error) {
            console.error("ha ocurrido un error en la db:", error)
        }
    };

    deleteProduct=async(pid)=>{
    try {
        

    } catch (error) {
        console.error("ha ocurrido un error en la db:", error)
    }        
    }

};
module.exports= ProductClass;