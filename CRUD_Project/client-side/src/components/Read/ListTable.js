import React, {Fragment, useEffect, useState} from 'react';
import {Delete, Read} from "../../APIServices/CRUDServices";
import FullScreenLoader from "../Common/FullScreenLoader";
import {ErrorToast, SuccessToast} from "../../Helper/ValidationHelper";
import {ToastContainer} from "react-toastify";
import {useLocation, useNavigate} from "react-router-dom";


const ListTable = () => {

    let [DataList,SetDataList]=useState([]);

    useEffect(()=>{

        Read().then((result)=>{
            SetDataList(result);
        })

    },[]);



   /* Delete data*/
    //const history =
    const navigate = useNavigate();
    const DeleteItem = (id) => {

      Delete(id).then((result)=>{
           if(result===true){
                 SuccessToast("Delete Success");

                 Read().then((result)=>{

                   SetDataList(result);


                  })

           }
           else{
              ErrorToast("Request Fail Try Again");
           }
      })
    }


    /* Update data*/
    //const navigate = useNavigate();
    const UpdateItem = (id) => {

         navigate("/update/"+id);
    }





    if(DataList.length>0){
        return (
            <Fragment>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="card list-card">
                                <div className="card-header pb-0">
                                    <h4>Product List</h4>
                                </div>
                                <div className="card-body">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Product</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Unit Price</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Quantity</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Total Price</th>
                                            <th className="text-secondary opacity-7">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            DataList.map((item,i)=>{

                                                return(
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex px-2 py-1">
                                                                <div>
                                                                    <img src={item.Img} className="avatar avatar-sm me-3" alt={"user1"}/>
                                                                </div>
                                                                <div className="d-flex flex-column justify-content-center">
                                                                    <h6 className="mb-0 text-sm">{item.ProductName}</h6>
                                                                    <p className="text-xs text-secondary mb-0">{item.ProductCode}</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h6 className="mb-0 text-sm">{item.UnitPrice}</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="mb-0 text-sm">{item.Quantity}</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="mb-0 text-sm">{item.TotalPrice}</h6>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group" role="group" aria-label="Basic Example">
                                                                 <button onClick={DeleteItem.bind(this,item._id)} className="btn btn-danger"><i className="fa fa-trash-alt"/></button>
                                                                 <button onClick={UpdateItem.bind(this,item._id)} className="btn btn-success"><i className="fa fa-edit"/></button>
                                                            <ToastContainer/>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )

                                            })
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Fragment>
        );
    }
    else{
        return(
            <Fragment>
                <FullScreenLoader></FullScreenLoader>
            </Fragment>
        );
    }



};

export default ListTable;