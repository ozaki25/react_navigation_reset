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

class SampleAScreen extends Component {
  static navigationOptions = {
    title: 'サンプルA',
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
  }

  render() {
    return (
      <View>
        <Text>サンプルA</Text>
      </View>
    )
  }
}

export default SampleAScreen