 import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const Prixjour = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { voitureDetails } = route.params;
  const { marque, modele, id, country, year, immatriculation, kilometrage, carburant, boite, selectedDoors, selectedSeats, agence, lieu } = voitureDetails;
  const [prix, setPrix] = useState('');

  const updatedVoitureDetails = { ...voitureDetails, prix };
  console.log("id:", id); 
  console.log("modele:", modele); 
  console.log("marque:", marque);
  console.log("country:", country); 
  console.log("year:", year); 
  console.log("immatriculation:", immatriculation); 
  console.log("kilometrage:", kilometrage); 
  console.log("carburant:", carburant); 
  console.log("boite:", boite); 
  console.log("selectedDoors:", selectedDoors); 
  console.log("selectedSeats:", selectedSeats); 
  console.log("agence:", agence); 
  console.log("lieu:", lieu); 
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleExit = () => {
    navigation.navigate('CarDetailsScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon name="arrowleft" size={20} color="grey" style={styles.arrowIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleExit}>
          <Icon name="close" size={20} color="grey" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Définissez vos prix par jour{"\n"}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Entrer le prix"
          value={prix}
          onChangeText={setPrix}
          keyboardType="numeric"
        />
        <Text style={styles.currency}>MAD</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Voitureindisponible', { voitureDetails: updatedVoitureDetails })}
        >
          <Text style={styles.buttonText}>Suivant</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  currency: {
    marginLeft: 10,
    fontSize: 18,
    color: '#666',
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  button: {
    width: '40%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5E77AA',
    borderRadius: 8,
    marginTop: 24,
    position: 'absolute',
    bottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Prixjour;
