import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#d70000'
  },
  headerTitle: {
    color: '#f5f5f5'
  }
})

class SampleBScreen extends Component {
  static navigationOptions = {
    title: 'サンプルB',
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
  }

  render() {
    return (
      <View>
        <Text>サンプル2</Text>
      </View>
    )
  }
}

export default SampleBScreen