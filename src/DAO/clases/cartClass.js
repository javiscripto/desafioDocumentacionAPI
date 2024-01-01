const cartModel = require("../models/cartModel");

class CartClass {
 
  //methods /metodos
  getAll = async () => {
    try {
      const carts = await cartModel.find();
      return carts;
    } catch (error) {
      console.error("ha ocurrido un error en la db:", error);
    }
  };

  getById = async (cid) => {
    try {
      const cart = await cartModel.findById(cid);
      if (!cart) {
        return null;
      }
      return cart;
    } catch (error) {
      console.error("ha ocurrido un error en la db:", error);
    }
  };

  createCart = async () => {
    try {
      const cart = await cartModel.create({ products: [] });
      return cart;
    } catch (error) {
      console.error("ha ocurrido un error en la db:", error);
    }
  };

  deleteProduct = async (productId, cid) => {
    try {
      const cart = cartModel.findById(cid);
      if (!cart) {
        console.log(`el carrito ${cid}`);
        return null;
      }
      //obtengo el indice
      const productToDelete = cart.products.findIndex(
        (prod) => prod.item.toString() === productId
      );

      if (productToDelete === -1) {
        console.log("Producto no encontrado en el carrito");
      } else {
        // Eliminar el producto del array de productos del carrito
        cart.products.splice(productToDelete, 1);
        await cart.save();
        return `producto ${productId} eliminado del carrito`;
      }
    } catch (error) {
      console.error("ha ocurrido un error en la db:", error);
    }
  };
}
module.exports = CartClass;
