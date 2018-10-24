/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Cart from '../Cart/Cart'
import Picker from '../Common/Picker/Picker'
import PopupView from '../Common/Popup/PopupView'

type Props = {};
export default class Home extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
    this.popupView = PopupView.getInstance();
  }

  render() {

    return (<View style={styles.container}>

      <TouchableOpacity onPress={() => this.popupView.showAlert(this, "错误信息") } style={{
          width: (180),
          height: (35),
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: '#999999',
          borderWidth: this.mOnePixel,
          padding: (10),
          backgroundColor: '#cccccc',
          borderRadius: (4),
          marginBottom: (20)
        }}>
        <Text>123</Text>
      </TouchableOpacity >
      <Cart ref={ref => this.Cart = ref}/>
      {this.state.showPopup && this.popupView.show()}
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
