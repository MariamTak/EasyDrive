import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const StartButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    backgroundColor: '#5E77AA',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    width: 350,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
  },
};

export default StartButton;
