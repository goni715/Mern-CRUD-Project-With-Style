import React, {Fragment, useEffect, useRef} from 'react';
import {ToastContainer} from "react-toastify";
import FullScreenLoader from "../Common/FullScreenLoader";
import {ErrorToast, isEmpty, SuccessToast} from "../../Helper/ValidationHelper";
import {ReadByID, Update} from "../../APIServices/CRUDServices";
import {useNavigate} from "react-router-dom";
import '../../assets/css/animate.min.css';

const UpdateForm = (props) => {


    let ProductName,ProductCode,Img,UnitPrice,Quantity,TotalPrice,Loader=useRef();

    useEffect(()=> {

        let ID = props.id;

        ReadByID(ID).then((result) => {

            ProductName.value = result[0]['ProductName'];
            ProductCode.value = result[0]['ProductCode'];
            Img.value = result[0]['Img'];
            UnitPrice.value = result[0]['UnitPrice'];
            Quantity.value = result[0]['Quantity'];
            TotalPrice.value = result[0]['TotalPrice'];



        })

    })


    let navigate = useNavigate();
    const UpdateData = () => {

        let Product_Name = ProductName.value;
        let Product_Code = ProductCode.value;
        let Product_Img = Img.value;
        let Unit_Price = UnitPrice.value;
        let Product_Quantity = Quantity.value;
        let Total_Price = TotalPrice.value;






        if(isEmpty(Product_Name)){
            ErrorToast("Product Name Required");
        }
        else if(isEmpty(Product_Code)){
            ErrorToast("Product Code Required");
        }
        else if(isEmpty(Product_Img)){
            ErrorToast("Product Image Required");
        }
        else if(isEmpty(Unit_Price)){
            ErrorToast("Product Unit Price Required");
        }
        else if(isEmpty(Product_Quantity)){
            ErrorToast("Product Quantity Required");
        }
        else if(isEmpty(Total_Price)){
            ErrorToast("Product Total Price Required");
        }
        else{

            Loader.classList.remove("d-none");

            let ID = props.id;
            Update(ID,Product_Name,Product_Code,Product_Img,Unit_Price,Product_Quantity,Total_Price)
                .then((result)=>{

                    if(result == true){
                        Loader.classList.add("d-none");
                        SuccessToast("Data Update Success");

                        //RedirectToReadPage
                       navigate("/", {
                            replace: true
                        });


                    }else{
                        ErrorToast("Request Fail Try Again");
                    }
                })


        }



    }







    return (

        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header pb-0">
                                <h4 className="animated fadeInUp">Update Product</h4>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4 p-2">
                                        <label className="animated fadeInUp">Product Name</label>
                                        <input ref={(input)=>ProductName=input} type="text" className="form-control animated fadeInUp"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Product Code</label>
                                        <input ref={(input)=>ProductCode=input} type="text" className="form-control animated fadeInUp"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Image</label>
                                        <input ref={(input)=>Img=input} type="text" className="form-control animated fadeInUp"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Unit Price</label>
                                        <input ref={(input)=>UnitPrice=input} type="text" className="form-control animated fadeInUp"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Quantity</label>
                                        <input ref={(input)=>Quantity=input} type="text" className="form-control animated fadeInUp"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Total Price</label>
                                        <input ref={(input)=>TotalPrice=input} type="text" className="form-control animated fadeInUp"/>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-md-4 p-2">
                                        <button onClick={UpdateData} className="btn btn-primary animated fadeInUp w-100">Update</button>
                                        <ToastContainer/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-none" ref={(div)=>Loader=div}>
                <FullScreenLoader/>
            </div>
        </Fragment>


    );
};

export default UpdateForm;