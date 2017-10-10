import React, { Component } from 'react'
import { View } from 'react-native'
import Breadcrumb from '../components/Breadcrumb'
import CustomButton from '../components/CustomButton'
import Style from '../styles/Style'

class SampleCScreen extends Component {
  static navigationOptions = {
    title: 'サンプルC',
    headerStyle: Style.header,
    headerRight: <View></View>,
  }

  render() {
    return (
      <View style={Style.container}>
        <Breadcrumb currentPosition={2} />
        <View style={Style.contents}>
          <CustomButton text="サンプルDへ" onPress={this._onPressButton.bind(this)} />
        </View>
      </View>
    )
  }

  _onPressButton() {
    this.props.navigation.navigate('SampleD');
  }
}

export default SampleCScreen
