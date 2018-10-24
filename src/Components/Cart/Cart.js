import React, {Component} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import BaseDialog from '../Common/BaseDialog';
import CartItemList from './CartItemList'
import Common from '../../Constants/Common'

export default class Cart extends BaseDialog {

  static defaultProps = {
    removeSubviews: false,
    itemHeight: 40,
  }

  constructor(props) {
    super(props);
    const testData = {
      items: [
        {
          name: "加拿大鹅",
          id: 1,
          quantity: 1,
          price: 8.00
        },
        {
          name: "包",
          id: 2,
          quantity: 1,
          price: 8.00
        },
        {
          name: "鞋子",
          id: 3,
          quantity: 1,
          price: 9.00
        },
      ],
      allowedShipping: false,
      allowedPickup: true,
      tax: "12.00",
      subtotal: "24.00",
    }
    this.state = testData;
  }

  _getContentPosition() {
    return {justifyContent: 'flex-start', alignItems: 'center'}
  }
  onPressedQuantity(itemId, dQuantity){
    console.log(itemId, dQuantity);
  }
  clearCart(){

  }
  onPressedCheckout(){

  }
  renderCart() {
    return (
      <View style={{margin: 12}}>
        {this.renderCartHeader()}
        {this.renderCartItems()}
        <View style={{ borderBottomColor: '#999999', borderBottomWidth: 0.8, }} />
        {this.renderCartFooter()}
        {this.renderCheckoutButton()}
      </View>
    )
  }
  renderCartHeader(){
    return (
      <View style={styles.header}>
        <View style={[styles.clearButton, {flex: 1}]}>
          <TouchableOpacity onPress={this.clearCart}>
            <Text style={styles.clearButtonText}>全部清空</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.headerTitle, {flex: 3}]}>购物车</Text>
        <View style={{flex: 1}}></View>
      </View>
    )
  }
  renderCartItems(){
    return (
      <View style={{height: 120, marginTop: 12, marginBottom: 4,}}>
        <CartItemList items={this.state.items} onPressedQuantity={this.onPressedQuantity} />
      </View>
    )
  }
  renderCartFooter(){
    return (
      <View style={{height: 32, marginTop: 12, flexDirection: 'row'}}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          { this.state.allowedShipping &&
            <View style={{flexDirection: 'row'}}>
              <Image style={styles.shippingIcon} source={require('./Image/yes.png')}/>
              <Text style={styles.shippingText}>可配送</Text>
            </View>
          }
          { !this.state.allowedShipping &&
            <View style={{flexDirection: 'row'}}>
            <Image style={styles.shippingIcon} source={require('./Image/no.png')}/>
            <Text style={styles.shippingText}>满$30起送</Text>
            </View>
          }
          { this.state.allowedPickup &&
            <View style={{flexDirection: 'row'}}>
              <Image style={styles.shippingIcon} source={require('./Image/yes.png')}/>
              <Text style={styles.shippingText}>可自取</Text>
            </View>
          }
          { !this.state.allowedPickup &&
            <View style={{flexDirection: 'row'}}>
              <Image style={styles.shippingIcon} source={require('./Image/no.png')}/>
              <Text style={styles.shippingText}>不可自取</Text>
            </View>
          }
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.taxText}>税: $ {this.state.tax}</Text>
          <Text style={styles.totalText}>总计: $ {this.state.subtotal}</Text>
        </View>
      </View>
    )
  }
  renderCheckoutButton() {
    return (
      <View style={styles.checkoutButton}>
        <TouchableOpacity onPress={this.onPressedCheckout}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: '700',}}>结算</Text>
        </TouchableOpacity>
      </View>
    )
  }
  renderContent() {
    const sideMargin = 12;
    return <View style={{
        height: this.mScreenHeight * 0.4,
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
    fontWeight: '800',
    fontSize: 16,
  },
  clearButton: {

  },
  clearButtonText: {
    textAlign: 'center',
    color: "grey",
    fontWeight: '700',
    fontSize: 11,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  shippingIcon: {
    height: 13,
    width: 13,
    marginRight: 6,
  },
  shippingText: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 8,
  },
  taxText: {
    textAlign: 'right',
    fontSize: 12,
    color: 'grey',
    fontWeight: '600',
    marginBottom: 4,
  },
  totalText: {
    textAlign: 'right',
    fontSize: 16,
    fontWeight: '600',
  },
  checkoutButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Common.MAIN_COLOR,
    height: 42,
    marginLeft: -12,
    marginRight: -12,
    marginTop: 22,
  }
});
