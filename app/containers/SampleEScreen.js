import React, { Component } from 'react'
import { View } from 'react-native'
import Breadcrumb from '../components/Breadcrumb'
import CustomButton from '../components/CustomButton'
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
          <CustomButton text="サンプルAに戻る" onPress={this._onPressButton.bind(this)} />
        </View>
      </View>
    )
  }

  _onPressButton() {
    this.props.navigation.navigate('SampleA');
  }
}

export default SampleEScreen
