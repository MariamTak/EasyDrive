import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Kilometragevoiture from '../kilometrage';
import { useRoute } from '@react-navigation/native';
const RegistrationScreen = () => {
  const [country, setCountry] = useState('Maroc');
  const [year, setYear] = useState('2019');
  const [immatriculation, setImmatriculation] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  const { marque, modele, id} = route.params; 
  console.log("id:", id); 
  console.log("modele:", modele); 

  console.log("marque:", marque); 


  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleExit = () => {
    navigation.navigate('CarDetailsScreen');
  };

  const countries = [
    'Maroc', 'France', 'Espagne', 'Italie', 'Allemagne',
    'Portugal', 'Belgique', 'Suisse', 'Pays-Bas', 'Luxembourg'
  ];

  const years = Array.from({ length: 25 }, (_, i) => (new Date().getFullYear() - i).toString());

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
      <View><Text style={styles.title}>Quelle est l’immatriculation?{"\n"}</Text></View>

      <TextInput
        style={styles.input}
        placeholder="Immatriculation"
        placeholderTextColor="#000"
        value={immatriculation}
        onChangeText={setImmatriculation}
      />
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Pays d’immatriculation</Text>
        <Picker
          selectedValue={country}
          style={styles.picker}
          onValueChange={(itemValue) => setCountry(itemValue)}
        >
          {countries.map((country) => (
            <Picker.Item label={country} value={country} key={country} />
          ))}
        </Picker>
      </View>

      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Année d’immatriculation</Text>
        <Picker
          selectedValue={year}
          style={styles.picker}
          onValueChange={(itemValue) => setYear(itemValue)}
        >
          {years.map((year) => (
            <Picker.Item label={year} value={year} key={year} />
          ))}
        </Picker>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Information indiquée sur la carte grise.</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Kilometragevoiture',{marque: marque, modele:modele, country: country, year:year,id: id, immatriculation: immatriculation})}>
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
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
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
    marginLeft: 'auto',
    bottom: -120,
    right: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default RegistrationScreen;
