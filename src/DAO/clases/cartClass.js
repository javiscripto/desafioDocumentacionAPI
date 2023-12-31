const cartModel= reuqire("../models/cartModel");

class CartClass{
    constructor(){

    };
    //methods /metodos
    getAll=async()=>{
        try {
            const carts = await cartModel.find();
            return carts;

        } catch (error) {
            console.error("ha ocurrido un error en la db:", error)
        }
    };

    getById=async(cid)=>{
        try {
            const cart = await cartModel.findById(cid);
            if(!cart){
                return null
            }
            return cart;


        } catch (error) {
            console.error("ha ocurrido un error en la db:", error)
        }
    };

    createCart=async(productData)=>{
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
module.exports= CartClass;