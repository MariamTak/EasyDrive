import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const InputRegister = ({ placeholder, keyboardType = 'default',secureTextEntry=false }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: '#5E77AA',
    borderBottomWidth: 1,
    marginBottom: 18,
  },
  input: {
    height: 40,
    paddingLeft: 8,
    fontSize: 16,
  },
});

export default InputRegister;
