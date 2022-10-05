const ProductsModel = require('../models/ProductsModel');

//CreateProduct/DataInsert/Create
exports.CreateProduct = (req,res)=>{  

    let reqBody = req.body; 

   ProductsModel.create(reqBody,(error,data)=>{

        if(error){

           res.status(400).json({status:"fail", data:error});

        }else{

            res.status(200).json({status:"success", data:data});

        }
    })
}






//SelectProduct/DataSelect/Read
exports.ReadProduct = (req,res)=>{  

    ProductsModel.find((error,data)=>{

          if(error){

            res.status(400).json({status:"fail", data:error});

          }else{

            res.status(200).json({status:"success", data:data});  

           }


    })


   
}



//Select/ReadByID
exports.ReadProductByID = (req,res)=>{

    let id = req.params.id;
    let Query = {_id:id};

    ProductsModel.find(Query,(error,data)=>{

        if(error){

            res.status(400).json({status:"fail", data:error});

        }else{

            res.status(200).json({status:"success", data:data});

        }

    })


}




//UpdateProduct/DataUpdate/Update
exports.UpdateProduct = (req,res)=>{  

    let id = req.params.id;
    let Query = {_id:id};
    let reqBody = req.body; //এখানে updateData
    
    ProductsModel.updateOne(Query,reqBody,{upsert:true}, (error,data)=>{

        if(error){

            res.status(400).json({status:"fail", data:error});

         }else{

          res.status(200).json({status:"Update success", data:data});  

         }



    });


   
}






//DeleteProduct/DataDelete/Delete
exports.DeleteProduct = (req,res)=>{  

    let id = req.params.id;
    let Query = {_id:id};

    
    ProductsModel.remove(Query,(error,data)=>{

        if(error){

            res.status(400).json({status:"fail", data:error});

         }else{

          res.status(200).json({status:"Delete success", data:data});  

         }

    });


   
}

