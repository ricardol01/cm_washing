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
import Common from '../../../Constants/Common'

export default class CheckoutUserInfo extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View style={styles.header}>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={styles.select} source={require('../Image/selected.png')}/>
            <Text style={{fontWeight: '700', fontSize: 13,}}>馋猫配送</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={styles.select} source={require('../Image/unselected.png')}/>
            <Text style={{fontWeight: '700', fontSize: 13,}}>自送自取</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={{fontWeight: '800', color: Common.MAIN_COLOR, marginBottom: 10, fontSize: 14,}}>自取地址</Text>
            <View style={{flexDirection: 'row', justifyContent:'space-between', marginBottom: 10,}}>
              <Text style={{fontWeight: '700', fontSize: 13,}}>North York</Text>
              <Text>></Text>
            </View>
          </View>
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 5,
    borderRadius: 6,
    elevation: 5,
    shadowOffset: {width: 0, height: 0},
    shadowColor: 'grey',
    shadowOpacity: 0.4,
    shadowRadius: 2
  },
  content: {
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 24,
    marginRight: 24,
  },
  header: {
    marginTop: 12,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  select: {
    width: 20,
    height: 20,
    marginRight: 8,
  }
});
