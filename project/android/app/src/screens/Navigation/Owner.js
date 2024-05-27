import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import LogIn from '../LogIn';
const Owner = ({ LogIn }) => {
  return (
    <ImageBackground source={require('../../assets/owner.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.rentButton} onPress={LogIn}>
          <Text style={styles.rentButtonText}>Louer ma voiture</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fond semi-transparent pour améliorer la lisibilité du texte
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // Couleur du texte sur l'image de fond
  },
  rentButton: {
    backgroundColor: '#5E77AA',
    padding: 15,
    borderRadius: 10,
    marginTop: 590,
    width:'80%',
  },
  rentButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Owner;
