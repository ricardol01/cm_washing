import AppConstants from '../Constants/AppConstants';
import {dispatch, register} from '../Dispatchers/AppDispatcher';

import OrderModule from '../Modules/OrderModule/OrderModule';
import {NativeModules} from 'react-native';
export default {

    async getProductList(io_data) {
      try{
        const data = await OrderModule.getHistoryOrder(io_data);
        dispatch({
             actionType: AppConstants.PRODUCT_LIST,data
         })
      }catch(error){
        console.log(error)
        throw 'no cardToken'
      }
    },
}
