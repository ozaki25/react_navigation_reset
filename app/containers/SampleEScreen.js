import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import Breadcrumb from '../components/Breadcrumb'
import Style from '../styles/Style'

class SampleEScreen extends Component {
  static navigationOptions = {
    title: 'サンプルE',
    headerStyle: Style.header,
    headerRight: <View></View>,
  }

  render() {
    return (
      <View style={Style.container}>
        <Breadcrumb currentPosition={4} />
        <View style={Style.contents}>
          <TouchableOpacity onPress={this._onPressButton.bind(this)}>
            <Text>サンプルAに戻る</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  _onPressButton() {
    this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'SampleA' }),
        ],
      }),
    )
  }
}

export default SampleEScreen
