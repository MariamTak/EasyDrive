import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const StartButton = ({label}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
    <View style={{
      backgroundColor: '#5E77AA',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 20,
      width: 350,
      height:55,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 70,
    }}>
      <Text style={{
        fontSize: 20, // Increased font size
        color: 'white',
        textAlign: 'center',
        fontWeight:500,
      }}>
        {label}
      </Text>
    </View>
    </TouchableOpacity>
  );
};

export default StartButton;