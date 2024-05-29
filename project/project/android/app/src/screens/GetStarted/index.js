import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StartButton from '../../components/StartButton';
const GetStarted = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.loginButton}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.loginButtonText}>S'inscrire</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image 
          style={styles.image}
          source={require('../../assets/GetStarted.jpg')
          }
        />
      </View>
      <View style={styles.bottomHalf}>
        <Text style={styles.text}>Votre voiture idéale à portée de clic !</Text>
        <View style={styles.buttonContainer}>
          <StartButton label={'Commencer'} onPress={() => navigation.navigate('Container')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 130,
  },
  loginButton: {
    position: 'absolute',
    top: 40, // Adjust as needed
    right: 20, // Adjust as needed
  },
  loginButtonText: {
    fontSize: 18,
    color: '#5E77AA',
    fontWeight: 'bold',
  },
  imageContainer: {
    width: 350,
    height: 250,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  bottomHalf: {
    flex: 0.5,
    alignItems: 'center', // Center content horizontally
  },
  text: {
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: '300',
    textAlign: 'center',
    color: '#333',
    marginTop: 0,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 100,
    justifyContent: 'center',
  },
});

export default GetStarted;
