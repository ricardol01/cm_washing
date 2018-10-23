import React, {Component} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

export default class CartItemList extends Component {

  constructor(props) {
    super(props);
  }
  renderItemCells(item){
    return (
      <View style={{backgroundColor: 'white', height: 32, flexDirection: 'row'}}>
        <View style={{flex: 2, backgroundColor: 'black'}}></View>
        <View style={{flex: 4, backgroundColor: 'green'}}></View>
        <View style={{flex: 2, backgroundColor: 'blue'}}></View>
      </View>
    )
  }
  render() {
    return (
      <FlatList
        data={[{title: 'Title Text', key: 'item1'}, {title: 'Title Text', key: 'item1'}, {title: 'Title Text', key: 'item1'}]}
        renderItem={({item}) => (
          this.renderItemCells(item)
        )}
      />
    )
  }
}

const styles = StyleSheet.create({

});
