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
      }
      return eo_data
    } catch (e) {
      throw e
    }
  },
}
