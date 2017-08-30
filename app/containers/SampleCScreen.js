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

class SampleCScreen extends Component {
  static navigationOptions = {
    title: 'サンプルC',
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
  }

  render() {
    return (
      <View>
        <Text>サンプル3</Text>
      </View>
    )
  }
}

export default SampleCScreen