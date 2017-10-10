import React, { Component } from 'react'
import { View } from 'react-native'
import Breadcrumb from '../components/Breadcrumb'
import CustomButton from '../components/CustomButton'
import Style from '../styles/Style'

class SampleBScreen extends Component {
  static navigationOptions = {
    title: 'サンプルB',
    headerStyle: Style.header,
    headerRight: <View></View>,
  }

  render() {
    return (
      <View style={Style.container}>
        <Breadcrumb currentPosition={1} />
        <View style={Style.contents}>
          <CustomButton text="サンプルCへ" onPress={this._onPressButton.bind(this)} />
        </View>
      </View>
    )
  }

  _onPressButton() {
    this.props.navigation.navigate('SampleC');
  }
}

export default SampleBScreen
