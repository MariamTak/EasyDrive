import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import RegistrationScreen from '../immatriculation';

const Modelvoiture = () => {
  const [marque, setmarque] = useState('Volkswagen');
  const [model, setmodel] = useState('Golf');
  const navigation = useNavigation(); // Obtenez l'objet de navigation

  const handleGoBack = () => {
    // Ajoutez ici la logique pour naviguer vers la page précédente
    navigation.goBack();
  };

  const handleExit = () => {
    // Sortir de la page et aller vers la page d'accueil
    navigation.navigate('CarDetailsScreen'); // Remplacez 'Home' par le nom de votre écran d'accueil
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer} >
      <TouchableOpacity onPress={handleGoBack}>
        <Icon name="arrowleft" size={20} color="grey" style={styles.arrowIcon} />

        </TouchableOpacity>
        <TouchableOpacity onPress={handleExit}>
          <Icon name="close" size={20} color="grey" />
        </TouchableOpacity>
        
      </View>
      <View><Text style={styles.title}>Confirmez le modèle de votre voiture{"\n"}</Text></View>
      
      
      
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Marque</Text>
        <Picker
          selectedValue={marque}
          style={styles.picker}
          onValueChange={(itemValue) => setmarque(itemValue)}
        >
          <Picker.Item label="Volkswagen" value="Volkswagen" />
          <Picker.Item label="BMW" value="BMW" />
          <Picker.Item label="Audi" value="Audi" />
          {/* Ajoutez d'autres pays ici */}
        </Picker>
      </View>
      
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Modèle</Text>
        <Picker
          selectedValue={model}
          style={styles.picker}
          onValueChange={(itemValue) => setmodel(itemValue)}
        >
          <Picker.Item label="Golf" value="Golf" />
          <Picker.Item label="Golf" value="Golf" />
          <Picker.Item label="Golf" value="Golf" />
         
        </Picker>
      </View>
      
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegistrationScreen')}>
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
    alignItems: 'center',

  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  pickerContainer: {
    marginBottom: 20,
  },
  pickerLabel: {
    fontSize: 16,
    marginBottom: 10,
    borderBottomColor:'grey',
    borderBottomWidth:1

  },
  picker: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  infoBox: {
    backgroundColor: '#C9DDE0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
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
    marginLeft:'auto',
    bottom: -240,
    right: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Modelvoiture;
