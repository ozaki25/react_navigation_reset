import { BackHandler, Platform } from 'react-native'
import { disabledBackScreens, landscapeOrientationScreens } from '../navigators/AppNavigator';

const androidBackHandler = () => true

export const disabledAndroidBack = () =>{
  BackHandler.addEventListener('hardwareBackPress', androidBackHandler)
}

export const abledAndroidBack = () =>{
  BackHandler.removeEventListener('hardwareBackPress', androidBackHandler)
}

export const onNavigationStateChange = (prevState, currentState, action) => {
  const routes = currentState.routes;
  const currentRouteName = routes[routes.length - 1].routeName;
  if(Platform.OS === 'android') handleAndroidBack(currentRouteName);
  handleOrientation(currentRouteName);
}

const handleAndroidBack = (currentRouteName) => {
  disabledBackScreens.includes(currentRouteName) ? disabledAndroidBack() : abledAndroidBack();
}

const handleOrientation = (currentRouteName) => {
  landscapeOrientationScreens.includes(currentRouteName) ? alert('横向き固定の画面です！') : alert('横向き固定じゃない画面です！');
}

