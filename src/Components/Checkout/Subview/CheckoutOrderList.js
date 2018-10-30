import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

export default class CheckoutOrderList extends Component{
  constructor(props) {
    super(props);
    this.state = {
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
    }
  }
  renderCell(item){
    return (
      <View style={{height: 30, flexDirection: 'row', flex: 1}}>
        <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center',alignItems: 'center'}}>
          <Text style={[styles.text, styles.quantityText]}>{item.quantity}</Text>
        </View>
        <View style={{flex: 8,justifyContent: 'center', marginLeft: -4}}>
          <Text style={[styles.text, {marginLeft: 20,}]}>{item.name}</Text>
        </View>
        <View style={{flex: 2,justifyContent: 'center', flexDirection: 'row'}}>
          <Text style={[styles.text, {marginLeft: 10,}]}>$ {parseFloat(Math.round(item.price * item.quantity * 100) / 100).toFixed(2)}</Text>

          <TouchableOpacity style={{marginLeft: 10,}} onPress={this.props.onPressedRemove}>
            <Image style={{width: 18, height: 18, backgroundColor: 'black', justifyContent: 'center',alignItems: 'center'}}></Image>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  renderItemList(){
    let cells = []
    for (i of this.state.items){
      cells.push(this.renderCell(i));
    }
    return cells;
  }

  render() {
    const listHeight = 30 * this.state.items.length;
    return (
      <View style={{height: listHeight, marginBottom: 8}}>
        {this.renderItemList()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontWeight: '700',
    fontSize: 13,
  },
  quantityText: {
    width: 18,
    height: 18,
    backgroundColor: 'grey',
    textAlign: 'center',
    color: 'white',
  }
});
