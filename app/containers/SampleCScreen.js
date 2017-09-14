import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import StepIndicator from 'react-native-step-indicator'
import { stepLabels, stepIndivatorStyles } from '../utils/StepIndicatorConfig'

class SampleCScreen extends Component {
  static navigationOptions = {
    title: 'サンプルC',
  }

  render() {
    return (
      <View>
        <StepIndicator
          customStyles={stepIndivatorStyles}
          currentPosition={2}
          stepCount={3}
          labels={stepLabels}
        />
        <TouchableOpacity onPress={this._onPressButton.bind(this)}>
          <Text>サンプルAに戻る</Text>
        </TouchableOpacity>
      </View>
    )
  }

  _onPressButton() {
    this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'SampleA' })
        ]
      })
    )
  }
}

export default SampleCScreen