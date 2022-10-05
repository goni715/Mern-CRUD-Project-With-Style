import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class ValidationHelper{

      isEmpty(value){

            if(value.length===0){
                return true;
            }
            else{
                return false;
            }
      }



      SuccessToast(msg){

          toast.success(msg, {
              position: toast.POSITION.TOP_CENTER
          });

      }


      ErrorToast(msg){

          toast.error(msg, {
              position: toast.POSITION.TOP_CENTER
          });
      }

}

export const {isEmpty,SuccessToast,ErrorToast}= new ValidationHelper();