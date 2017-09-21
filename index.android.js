import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import AppNavigator, { disabledBackScreens, landscapeOrientationScreens } from './app/navigators/AppNavigator';
import { disabledAndroidBack, abledAndroidBack } from './app/utils/Utils';

class ReactNativeSample extends Component {
  handleAndroidBack(currentRouteName) {
    disabledBackScreens.includes(currentRouteName) ? disabledAndroidBack() : abledAndroidBack();
  }

  handleOrientation(currentRouteName) {
    landscapeOrientationScreens.includes(currentRouteName) ? alert('横向き固定の画面です！') : alert('横向き固定じゃない画面です！');
  }

  onNavigationStateChange(prevState, currentState, action) {
    const routes = currentState.routes;
    const currentRouteName = routes[routes.length - 1].routeName;
    this.handleAndroidBack(currentRouteName);
    this.handleOrientation(currentRouteName);
  }

  render() {
    return <AppNavigator onNavigationStateChange={this.onNavigationStateChange.bind(this)} />
  }
}

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);
