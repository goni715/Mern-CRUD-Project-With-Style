import React from 'react';
import UpdateForm from '../components/Update/UpdateForm';
import AppNavBar from "../components/Common/AppNavBar";
import {useParams} from "react-router";


const UpdatePage = () => {

    const params = useParams();

    return (

        <div>
            <AppNavBar></AppNavBar>
             <UpdateForm id={params['id']}></UpdateForm>
        </div>
     );
}
 
export default UpdatePage;