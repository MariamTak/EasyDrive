import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/Ionicons';



const Questionagence = () => {
  const navigation = useNavigation(); // Obtenez l'objet de navigation
  const [boite, setBoite] = useState(null); // Nouvel état pour stocker la sélection de la boîte de vitesse

  const handleGoBack = () => {
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
      <View><Text style={styles.title}>Exercez vous en tant qu’ agence?{"\n"}</Text></View>
      
      
      
      
      
      <View style={styles.pickerContainer}>
      <TouchableOpacity onPress={() => setBoite('Manuelle')} style={styles.boiteContainer}>
          <Icon2
            name={boite === 'Manuelle' ? 'radio-button-on' : 'radio-button-off'}
            size={20}
            color="grey"
            style={styles.icon}
          />

        <Text style={styles.picker2Label}>Oui, je suis une agence de location</Text>
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
        <Text style={styles.picker2Label}>Non, je suis un propriétaire particulier</Text>

        </TouchableOpacity>
        
      </View>
      
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Savez-vous qu’en cas de mensonge, ceci est punis par la lois</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Telephone')}>
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
  picker2Label:{
    fontWeight: 'bold',
    color:'black',
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
    bottom:-240,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,

  },
  icon:{
    marginLeft:'auto',
    bottom:-20,
  },
});

export default Questionagence;
