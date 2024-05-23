import React, { useEffect } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const Splash = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("GetStarted");
    }, 2000);

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/page1.jpg')} style={styles.image}>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5E77AA', // Background color
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Center the image horizontally and vertically
  },
});

export default Splash;