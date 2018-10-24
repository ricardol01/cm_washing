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

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  renderItemCells(item) {
    switch (item) {
      case "delivery":
        return (<CheckoutDelivery/>)
        break;
      case "userInfo":
        return (<CheckoutUserInfo/>)
        break;
      case "payment":
        return (<CheckoutPayment/>)
        break;
      case "orderInfo":
        return (<CheckoutOrderInfo/>)
        break;
      default:
        return (<View/>)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList data={['delivery', 'userInfo', 'payment', 'orderInfo']} renderItem={({item}) => (this.renderItemCells(item))}/>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  }
});
