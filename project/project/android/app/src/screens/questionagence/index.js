import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';

const Questionagence = () => {
  const navigation = useNavigation(); 
  const route = useRoute();
  const { marque, modele, id, country, year, immatriculation, kilometrage, carburant, boite, selectedDoors, selectedSeats } = route.params;
  const [agence, setAgence] = useState(null);

  const voitureDetails = {
    marque, modele, id, country, year, immatriculation, kilometrage, carburant, boite, selectedDoors, selectedSeats, agence
  };
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
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleExit = () => {
    navigation.navigate('CarDetailsScreen');
  };

  const handleSuivant = () => {
    navigation.navigate('Lieu', { ...voitureDetails, agence });
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
        <Text style={styles.title}>Exercez vous en tant qu’agence?{"\n"}</Text>
      </View>
      <View style={styles.pickerContainer}>
        <TouchableOpacity onPress={() => setAgence('oui')} style={styles.boiteContainer}>
          <Icon2
            name={agence === 'oui' ? 'radio-button-on' : 'radio-button-off'}
            size={20}
            color="grey"
            style={styles.icon}
          />
          <Text style={styles.picker2Label}>Oui, je suis une agence de location</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pickerContainer}>
        <TouchableOpacity onPress={() => setAgence('non')} style={styles.boiteContainer}>
          <Icon2
            name={agence === 'non' ? 'radio-button-on' : 'radio-button-off'}
            size={20}
            color="grey"
            style={styles.icon}
          />
          <Text style={styles.picker2Label}>Non, je suis un propriétaire particulier</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Savez-vous qu’en cas de mensonge, ceci est punis par la loi</Text>
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
    borderBottomWidth:1,
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
    bottom: -240,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  icon: {
    marginLeft: 'auto',
    bottom: -20,
  },
});

export default Questionagence;
