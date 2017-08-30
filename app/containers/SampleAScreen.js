import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NavigationActions } from 'react-navigation'

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#d70000'
  },
  headerTitle: {
    color: '#f5f5f5'
  },
})

class SampleAScreen extends Component {
  static navigationOptions = {
    title: 'サンプルA',
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this._onPressButton.bind(this)} style={styles.button}>
          <Text>サンプルBへ</Text>
        </TouchableOpacity>
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