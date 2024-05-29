import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignButton = ({label}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
    <View style={{
      backgroundColor: '#5E77AA',
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 10,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
    }}>
      <Text style={{
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        fontWeight:'bold',
      }}>
        {label}
      </Text>
    </View>
    </TouchableOpacity>
  );
};

export default SignButton;
