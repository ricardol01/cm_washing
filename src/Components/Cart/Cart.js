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

import HomeAction from '../../Actions/HomeAction';
import CheckoutAction from '../../Actions/CheckoutAction';
import HomeStore from '../../Stores/HomeStore';
import CheckoutStore from '../../Stores/CheckoutStore';

export default class Cart extends BaseDialog {

  static defaultProps = {
    removeSubviews: false,
    itemHeight: 40,
  }

  constructor(props) {
    super(props);
    this._goToCheckout=this._goToCheckout.bind(this);
    this._onChange=this._onChange.bind(this);
  }
  componentDidMount() {
    CheckoutStore.addChangeListener(this._onChange);
    // setTimeout(() => {
    //   this.props.navigator.showModal({
    //      screen: "CmWashingHomeAlert",
    //      passProps: {
    //        message:"1111111"
    //      },
    //      animated: false,
    //      navigatorStyle: {navBarHidden: true},
    //     });
    // }, 6000);

  }
  componentWillUnmount() {
    CheckoutStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    const state = CheckoutStore.getState();
    if (state.goCheckout==1)
    {
      this.props.goToCheckout();
    }
  }

  _getContentPosition() {
    return {justifyContent: 'flex-start', alignItems: 'center'}
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
    const cellHeight = 40;
    return (
      <View style={{height: cellHeight * this.props.currentCart.length, marginTop: 12, marginBottom: 4,}}>
        <CartItemList items={this.props.currentCart} onPressedQuantity={this.props.onPressedQuantity} />
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
  _goToCheckout()
  {
    let iv_products=[];
    let products=HomeStore.getItem();
    for (i=0;i<products.length;i++)
    {
      let currentProd={
        sku_id:products[i].sku_id,
        amount:products[i].amount,
      }
      iv_products.push(currentProd);
    }
    let lo_data={
      token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NDA3ODU5NDUsImV4cCI6MTU3MjMyMTk0NSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsInVpZCI6IjEifQ.RIk_KgD_Oq31NkB6FSL0_PsRhmRWA3DwOLz2Fj4bjhI',
      products:iv_products,
    }
    CheckoutAction.beforeOrder(lo_data);


  }
  renderCheckoutButton() {
    return (
      <TouchableOpacity onPress={this._goToCheckout} style={styles.checkoutButton}>
        <View style={{flex:1,justifyContent: 'center',
            alignItems: 'center',}} onPress={this.onPressedCheckout}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: '700',}}>结算</Text>
        </View>
      </TouchableOpacity>
    )
  }
  renderContent() {
    const sideMargin = 12;
    return <View style={{
        width: this.mScreenWidth - (sideMargin * 2),
        backgroundColor: '#ffffff',
        marginTop: 68,
      }}>
      { this.renderCart() }
      {this.renderCheckoutButton()}
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
    marginLeft: 0,
    marginRight: 0,
    marginTop: 22,
  }
});
