import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: 'skyblue',
    marginHorizontal: 20,
  },
  buttonText: {
    justifyContent: 'center',
  },
});

const CustomButton = ({ text, onPress }) => (
  <View>
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  </View>
);

export default CustomButton;
