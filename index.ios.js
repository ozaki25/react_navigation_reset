import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import AppNavigator, { landscapeOrientationScreens } from './app/navigators/AppNavigator';

class ReactNativeSample extends Component {
  handleOrientation(currentRouteName) {
    landscapeOrientationScreens.includes(currentRouteName) ? alert('横向き固定の画面です！') : alert('横向き固定じゃない画面です！');
  }

  onNavigationStateChange(prevState, currentState, action) {
    const routes = currentState.routes;
    const currentRouteName = routes[routes.length - 1].routeName;
    this.handleOrientation(currentRouteName);
  }

  render() {
    return <AppNavigator onNavigationStateChange={this.onNavigationStateChange.bind(this)} />
  }
}

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);
