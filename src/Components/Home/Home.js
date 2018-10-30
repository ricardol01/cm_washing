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

type Props = {};
export default class Home extends Component<Props> {
  constructor(){
    super();
    this._renderProduct=this._renderProduct.bind(this);
    this.state={
      prod_list:[
        {
          name:'1',
        },
        {
          name:'2',
        }
      ]
    }
  }
  componentDidMount() {

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

}
  _renderProduct({item}) {
    return(
      <View style={{width:0.5*width,height:0.25*height,
      alignItems:'center',
      justifyContent:'center',}}>
        <View style={{width:0.45*width,height:0.22*height,backgroundColor:'white',borderRadius:10,}}>
          <View style={{flex:2  ,backgroundColor:'red'}}>
            <Image source={require('./image/Cart.png')}
            style={{resizeMode:'stretch'}}
            />
          </View>
          <View style={{flex:1,backgroundColor:'blue'}}>
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
                          data={this.state.prod_list}
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
