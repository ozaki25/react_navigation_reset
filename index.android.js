import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import AppNavigator, { disabledBackScreens } from './app/navigators/AppNavigator';
import { disabledAndroidBack, abledAndroidBack } from './app/utils/Utils';

class ReactNativeSample extends Component {
  handleAndroidBack(currentRouteName) {
    disabledBackScreens.includes(currentRouteName) ? disabledAndroidBack() : abledAndroidBack();
  }

  onNavigationStateChange(prevState, currentState, action) {
    const routes = currentState.routes;
    const currentRouteName = routes[routes.length - 1].routeName;
    this.handleAndroidBack(currentRouteName);
  }

  render() {
    return <AppNavigator onNavigationStateChange={this.onNavigationStateChange.bind(this)} />
  }
}

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);
