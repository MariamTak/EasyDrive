import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const Prixjour = () => {
  const navigation = useNavigation(); 
  const [prix, setprix] = useState('');
  const route = useRoute();

  const {marque, model, kilometrage,immatriculation,country,year,carburant,boite,selectedDoors,selectedSeats,agence,lieu } = route.params;
  const user_id=route.params.user_id;
  console.log("user_id récupéré :", user_id);
  console.log("user_id récupéré :", user_id);
  console.log("user_id récupéré :", marque);
  console.log("user_id récupéré :", model);
  console.log("user_id récupéré :", kilometrage);
  console.log("user_id récupéré :", immatriculation);
  console.log("user_id récupéré :", country);
  console.log("user_id récupéré :", year);
  console.log("user_id récupéré :", selectedDoors);
  console.log("user_id récupéré :", selectedSeats);
  console.log("user_id récupéré :", agence);
  console.log("user_id récupéré :", lieu);
  console.log("user_id récupéré :", prix);

  const handleSuivant = () => {
    // Utilisez les variables récupérées ici (marque, model, kilometrage, selectedDoors, selectedSeats)
    navigation.navigate('Voitureindisponible', { user_id:user_id,marque:marque, model:model, kilometrage:kilometrage,immatriculation:immatriculation, country:country,year:year ,carburant:carburant, boite:boite, selectedDoors:selectedDoors, selectedSeats:selectedSeats,agence:agence,lieu:lieu,prix:prix });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleExit = () => {
    navigation.navigate('Home');
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
      <Text style={styles.title}>Définissez vos prix par jour {"\n"}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Entrer le prix"
          value={prix}
          onChangeText={setprix}
          keyboardType="numeric"
        />
        <Text style={styles.currency}>MAD</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSuivant}>
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
    bottom:-400,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Prixjour;
