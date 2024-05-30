import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation, useRoute } from '@react-navigation/native';

const Kilometragevoiture = () => {
  const [kilometrage, setKilometrage] = useState('0-50 000 km');

  const route = useRoute();
  const { marque, modele, id, country, year, immatriculation } = route.params; 
  const navigation = useNavigation();
  const voitureDetails = { marque, modele, id, country, year, immatriculation, kilometrage };

  console.log("id:", id); 
  console.log("modele:", modele); 
  console.log("marque:", marque);
  console.log("country:", country); 
  console.log("year:", year); 
  console.log("immatriculation:", immatriculation);  

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
      <View>
        <Text style={styles.title}>Le kilométrage est-il juste ?{"\n"}</Text>
      </View>

      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Kilométrage</Text>
        <Picker
          selectedValue={kilometrage}
          style={styles.picker}
          onValueChange={(itemValue) => setKilometrage(itemValue)}
        >
          <Picker.Item label="0-50 000 km" value="0-50 000 km" />
          <Picker.Item label="50-100 000 km" value="50-100 000 km" />
          <Picker.Item label="100-150 000 km" value="100-150 000 km" />
          <Picker.Item label="150-200 000 km" value="150-200 000 km" />
          <Picker.Item label="200 000+ km" value="200 000+ km" />
        </Picker>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Cette information nous permet d’assurer la sécurité et la qualité de nos utilisateurs.</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Detailsvoiture', voitureDetails)}>
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
    bottom: -260,
    right: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Kilometragevoiture;
