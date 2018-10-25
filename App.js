/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Navigation } from 'react-native-navigation';

import Home from './src/Components/Home/Home.js';

Navigation.registerComponent('home', () => Home);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'home',
    navigatorStyle: {navBarHidden: true},
    navigatorButtons: {},
  },
  animated: true,
  animationType: 'fade',
})
