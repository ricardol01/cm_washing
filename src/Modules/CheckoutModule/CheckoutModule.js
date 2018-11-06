import CheckoutAPI from './CheckoutAPI';
import {
  NativeModules,
} from 'react-native';



export default  {
  async beforeOrder(io_data){
    try {

      const lo_data = {
        token:io_data.token,
        products:io_data.products,
      }
      const res = await CheckoutAPI.beforeOrder(lo_data);
      const eo_data ={
        ea_store_info:res.ea_store_info,
        ea_products:res.ea_products,
        ev_delifee:res.ev_delifee,
        ev_pretax:res.ev_pretax,
        ev_tax:res.ev_tax,
        ev_total:res.ev_total,
        eo_user_info:res.eo_user_info,
        ev_can_deliver:res.ev_can_deliver,
        ea_pickup_time:res.ea_pickup_time,
        ev_wash_time:res.ev_wash_time,
        ev_error:res.ev_error,
        ev_tax_w_deli:res.ev_tax_w_deli,
        ev_total_w_deli:res.ev_total_w_deli,
      }
      return eo_data
    } catch (e) {
      throw e
    }
  },
  async getCard(io_data){
    console.log('moduleeeee')
    try {

      const lo_data = {
        token:io_data.token,
      }
      // console.log(lo_data);
      const res = await CheckoutAPI.getCard(lo_data);
      console.log(res);
      const eo_data ={
        ev_error:res.ev_error,
        eo_last4:res.eo_last4,
      }
      return eo_data
    } catch (e) {
      throw e
    }
  },
}
