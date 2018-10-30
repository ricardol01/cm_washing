import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Common from '../../../Constants/Common'

export default class CheckoutUserInfo extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={this.props.cardStyle}>
        <View style={styles.content}>
          <Text style={{fontWeight: '800', color: Common.MAIN_COLOR, marginBottom: 10, fontSize: 14,}}>个人信息</Text>
          <View style={{flexDirection: 'row', justifyContent:'space-between', marginBottom: 10,}}>
            <Text style={{fontWeight: '700', color: 'grey', fontSize: 13,}}>请填写个人信息</Text>
            <Text>></Text>
          </View>
          <View style={{flexDirection: 'column', marginBottom: 10,}}>
            <Text style={{fontWeight: '600', fontSize: 13,}}>Ginny</Text>
          </View>
          <View style={{flexDirection: 'column', marginBottom: 8,}}>
            <Text style={{fontWeight: '600', fontSize: 13,}}>904-554-0094</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 24,
    marginRight: 24,
  }
});