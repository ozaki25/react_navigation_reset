import React from 'react'
import { StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation'
import SampleAScreen from '../containers/SampleAScreen'
import SampleBScreen from '../containers/SampleBScreen'
import SampleCScreen from '../containers/SampleCScreen'

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#E3F2FD',
  },
  headerTitle: {
    color: '#546E7A',
  },
})

const AppNavigator = StackNavigator({
  SampleA: { screen: SampleAScreen },
  SampleB: { screen: SampleBScreen },
  SampleC: { screen: SampleCScreen },
}, {
  navigationOptions: {
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
    headerTintColor: '#546E7A',
  }
})

export default AppNavigator
