
  import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation, useRoute } from '@react-navigation/native';
import SearchPlace from '../../components/SearchPlace';

const Lieu = () => {
  const navigation = useNavigation(); 
  const route = useRoute();
  const { marque, modele, id, country, year, immatriculation, kilometrage, carburant, boite, selectedDoors, selectedSeats, agence } = route.params;
  const [lieu, setLieu] = useState('');
  const voitureDetails = { marque, modele, id, country, year, immatriculation, kilometrage, carburant, boite, selectedDoors, selectedSeats, agence, lieu };
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
      <Text style={styles.title}>Ou donnerez-vous rendez-vous au locataire?{"\n"}</Text>
      <View style={styles.inputContainer}>
        <SearchPlace style={{ alignItems: 'center' }} setLieu={setLieu} />
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Cette adresse sera utilisée pour permettre aux locataires de réserver votre voiture.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Prixjour', { voitureDetails })}
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
    marginBottom: 70,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    alignItems: 'center',
  },
  infoBox: {
    backgroundColor: '#C9DDE0',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'flex-end',
    marginTop: 50,
  },
  infoText: {
    fontSize: 14,
    color: 'black',
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

export default Lieu;
