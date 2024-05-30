import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SuccessPage = ({ navigation }) => {
  const handleNavigateToMesVoitures = () => {
    // Navigate to the "Mes Voitures" page
    navigation.navigate('MesVoitures'); // Ensure 'MesVoitures' is the name of your Mes Voitures screen
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Container')} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>✕</Text>
      </TouchableOpacity>
      <Text style={styles.message}>Vous êtes prêt !</Text>
      <Text style={styles.message}>Votre voiture a été ajoutée avec succès.</Text>
      <TouchableOpacity style={styles.button} onPress={handleNavigateToMesVoitures}>
        <Text style={styles.buttonText}>Voir Mes Voitures</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1, // Ensures the button is on top of other elements
  },
  closeButtonText: {
    fontSize: 24,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 40, // Add padding to avoid overlap with the close button
  },
  message: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#5E77AA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SuccessPage;
