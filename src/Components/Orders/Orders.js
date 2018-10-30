import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
import OrderAction from '../../Actions/OrderAction';
import OrderStore from '../../Stores/OrderStore';
import OrderCell from './OrderCell.js'
export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [1, 2, 3]
    }
    this._onChange = this._onChange.bind(this)
  }
  _onChange() {

  }
  componentDidMount() {
    OrderStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    OrderStore.removeChangeListener(this._onChange);
  }
  onPressedCell(key) {
    console.log(key);
  }
  renderCells(item) {
    return (
      <OrderCell
        cardStyle={styles.card}
        onPressedCell={this.onPressedCell}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={{marginTop: 6}} data={this.state.orders} renderItem={({item}) => (this.renderCells(item))}/>
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
