// import { API_ORDER_BEFORE, API_ADD_CARD, API_ADD_ORDER } from '../../Config/API';
export default  {
  beforeOrder(io_data){
    const url = 'https://norgta.com/api/cmclean/v1/before_order';

    let options = {
        method: 'POST',
        mode:'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    options.headers = Object.assign(options.headers,{
        'authortoken':io_data.token,
    })

    options.body = JSON.stringify({
      iv_products: io_data.products,
    })

    return fetch(url,options)
            .then((res) => res.json())
            .catch((error) => {throw error})
  },

}
