import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import StepIndicator from 'react-native-step-indicator'
import { stepLabels, stepIndivatorStyles } from '../utils/StepIndicatorConfig'

class SampleAScreen extends Component {
  static navigationOptions = {
    title: 'サンプルA',
  }

  render() {
    return (
      <View>
        <StepIndicator
          customStyles={stepIndivatorStyles}
          currentPosition={0}
          stepCount={3}
          labels={stepLabels}
        />
        <TouchableOpacity onPress={this._onPressButton.bind(this)}>
          <Text>サンプルBへ</Text>
        </TouchableOpacity>
      </View>
    )
  }

  _onPressButton() {
    this.props.navigation.dispatch(
      NavigationActions.navigate({ routeName: 'SampleB' })
    )
  }

}

export default SampleAScreen