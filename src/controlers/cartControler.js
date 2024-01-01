const CartClass= require("../DAO/clases/cartClass");
const cartService= new CartClass()


const getAll=async(req, res)=>{
    try {
        const result = await cartService.getAll();
        res.status(200).send({status:"success",payload:result});
    } catch (error) {
        res.status(500).send(`ha ocurrido un error en el servidor`)

    }
};

const getById=async(req, res)=>{
    try {
        const cid= req.params.cid
        const result = cartService.getById(cid);
        if(!result){
            res.status(401).send({status:"not found" , message:`el carrito con id ${cid} no fue encontrado`});
        };
        res.status(200).send({status:"success", payload:result});
    } catch (error) {
        res.status(500).send(`ha ocurrido un error en el servidor`)

    }
};

const createCart=async(req, res)=>{
    try {
        const result= await cartService.createCart();
        res.status(200).send({status: "success", payload: result})
    } catch (error) {
        res.status(500).send(`ha ocurrido un error en el servidor`)

    }
};

const deleteProduct=async(req, res)=>{
    try {
        const cid= req.params.cid;
        const pid= req.params.cid;

        const result= await cartService.deleteProduct(pid,cid);
        res.send({result: result})
        
    } catch (error) {
        res.status(500).send(`ha ocurrido un error en el servidor`)

    }
};


module.exports={getAll, getById,createCart, deleteProduct}