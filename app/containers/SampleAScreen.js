import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import Breadcrumb from '../components/Breadcrumb'
import Style from '../styles/Style'

class SampleAScreen extends Component {
  static navigationOptions = {
    title: 'パンくずありView',
    headerStyle: Style.header,
  }

  render() {
    return (
      <View style={Style.container}>
        <Breadcrumb currentPosition={0} />
        <View style={Style.contents}>
          <TouchableOpacity onPress={this._onPressButton.bind(this)}>
            <Text>サンプルBへ</Text>
          </TouchableOpacity>
        </View>
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
