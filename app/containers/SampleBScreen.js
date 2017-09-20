import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import Breadcrumb from '../components/Breadcrumb'
import Style from '../styles/Style'

class SampleBScreen extends Component {
  static navigationOptions = {
    title: 'パンくずありScrollView',
    headerStyle: Style.header,
    headerRight: <View></View>,
  }

  render() {
    return (
      <View style={Style.container}>
        <Breadcrumb currentPosition={1} />
        <View style={Style.contentsIncludeScrollView}>
          <ScrollView contentContainerStyle={Style.scrollViewContents}>
            <TouchableOpacity onPress={this._onPressButton.bind(this)}>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>サンプルCへ</Text>
              <Text>最終行</Text>
            </TouchableOpacity>
          </ScrollView>
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
