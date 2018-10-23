import React, {Component} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import BaseDialog from '../Common/BaseDialog';
import CartItemList from './CartItemList'

export default class Cart extends BaseDialog {

  static defaultProps = {
    removeSubviews: false,
    itemHeight: 40,
  }

  constructor(props) {
    super(props);
  }

  _getContentPosition() {
    return {justifyContent: 'flex-start', alignItems: 'center'}
  }

  renderCart() {
    return (
      <View style={{margin: 12}}>
        {this.renderCartHeader()}
        {this.renderCartItems()}
        {this.renderCartFooter()}
        {this.renderCheckoutButton()}
      </View>
    )
  }
  renderCartHeader(){
    return (
      <View style={styles.header}>
        <View style={{flex: 1}}>
          <TouchableOpacity>
            <Text style={styles.clearButton}>Clear All</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.headerTitle, {flex: 1}]}>购物车</Text>
        <View style={{flex: 1}}></View>
      </View>
    )
  }
  renderCartItems(){
    return (
      <View style={{height: 120, backgroundColor: 'red', marginTop: 12,}}>
        <CartItemList></CartItemList>
      </View>
    )
  }
  renderCartFooter(){
    return (
      <View style={{height: 32, marginTop: 12, backgroundColor: 'blue', flexDirection: 'row'}}>
        <View style={{backgroundColor: 'yellow', flex: 1}}>

        </View>
        <View style={{backgroundColor: 'blue', flex: 1}}>
          <Text style={styles.totalText}>Subtotal: $24.00</Text>
        </View>
      </View>
    )
  }
  renderCheckoutButton() {
    return (
      <View style={styles.checkoutButton}>
        <TouchableOpacity>
          <Text style={{color: 'white', fontSize: 16,}}>Checkout</Text>
        </TouchableOpacity>
      </View>
    )
  }
  renderContent() {
    const sideMargin = 12;
    return <View style={{
        height: this.props.itemHeight * 5 + this.getSize(58),
        width: this.mScreenWidth - (sideMargin * 2),
        backgroundColor: '#ffffff',
        marginTop: 68,
      }}>
      { this.renderCart() }
    </View>
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerTitle: {
    textAlign: 'center',
  },
  clearButton: {
    justifyContent: 'flex-start',
    color: "grey",
  },
  totalText: {
    textAlign: 'right',
    fontSize: 16,
  },
  checkoutButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    height: 42,
    marginTop: 12,
    marginLeft: -12,
    marginRight: -12,
    marginBottom: 0,
  }
});
