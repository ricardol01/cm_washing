/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  FlatList,
  TouchableOpacity
} from 'react-native';
const {height, width} = Dimensions.get('window');
import ScrollableTabView from 'react-native-scrollable-tab-view';
import HomeAction from '../../Actions/HomeAction';
import HomeStore from '../../Stores/HomeStore';

import Cart from '../Cart/Cart'

type Props = {};
export default class Home extends Component<Props> {
  constructor() {
    super();
    this.state = HomeStore.getState();
    this._renderProduct = this._renderProduct.bind(this);
    this._onChange = this._onChange.bind(this);
    this._addItem = this._addItem.bind(this);
    this._removeItem = this._removeItem.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);

  }
  componentDidMount() {
    HomeStore.addChangeListener(this._onChange);
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
    HomeAction.getProductList();

  }
  componentWillUnmount() {
    HomeStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    const state = Object.assign({}, HomeStore.getState());
    this.setState(state);
  }
  _addItem(sku_id) {
    HomeStore.updateCartItem(sku_id, 1);

    const state = Object.assign({}, HomeStore.getState());
    this.setState(state);
  }
  _removeItem(sku_id) {
    HomeStore.updateCartItem(sku_id, -1);

    const state = Object.assign({}, HomeStore.getState());
    this.setState(state);
  }
  updateQuantity(sku_id, delta){
    HomeStore.updateCartItem(sku_id, delta);
    const state = Object.assign({}, HomeStore.getState());
    this.setState(state);
  }
  _renderProduct({item}) {
    const _display_price = () => {
      if (item.display_price != item.original_price) {
        return (<Text style={{
            marginLeft: 12,
            fontSize: 14,
            color: '#999999',
            textDecorationLine: 'line-through'
          }}>${item.original_price + ' ' + item.unit}</Text>)
      }

    }
    const _display_remove = () => {
      if (HomeStore.getItemAmount(item.sku_id) != 0)
        return (<TouchableOpacity onPress={() => {
            this._removeItem(item.sku_id)
          }} style={{
            flex: 1
          }}>
          <View style={{
              flex: 1,
              marginBottom: 5,
              backgroundColor: '#2ad3be',
              borderRadius: 40,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Text style={{
                marginBottom: 5,
                fontSize: 16,
                color: 'white'
              }}>
              -
            </Text>

          </View>

        </TouchableOpacity>);
      return (<TouchableOpacity onPress={() => {
          this._removeItem(item.sku_id)
        }} style={{
          flex: 1
        }}>
        <View style={{
            flex: 1,
            marginBottom: 5,
            backgroundColor: '#b3b3b3',
            borderRadius: 40,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Text style={{
              marginBottom: 5,
              fontSize: 16,
              color: 'white'
            }}>
            -
          </Text>

        </View>

      </TouchableOpacity>)

    }
    return (<View style={{
        width: 0.5 * width,
        height: 0.25 * height,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <View style={{
          width: 0.45 * width,
          height: 0.22 * height,
          backgroundColor: 'white',
          borderRadius: 10
        }}>
        <View style={{
            flex: 2
          }}>
          <Image source={{
              uri: item.url
            }} style={{
              flex: 1
            }}/>
        </View>
        <View style={{
            flex: 1
          }}>
          <View style={{
              flex: 1,
              justifyContent: 'center'
            }}>
            <Text style={{
                marginLeft: 10,
                fontSize: 16
              }}>
              {item.name_zh}
            </Text>
          </View>
          <View style={{
              flex: 1,
              flexDirection: 'row'
            }}>
            <View style={{
                flex: 1,
                flexDirection: 'row'
              }}>
              <Text style={{
                  marginLeft: 10,
                  fontSize: 16,
                  color: '#2ad3be'
                }}>
                ${item.display_price + ' ' + item.unit}
              </Text>
              {_display_price()}

            </View>
            <View style={{
                flexDirection: 'row',
                flex: 1
              }}>
              {_display_remove()}
              <View style={{
                  flex: 2,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <Text style={{
                    color: '#404041',
                    fontSize: 16,
                    marginBottom: 5
                  }}>
                  {HomeStore.getItemAmount(item.sku_id)}
                </Text>
              </View>
              <TouchableOpacity onPress={() => {
                  this._addItem(item.sku_id)
                }} style={{
                  flex: 1
                }}>
                <View style={{
                    flex: 1,
                    marginBottom: 5,
                    backgroundColor: '#2ad3be',
                    borderRadius: 40,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  <Text style={{
                      marginBottom: 5,
                      fontSize: 16,
                      color: 'white'
                    }}>
                    +
                  </Text>
                </View>

              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>
    </View>)
  }
  render() {
    return (<View style={styles.container}>
      <View style={{
          width: width,
          height: 0.1 * height,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row'
        }}>
        <View style={{
            flex: 1,

            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Image source={require('./image/Cart.png')} style={{
              width: 0.05 * height,
              height: 0.05 * height
            }}/>

        </View>
        <Text style={{
            flex: 2,
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold'
          }}>
          馋猫干洗
        </Text>
        <TouchableOpacity onPress={() => this.Cart.show()} style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Image source={require('./image/Cart.png')} style={{
              width: 0.05 * height,
              height: 0.05 * height
            }}/>
        </TouchableOpacity>
      </View>
      <View style={{
          flex: 1,
          backgroundColor: '#f4f4f4'
        }}>
        <ScrollableTabView tabBarBackgroundColor={'#f4f4f4'} tabBarActiveTextColor={'#2ad3be'} tabBarUnderlineStyle={{
            backgroundColor: '#2ad3be'
          }} tabBarTextStyle={{
            fontSize: 16,
            top: 5
          }} tabBarInactiveTextColor={'#666666'} initialPage={0} prerenderingSiblingsNumber={3} tabBarPosition={'top'} ref={(scrollView) => {
            this.scrollView = scrollView;
          }} contentProps={{
            keyboardDismissMode: "on-drag",
            keyboardShouldPersistTaps: 'always'
          }}>

          <Animated.View tabLabel="全部" style={{
              flex: 1
            }}>
            <FlatList scrollEventThrottle={1} ref={(comp) => this._scrollVew = comp} onEndReached={this._onEndReached} onEndReachedThreshold={0.3} data={this.state.productList} renderItem={this._renderProduct} getItemLayout={(data, index) => ({
                length: 250,
                offset: 250 * index,
                index
              })} numColumns={2} columnWrapperStyle={{
                marginTop: 10
              }}/>
          </Animated.View>
          <Animated.View tabLabel="衣服" style={{
              flex: 1
            }}></Animated.View>
          <Animated.View tabLabel="鞋子" style={{
              flex: 1
            }}></Animated.View>
          <Animated.View tabLabel="居家" style={{
              flex: 1
            }}></Animated.View>
        </ScrollableTabView>
      </View>
      <Cart ref={ref => this.Cart = ref} currentCart={this.state.cartProducts} onPressedQuantity={this.updateQuantity}/>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'white'
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
