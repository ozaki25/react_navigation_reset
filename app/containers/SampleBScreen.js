import React, { Component } from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import StepIndicator from 'react-native-step-indicator'
import { stepLabels, stepIndivatorStyles } from '../config/StepIndicatorConfig'

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#E3F2FD',
    elevation: 0,
    height: 56,
    marginTop: Platform.OS === 'ios' ? 84 : 64,
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
  },
  container: {
    flex: 1,
  },
  stepIndivatorContainer: {
    backgroundColor: '#E3F2FD',
    top: -119,
  },
  contents: {
    flex: 1,
    marginTop: -56,
  },
})

class SampleBScreen extends Component {
  static navigationOptions = {
    title: 'サンプルB',
    headerStyle: styles.header,
    headerRight: <View></View>,
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.stepIndivatorContainer}>
          <StepIndicator
            customStyles={stepIndivatorStyles}
            currentPosition={1}
            stepCount={3}
            labels={stepLabels}
          />
        </View>
        <View style={styles.contents}>
          <TouchableOpacity onPress={this._onPressButton.bind(this)}>
            <Text>サンプルCへ</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  _onPressButton() {
    this.props.navigation.dispatch(
      NavigationActions.navigate({ routeName: 'SampleC' })
    )
  }
}

export default SampleBScreen
