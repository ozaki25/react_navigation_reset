import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import Breadcrumb from '../components/Breadcrumb'
import Style from '../styles/Style'

class SampleDScreen extends Component {
  static navigationOptions = {
    title: 'サンプルD',
    headerStyle: Style.headerWithoutBreadcrumb,
    headerRight: <View></View>,
  }

  render() {
    return (
      <View style={Style.container}>
        <ScrollView contentContainerStyle={Style.scrollViewContentsWithoutBreadcrumb}>
          <TouchableOpacity onPress={this._onPressButton.bind(this)}>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>サンプルEへ</Text>
            <Text>最終行</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }

  _onPressButton() {
    this.props.navigation.dispatch(
      NavigationActions.navigate({ routeName: 'SampleE' })
    )
  }
}

export default SampleDScreen
