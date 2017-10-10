import React, { Component } from 'react'
import { View } from 'react-native'
import Breadcrumb from '../components/Breadcrumb'
import CustomButton from '../components/CustomButton'
import Style from '../styles/Style'

class SampleAScreen extends Component {
  static navigationOptions = {
    title: 'サンプルA',
    headerStyle: Style.header,
  }

  render() {
    return (
      <View style={Style.container}>
        <Breadcrumb currentPosition={0} />
        <View style={Style.contents}>
          <CustomButton text="サンプルBへ" onPress={this._onPressButton.bind(this)} />
        </View>
      </View>
    )
  }

  _onPressButton() {
    this.props.navigation.navigate('SampleB');
  }
}

export default SampleAScreen
