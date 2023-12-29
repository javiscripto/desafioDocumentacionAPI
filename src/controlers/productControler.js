const ProductClass= require("../DAO/clases/productClass");

const productService= new ProductClass()


const getAll=async(req, res)=>{
    try {
        const result= await productService.getAll();
        res.status(200).send({status:"success", payload:result})
    } catch (error) {
        res.status(500).send(`ha ocurrido un error en el servidor`)
    }
};

const getById=async(req, res)=>{
    try {
        
    } catch (error) {
        
    }
};

const createProduct=async(req, res)=>{
    try {
        
    } catch (error) {
        
    }    
};

const deleteProduct=async(req, res)=>{
    try {
        
    } catch (error) {
        
    }   
};


module.exports={getAll, getById,createProduct,deleteProduct}