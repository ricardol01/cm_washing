import React, {Component} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

import CartItemListCell from './CartItemListCell'

export default class CartItemList extends Component {

  constructor(props) {
    super(props);
  }
  renderItemCells(item){
    return (
      <CartItemListCell item={item} onPressedQuantity={this.props.onPressedQuantity} />
    )
  }
  render() {
    return (
      <FlatList
        data={this.props.items}
        renderItem={({item}) => (
          this.renderItemCells(item)
        )}
      />
    )
  }
}

const styles = StyleSheet.create({

});
