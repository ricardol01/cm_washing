import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';

import CheckoutDelivery from './Subview/CheckoutDelivery.js'
import CheckoutUserInfo from './Subview/CheckoutUserInfo.js'
import CheckoutPayment from './Subview/CheckoutPayment.js'
import CheckoutOrderInfo from './Subview/CheckoutOrderInfo.js'

import CheckoutAction from '../../Actions/CheckoutAction';
import CheckoutStore from '../../Stores/CheckoutStore';

import DateTimePicker from '../Common/Picker/Picker'

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = CheckoutStore.getState();
    this.renderItemCells=this.renderItemCells.bind(this);
    this._onChange=this._onChange.bind(this);

    this.onPressedPickupTime=this.onPressedPickupTime.bind(this);
    this.onPressedDeliverTime=this.onPressedDeliverTime.bind(this);
  }
  componentDidMount() {
    CheckoutStore.addChangeListener(this._onChange);
    CheckoutAction.getCard()
  }
  _onChange() {
    const state = Object.assign({}, CheckoutStore.getState());
    this.setState(state);
    console.log('555', this.state.ea_pickup_time);
  }
  componentWillUnmount() {
    CheckoutStore.removeChangeListener(this._onChange);
  }
  onPressedPickupTime(){
    this.Picker.show();
  }
  onConfirmPickupTime(pickedData){
    console.log(pickedData);
  }
  onPressedDeliverTime(){

  }
  renderItemCells(item) {
    switch (item) {
      case "delivery":
        return (<CheckoutDelivery
          cardStyle={styles.card}
          onPressedPickupTime={this.onPressedPickupTime}
          onPressedDeliverTime={this.onPressedDeliverTime}
          />
      )
        break;
      case "userInfo":
        return (<CheckoutUserInfo userInfo={this.state.eo_user_info} cardStyle={styles.card}/>)
        break;
      case "payment":
        return (<CheckoutPayment cardInfo={this.state.eo_last4} cardStyle={styles.card}/>)
        break;
      case "orderInfo":
        return (<CheckoutOrderInfo productList={this.state.ea_products} delifee={this.state.ev_delifee} tax={this.state.ev_tax_w_deli} total={this.state.ev_total_w_deli} cardStyle={styles.card}/>)
        break;
      default:
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList data={['delivery', 'userInfo', 'payment', 'orderInfo']} renderItem={({item}) => (this.renderItemCells(item))}/>
        <DateTimePicker
          ref={ref => this.Picker = ref}
          items={this.state.ea_pickup_time}
          linked={true}
          primaryKey={"date"}
          secondaryKey={"available_time"}
          onPickerConfirm={this.onConfirmPickupTime}
        />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 6,
    elevation: 5,
    shadowOffset: {width: 0, height: 0},
    shadowColor: 'grey',
    shadowOpacity: 0.3,
    shadowRadius: 2
  },
});
