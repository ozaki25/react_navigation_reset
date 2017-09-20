import React, { Component } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import StepIndicator from 'react-native-step-indicator'
import { stepLabels, stepIndivatorStyles } from '../config/StepIndicatorConfig'

const styles = StyleSheet.create({
  stepIndivatorContainer: {
    backgroundColor: '#eee',
    paddingTop: 15,
    top: Platform.OS === 'ios' ? -116 : -118,
  },
})

const Breadcrumb = ({ currentPosition }) => (
  <View style={styles.stepIndivatorContainer}>
    <StepIndicator
       customStyles={stepIndivatorStyles}
       currentPosition={currentPosition}
       stepCount={stepLabels.length}
       labels={stepLabels}
       />
  </View>
)

export default Breadcrumb
