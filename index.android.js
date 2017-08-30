import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import AppNavigator from './app/navigators/AppNavigator';

class ReactNativeSample extends Component {
  render() {
    return <AppNavigator />;
  }
}

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);
