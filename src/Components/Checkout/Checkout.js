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
        return (<CheckoutDelivery cardStyle={styles.card}/>)
        break;
      case "userInfo":
        return (<CheckoutUserInfo cardStyle={styles.card}/>)
        break;
      case "payment":
        return (<CheckoutPayment cardStyle={styles.card}/>)
        break;
      case "orderInfo":
        return (<CheckoutOrderInfo cardStyle={styles.card}/>)
        break;
      default:
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
