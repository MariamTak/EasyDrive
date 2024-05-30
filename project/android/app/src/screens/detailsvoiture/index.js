import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation,useRoute } from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Portesiegevoiture from '../portesiegevoiture';

const Detailsvoiture = () => {
  const [carburant, setCarburant] = useState('Diesel');
  const [boite, setBoite] = useState('Manuelle'); // Initial state for the gearbox type
  const navigation = useNavigation();
  const route = useRoute();
 

  const { user_id,marque, model, kilometrage,immatriculation,country,year} = route.params;
  console.log("user_id récupéré :", user_id);
  console.log("user_id récupéré :", user_id);
  console.log("user_id récupéré :", marque);
  console.log("user_id récupéré :", model);
  console.log("user_id récupéré :", kilometrage);
  console.log("user_id récupéré :", immatriculation);
  console.log("user_id récupéré :", country);
  console.log("user_id récupéré :", year);

  const handleSuivant = () => {
    navigation.navigate('Portesiegevoiture', { user_id:user_id,marque:marque, model:model, kilometrage:kilometrage,immatriculation:immatriculation, country:country,year:year ,carburant:carburant, boite:boite });
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
      <View>
        <Text style={styles.title}>Ajoutez plus de détails{"\n"}</Text>
      </View>

      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Carburant</Text>
        <Picker
          selectedValue={carburant}
          style={styles.picker}
          onValueChange={(itemValue) => setCarburant(itemValue)}
        >
          <Picker.Item label="Diesel" value="Diesel" />
          <Picker.Item label="Essence" value="Essence" />
          <Picker.Item label="Hybride" value="Hybride" />
          <Picker.Item label="Électrique" value="Électrique" />
        </Picker>
      </View>

      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Boîte de vitesse</Text>
      </View>
      <View style={styles.pickerContainer}>
        <TouchableOpacity onPress={() => setBoite('Manuelle')} style={styles.boiteContainer}>
          <Icon2
            name={boite === 'Manuelle' ? 'radio-button-on' : 'radio-button-off'}
            size={20}
            color="grey"
            style={styles.icon}
          />
          <Text style={styles.picker2Label}>Boîte manuelle</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pickerContainer}>
        <TouchableOpacity onPress={() => setBoite('Automatique')} style={styles.boiteContainer}>
          <Icon2
            name={boite === 'Automatique' ? 'radio-button-on' : 'radio-button-off'}
            size={20}
            color="grey"
            style={styles.icon}
          />
          <Text style={styles.picker2Label}>Boîte automatique</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Ces informations aideront les locataires à faire le meilleur choix.</Text>
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
    textAlign: 'center',
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
  picker2Label: {
    fontWeight: 'bold',
    color: 'black',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  picker: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  boiteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
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
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Detailsvoiture;
