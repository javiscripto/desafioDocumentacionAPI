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
        const pid= req.params.pid;
        const result= await productService.getById(pid);
        if(!result){
            res.status(401).send({message:`producto con id ${pid} no ha sido encontrado`});
        };
        res.status(201).send({status:"success", payload: result});
    } catch (error) {
        res.status(500).send(`ha ocurrido un error en el servidor`)

    }
};

const createProduct=async(req, res)=>{
    try {
        const product= req.body;
        if(!product.title||!product.description||!product.code||!product.price||!product.status||!product.stock||!product.cat){
            res.send("faltan datos");
            return
        };
        const result= await productService.createProduct(product);
        res.sennd({status: "success", payload: result});

    } catch (error) {
                res.status(500).send(`ha ocurrido un error en el servidor`)

    }    
};

const deleteProduct=async(req, res)=>{
    try {
        const pid= req.params.pid;
        const result = await productService.deleteProduct(pid);
        res.send({status:"success", message:"producto eliminado", product:result})
        
    } catch (error) {
        res.status(500).send(`ha ocurrido un error en el servidor`)

    }   
};


module.exports={getAll, getById,createProduct,deleteProduct}