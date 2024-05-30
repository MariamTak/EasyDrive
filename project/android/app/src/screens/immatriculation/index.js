import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation,useRoute } from '@react-navigation/native';


const RegistrationScreen = () => {
  const [immatriculation, setimmat] = useState();
  const [country, setCountry] = useState('Maroc');
  const [year, setYear] = useState('2019');
  const navigation = useNavigation(); // Obtenez l'objet de navigation
  const route = useRoute();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const { marque, model, kilometrage } = route.params;
  const user_id=route.params.user_id;
  console.log("user_id récupéré :", user_id);
  console.log("user_id récupéré :", user_id);
  console.log("user_id récupéré :", marque);
  console.log("user_id récupéré :", model);
  console.log("user_id récupéré :", kilometrage);


  const handleSuivant = () => {
    navigation.navigate('Detailsvoiture', { user_id:user_id,marque:marque, model:model, kilometrage:kilometrage,immatriculation:immatriculation, country:country,year:year});
  };

  const handleExit = () => {
    // Sortir de la page et aller vers la page d'accueil
    navigation.navigate('Home'); // Remplacez 'Home' par le nom de votre écran d'accueil
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
      <View><Text style={styles.title}>Quelle est l’immatriculation?{"\n"}</Text></View>
      
      <TextInput
  value={immatriculation}
  style={styles.input}
  placeholder="Entrez l'immatriculation"
  onChangeText={setimmat}
  placeholderTextColor="#000"
/>

      
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Pays d’immatriculation</Text>
        <Picker
          selectedValue={country}
          style={styles.picker}
          onValueChange={(itemValue) => setCountry(itemValue)}
        >
          <Picker.Item label="Maroc" value="Maroc" />
          <Picker.Item label="France" value="France" />
          <Picker.Item label="Espagne" value="Espagne" />
          
        </Picker>
      </View>
      
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Année d’immatriculation</Text>
        <Picker
          selectedValue={year}
          style={styles.picker}
          onValueChange={(itemValue) => setYear(itemValue)}
        >
          <Picker.Item label="2019" value="2019" />
          <Picker.Item label="2020" value="2020" />
          <Picker.Item label="2021" value="2021" />
         
        </Picker>
      </View>
      
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Information indiquée sur la carte grise.</Text>
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
    bottom: -120,
    right: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default RegistrationScreen;
