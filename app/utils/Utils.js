import { BackHandler } from 'react-native'

const androidBackHandler = () => true

export const disabledAndroidBack = () =>{
  BackHandler.addEventListener('hardwareBackPress', androidBackHandler)
}

export const abledAndroidBack = () =>{
  BackHandler.removeEventListener('hardwareBackPress', androidBackHandler)
}
