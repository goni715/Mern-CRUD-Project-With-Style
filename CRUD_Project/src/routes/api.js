const express = require('express');
const router = express.Router();
const ProductsController = require('../controllers/ProductsController');


//CreateProduct/InsertData
router.post('/CreateProduct',ProductsController.CreateProduct);
//ReadProduct/SelectProduct
router.get('/ReadProduct',ProductsController.ReadProduct);
//ReadProduct/SelectProductByID
router.get('/ReadProductByID/:id',ProductsController.ReadProductByID);
//UpdateProduct
router.post('/UpdateProduct/:id',ProductsController.UpdateProduct);
//DeleteProduct
router.post('/DeleteProduct/:id',ProductsController.DeleteProduct);





module.exports=router;