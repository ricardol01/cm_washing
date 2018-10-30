/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions,
Image,
Animated,
FlatList,
} from 'react-native';
const { height, width } = Dimensions.get('window');
import ScrollableTabView from 'react-native-scrollable-tab-view';
import HomeAction from '../../Actions/HomeAction';
import HomeStore from '../../Stores/HomeStore';
type Props = {};
export default class Home extends Component<Props> {
  constructor(){
    super();
        this.state = HomeStore.getState();
    this._renderProduct=this._renderProduct.bind(this);
    this._onChange=this._onChange.bind(this);
  }
  componentDidMount() {
    HomeStore.addChangeListener(this._onChange);
    setTimeout(() => {
      this.props.navigator.showModal({
         screen: "CmWashingHomeAlert",
         passProps: {
           message:"1111111"
         },
         animated: false,
         navigatorStyle: {navBarHidden: true},
        });
    }, 6000);
    HomeAction.getProductList();

}
componentWillUnmount() {
  HomeStore.removeChangeListener(this._onChange);
}
_onChange(){
    console.log('onchange')
    const state = Object.assign({},HomeStore.getState());
    this.setState(state);
    console.log(this.state.orderList);
}
  _renderProduct({item}) {
    const _display_price = () => {
      if (item.display_price!=item.original_price) {
        return (
          <Text style={{marginLeft:12,fontSize:14,
            color:'#999999',textDecorationLine:'line-through'}}>${item.original_price}</Text>
        )
      }

    }
    return(
      <View style={{width:0.5*width,height:0.25*height,
      alignItems:'center',
      justifyContent:'center',}}>
        <View style={{width:0.45*width,height:0.22*height,backgroundColor:'white',borderRadius:10,}}>
          <View style={{flex:2  ,}}>
            <Image source={{uri:'http://norgta.com/storage/image/cm_clean/15408365468031.png'}}
              style={{flex:1}}
            />
          </View>
          <View style={{flex:1,}}>
            <View style={{flex:1,justifyContent:'center'}}>
              <Text style={{marginLeft:10,fontSize:16}}>
                {item.name_zh}
              </Text>
            </View>
            <View style={{flex:1,flexDirection:'row'}}>
              <View style={{flex:1,flexDirection:'row',}}>
                <Text style={{marginLeft:10,fontSize:16,color:'#2ad3be'}}>
                  ${item.display_price}
                </Text>
                {_display_price()}

              </View>
              <View style={{flex:1}}>
              </View>
            </View>

          </View>
        </View>
      </View>
    )
      }
  render() {
    return (
      <View style={styles.container}>
        <View style={{
          width:width,
          height:0.1*height,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection:'row',
        }}>
          <View style={{flex:1,

            justifyContent: 'center',
            alignItems: 'center',}}>
            <Image source={require('./image/Cart.png')}
            style={{width:0.05*height,height:0.05*height}}
            />


          </View>
          <Text style={{flex:2,textAlign:'center',fontSize:20,fontWeight:'bold'}}>
            馋猫干洗
          </Text>
          <View style={{flex:1,
          justifyContent: 'center',
          alignItems: 'center',}}>
            <Image source={require('./image/Cart.png')}
            style={{width:0.05*height,height:0.05*height,}}
            />
          </View>
        </View>
        <View style={{flex:1,backgroundColor:'#f4f4f4'}}>
          <ScrollableTabView
            tabBarBackgroundColor={'#f4f4f4'}
            tabBarActiveTextColor={'#2ad3be'}
            tabBarUnderlineStyle = {{backgroundColor:'#2ad3be',}}
            tabBarTextStyle={{fontSize:16, top:5}}
            tabBarInactiveTextColor={'#666666'}
            initialPage={0}
            prerenderingSiblingsNumber={3}
            tabBarPosition={'top'}
            ref={(scrollView) => { this.scrollView = scrollView; }}
            contentProps={{
            keyboardDismissMode: "on-drag",
            keyboardShouldPersistTaps: 'always'
            }}
            >

            <Animated.View tabLabel= "全部" style={{flex:1}}>
              <FlatList
                          scrollEventThrottle={1}


                          ref={(comp) => this._scrollVew = comp}
                          onEndReached={this._onEndReached}
                          onEndReachedThreshold={0.3}
                          data={this.state.orderList.ea_products}
                          renderItem={this._renderProduct}
                          getItemLayout={(data, index) => (
                               {length: 250, offset: 250 * index, index}
                             )}
                         numColumns={2}
                         columnWrapperStyle={{ marginTop: 10,alignSelf:'center' }}
                      />
            </Animated.View>
            <Animated.View tabLabel="衣服" style={{flex:1}}>

            </Animated.View>
            <Animated.View tabLabel= "鞋子" style={{flex:1}}>

            </Animated.View>
            <Animated.View tabLabel="居家" style={{flex:1}}>

            </Animated.View>
          </ScrollableTabView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
