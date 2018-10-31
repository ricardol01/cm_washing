import AppConstants from '../Constants/AppConstants';
import {dispatch, register} from '../Dispatchers/AppDispatcher';
import {EventEmitter} from 'events';
import OrderAction from '../Actions/OrderAction';
const CHANGE_EVENT = 'change';


const RestaurantStore = Object.assign({},EventEmitter.prototype,{
  state:{
    orderList:[],
    cart_products:[],
  },
  initState(){
    this.state = {
      orderList:{
        ea_products:[],
        ea_categories:[],
      },
      };
  },
  add_item(item)
  {
    let find=-1;
    let cart=this.state.cart_products;
    for (i=0;i<cart.length;i++)
    {
      if (cart[i].sku_id==item.sku_id)
      {
        cart[i].amount++;
        find=i;
      }
    }
    if (find==-1) {
      let new_item={
        sku_id:item.sku_id,
        amount:1,
      }
      cart.push(new_item);
    }
    this.state.cart_products=cart;
  },
  remove_item(item)
  {
    let cart=this.state.cart_products;
    for (i=0;i<cart.length;i++)
    {
      if (cart[i].sku_id==item.sku_id)
      {
        cart[i].amount--;
      }
    }
    this.state.cart_products=cart;
  },
  get_item()
  {
    return this.state.cart_products;
  },
  get_item_amount(item)
  {
    let cart=this.state.cart_products;
    for (i=0;i<cart.length;i++)
    {
      if (cart[i].sku_id==item.sku_id)
      {
        return cart[i].amount;
      }
    }
    return 0;
  },
	emitChange(){
			this.emit(CHANGE_EVENT)
	},
	addChangeListener(callback){
			this.on(CHANGE_EVENT, callback)
	},
	removeChangeListener(callback){
			this.removeListener(CHANGE_EVENT, callback)
      // this.state = {
      //   checkoutSuccessful:false,
    	// 	addressList:[],
      //   dltype:1,
      //   pretax:0,
      //   payment_channel: 0,
      //   available_payment_channels: [{channel: 0, visa_fee: 0}],
      //   code:'',
      //   dltypeList:[
      //     {dltype:-1,
      //      description:'请先选择地址信息'
      //     }],
    	// 	showBanner:true,
      //   shouldAddAddress:false,
      //   visa_fee: 0,
      //   goToHistory: false,
      //   paymentFail: false,
      //   jumpToChoosePayment: false,
      // }
      this.initState();
	},

	initOrderState(){
		this.state ={}
	},
  getState(){
    return this.state
  },
  updateOrderList(data){
    const orderList=data;
    this.state = Object.assign(this.state,{orderList});
  },
	dispatcherIndex: register(function(action) {
	   switch(action.actionType){
				case AppConstants.PRODUCT_LIST:
								RestaurantStore.updateOrderList(action.data);
								RestaurantStore.emitChange();
                break;
        default:
                break;

		  }

	})

});
module.exports = RestaurantStore;
