
const router= require("express").Router();
const {getAll, getById, createCart, deleteProduct}=require("../controlers/cartControler");

router.get("/", getAll);
router.get("/:cid", getById);
router.post("/", createCart);
router.delete("/:cid/products/:pid", deleteProduct);






module.exports= router;
