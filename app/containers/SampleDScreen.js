import React, { Component } from 'react'
import { View } from 'react-native'
import Breadcrumb from '../components/Breadcrumb'
import CustomButton from '../components/CustomButton'
import Style from '../styles/Style'

class SampleDScreen extends Component {
  static navigationOptions = {
    title: 'サンプルD',
    headerStyle: Style.header,
    headerRight: <View></View>,
  }

  render() {
    return (
      <View style={Style.container}>
        <Breadcrumb currentPosition={3} />
        <View style={Style.contents}>
          <CustomButton text="サンプルEへ" onPress={this._onPressButton.bind(this)} />
        </View>
      </View>
    )
  }

  _onPressButton() {
    this.props.navigation.navigate('SampleE');
  }
}

export default SampleDScreen
