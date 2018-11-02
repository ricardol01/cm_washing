import AppConstants from '../Constants/AppConstants';
import {dispatch, register} from '../Dispatchers/AppDispatcher';

import CheckoutModule from '../Modules/CheckoutModule/CheckoutModule';
import {NativeModules} from 'react-native';
export default {

    async beforeOrder(io_data) {
      try{
        const data = await CheckoutModule.beforeOrder(io_data);
        data.goCheckout=1;
        console.log(data);
        dispatch({
             actionType: AppConstants.CHECKOUT_INFORMATION,data
         })
      }catch(error){
        console.log(error)
        throw error;
      }
    },
}
