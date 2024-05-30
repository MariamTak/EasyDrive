import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/Ionicons';



const Telephone = () => {
  const [numero, setnim] = useState('Maroc(+212)');
  const navigation = useNavigation(); // Obtenez l'objet de navigation
  const [num, setnum] = useState('');


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
      <View><Text style={styles.title}>Quel est votre numéro de téléphone?{"\n"}</Text></View>
      
   
      
      <View style={styles.pickerContainer}>
      <TextInput
            style={styles.input}
            placeholder="06 00 00 00 00"
            value={num}
            onChangeText={setnum}
            keyboardType="phone-pad"
          />      
          </View>
      
      
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Nous ne vous contacterons qu’ en cas de besoin.</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Lieu')}>
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
    bottom:-300,
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

export default Telephone;