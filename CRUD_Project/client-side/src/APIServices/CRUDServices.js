import axios from "axios";
//import CreateForm from "../components/Create/CreateForm";

/*Data Create Function Started*/
export function Create(ProductName,ProductCode,Img,UnitPrice,Quantity,TotalPrice){

   let URL = "/api/v1/CreateProduct";

   let PostBody={
        ProductName:ProductName,
        ProductCode:ProductCode,
        Img:Img,
        UnitPrice:UnitPrice,
        Quantity:Quantity,
        TotalPrice:TotalPrice
   }

    return axios.post(URL,PostBody).then((res)=>{
        if(res.status === 200){
             return true;

        }else{
             return false;
        }

    }).catch((error)=>{
        console.log(error);
        return false;
    });

}
/*Create function Ended*/





/*Data Read/Select Function Started*/
export function Read(){
    let URL = "/api/v1/ReadProduct";
    return axios.get(URL).then((res)=>{
        if(res.status===200){
            return res.data['data'];

       }else{
            return false;
       }

    }).catch((error)=>{
        console.log(error);
        return false;
    });
}





/*Data Read/SelectByID Function Started*/
export function ReadByID(id){

     let URL = "/api/v1/ReadProductByID/"+id;

      return axios.get(URL).then((res)=>{
        if(res.status===200){
            return res.data['data'];

        }else{
            return false;
        }

       }).catch((error)=>{

           console.log(error);
           return false;
      });
}
/*Data Read/SelectByID Function Ended*/





/*Data Update Function Started*/
export function Update(id,ProductName,ProductCode,Img,UnitPrice,Quantity,TotalPrice){

    let URL = "/api/v1/UpdateProduct/"+id;

    let PostBody={
        ProductName:ProductName,
        ProductCode:ProductCode,
        Img:Img,
        UnitPrice:UnitPrice,
        Quantity:Quantity,
        TotalPrice:TotalPrice
   }


    
   return axios.post(URL,PostBody).then((res)=>{
    if(res.status===200){
         return true;

    }else{
         return false;
    }

    }).catch((error)=>{
         console.log(error);
         return false;
    });
}
/*Data Update Function Ended*/






/* Data Delete Function Started*/

export function Delete(id){

    let URL = "api/v1/DeleteProduct/"+id;
    return axios.post(URL).then((res)=>{

        if(res.status===200){
            return true;

       }else{
            return false;
       }

    }).catch((error)=>{
        //console.log(error);
        return false;
    });
}

