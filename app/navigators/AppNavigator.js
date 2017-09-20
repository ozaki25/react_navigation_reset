import React from 'react'
import { StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation'
import SampleAScreen from '../containers/SampleAScreen'
import SampleBScreen from '../containers/SampleBScreen'
import SampleCScreen from '../containers/SampleCScreen'
import SampleDScreen from '../containers/SampleDScreen'
import SampleEScreen from '../containers/SampleEScreen'
import Style from '../styles/Style'

const AppNavigator = StackNavigator({
  SampleA: { screen: SampleAScreen },
  SampleB: { screen: SampleBScreen },
  SampleC: { screen: SampleCScreen },
  SampleD: { screen: SampleDScreen },
  SampleE: { screen: SampleEScreen },
}, {
  navigationOptions: {
    headerStyle: Style.header,
    headerTitleStyle: Style.headerTitle,
    headerTintColor: '#546E7A',
    headerBackTitle: null,
  },
})

export default AppNavigator
