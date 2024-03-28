import express from "express";
import expressHandler from "express-async-handler";
import Products from "../model/productsModel.js";
import generateToken from '../utlis/generateToken.js'
const router = express.Router();



// get products

router.get(
  "/",
  expressHandler(async (req, res) => {
    try {
      const products = await Products.find();
      res.status(200).json(products);
    } catch (error) {
      throw new Error("Invalid No Products");
    }
  })
);

// create products

router.post(
  "/post",
  expressHandler(async (req, res) => {
     const {title,image,description,price,rating,category} = req.body

     const productsExsist = await Products.findOne({image:image})
     if(productsExsist){
      throw new Error(" Products is Already Exsist")
     }
     if(!title && !image && !description && !price && !rating && !category){
        throw new Error("Please Fill Your Products")
     }else{
        const products = await Products.create({
          title,
          image,
          description,
          price,
          rating,
          category
        })

        const product = await products.save()
         if(product){
            res.status(200).json({
               _id:product._id,
               title:product.title,
               image:product.image,
               description:product.description,
               price:product.price,
               rating:product.rating,
               category:product.category,
               token:generateToken(product._id)
            })
         }
     }
  })
);


// products Details

 router.get('/details/:id', expressHandler(async(req,res) =>{
    try {
      let ID = req.params.id
      const producsID = await Products.findById(ID)
      
       res.status(200).json(producsID)
    } catch (error) {
      throw new Error("Please Check ID Products")
    }
 }))


// Delete products 

 router.delete('/:id', expressHandler(async(req,res) =>{
    try {
      let ID = req.params.id
      const producsID = await Products.findById(ID)
      const deleteProducts = await Products.findByIdAndDelete(producsID)
       res.status(200).json(deleteProducts)
    } catch (error) {
      throw new Error("invalid delete Products")
    }
 }))

//  update Products

  router.put('/:id', expressHandler(async(req,res) =>{
    const {title,image,description,price,rating,category} = req.body
     const products = await Products.findById(req.params.id)
     if(products){
       products.title = req.body.title || products.title
       products.image = req.body.image || products.image
       products.description = req.body.description || products.description
       products.price = req.body.price || products.price
       products.rating = req.body.rating || products.rating
       products.category = req.body.category || products.category
     }

   

      const saveProducts = await products.save()
      if(saveProducts){
         res.status(200).json({
          _id:saveProducts._id,
            title:saveProducts.title,
            image:saveProducts.image,
            description:saveProducts.description,
            price:saveProducts.price,
            rating:saveProducts.rating,
            category:saveProducts.category,
         })
      }else{
        throw new Error("Something Went Wrong")
      }
  }))


 

export default router;
