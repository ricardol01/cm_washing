import OrderAPI from './OrderAPI';
import {
  NativeModules,
} from 'react-native';



export default  {
  async getHistoryOrder({authortoken}){
    try {

      const lo_data = {
        authortoken:authortoken,
      }
      const res = await OrderAPI.getHistoryOrder(lo_data);
      if(res.ev_error === 1) { throw 'add card fail'}
      const eo_data = res.ea_card_info;
      return eo_data
    } catch (e) {
      throw e
    }
  },
}
