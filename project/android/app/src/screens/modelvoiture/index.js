import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation,useRoute } from '@react-navigation/native';
import RegistrationScreen from '../immatriculation';
import { useEffect } from 'react';


const Modelvoiture = () => {
  const [marque, setmarque] = useState('Volkswagen');
  const [model, setmodel] = useState('Golf');
  const navigation = useNavigation();
  const route=useRoute();
  const user_id=route.params.user_id;
  
  console.log("user_id récupéré :", user_id);
 
 
  const handleSuivant = async () => {
    try {
      
      navigation.navigate('Kilometragevoiture',{marque:marque,model:model,user_id:user_id});
    } catch (error) {
      console.error('Erreur lors de la création de la voiture', error);
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleExit = () => {
    navigation.navigate('Home');
  };

  const modelsByBrand = {
    Volkswagen: ['Golf', 'Passat', 'Tiguan'],
    BMW: ['3 Series', '5 Series', 'X5'],
    Audi: ['A4', 'A6', 'Q5'],
    Toyota: ['Corolla', 'Camry', 'Prius'],
    Ford: ['Fiesta', 'Mustang', 'Explorer'],
    'Mercedes-Benz': ['C-Class', 'E-Class', 'GLC'],
    Honda: ['Civic', 'Accord', 'CR-V'],
    Chevrolet: ['Spark', 'Malibu', 'Tahoe'],
    Nissan: ['Sentra', 'Altima', 'Rogue'],
    Hyundai: ['Elantra', 'Sonata', 'Tucson'],
    Kia: ['Rio', 'Optima', 'Sorento']
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
        <Text style={styles.title}>Confirmez le modèle de votre voiture{"\n"}</Text>
      </View>
     

      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Marque</Text>
        <Picker
          selectedValue={marque}
          style={styles.picker}
          onValueChange={(itemValue) => {
            setmarque(itemValue);
            setmodel(modelsByBrand[itemValue][0]);
          }}
        >
          {Object.keys(modelsByBrand).map((brand) => (
            <Picker.Item label={brand} value={brand} key={brand} />
          ))}
        </Picker>
      </View>

      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Modèle</Text>
        <Picker
          selectedValue={model}
          style={styles.picker}
          onValueChange={(itemValue) => setmodel(itemValue)}
        >
          {modelsByBrand[marque].map((model) => (
            <Picker.Item label={model} value={model} key={model} />
          ))}
        </Picker>
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
    right: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Modelvoiture;
