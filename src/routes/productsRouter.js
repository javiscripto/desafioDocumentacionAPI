const router= require("express").Router();
const { getAll, getById, createProduct, deleteProduct } = require("../controlers/productControler");


router.get("/",getAll);
router.get("/:pid", getById);
router.post("/", createProduct);
router.delete("/:pid", deleteProduct)

module.exports= router;