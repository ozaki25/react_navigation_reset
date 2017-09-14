import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import StepIndicator from 'react-native-step-indicator'
import { stepLabels, stepIndivatorStyles } from '../utils/StepIndicatorConfig'

class SampleBScreen extends Component {
  static navigationOptions = {
    title: 'サンプルB',
  }

  render() {
    return (
      <View>
        <StepIndicator
          customStyles={stepIndivatorStyles}
          currentPosition={1}
          stepCount={3}
          labels={stepLabels}
        />
        <TouchableOpacity onPress={this._onPressButton.bind(this)}>
          <Text>サンプルCへ</Text>
        </TouchableOpacity>
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