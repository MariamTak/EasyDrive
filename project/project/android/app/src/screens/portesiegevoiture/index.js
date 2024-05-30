import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useRoute } from '@react-navigation/native';

const Portesiegevoiture = () => {
  const [selectedDoors, setSelectedDoors] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState(null);
  const navigation = useNavigation();
  const route = useRoute();
  const { marque, modele, id, country, year, immatriculation, kilometrage, carburant, boite } = route.params;
  const voitureDetails = { marque, modele, id, country, year, immatriculation, kilometrage, carburant, boite, selectedDoors, selectedSeats };

  console.log("id:", id); 
  console.log("modele:", modele); 
  console.log("marque:", marque);
  console.log("country:", country); 
  console.log("year:", year); 
  console.log("immatriculation:", immatriculation); 
  console.log("kilometrage:", kilometrage); 
  console.log("carburant:", carburant); 
  console.log("boite:", boite); 

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleExit = () => {
    navigation.navigate('CarDetailsScreen');
  };

  const handleDoorSelection = (number) => {
    setSelectedDoors(number);
  };

  const handleSeatSelection = (number) => {
    setSelectedSeats(number);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon name="arrowleft" size={20} color="grey" style={styles.arrowIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleExit}>
          <Icon name="close" size={20} color="grey" />
        </TouchableOpacity>
      </View>
      <Text style={styles.header}>Ajoutez plus de détails</Text>

      <Text style={styles.subHeader}>Nombre de portes (exclure le coffre)</Text>
      <View style={styles.selectionContainer}>
        {[1, 2, 3, 4].map((number) => (
          <TouchableOpacity
            key={number}
            style={[
              styles.button,
              selectedDoors === number && styles.selectedButton
            ]}
            onPress={() => handleDoorSelection(number)}
          >
            <Text
              style={[
                styles.buttonText,
                selectedDoors === number && styles.selectedButtonText
              ]}
            >
              {number}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.subHeader}>Nombre de sièges</Text>
      <View style={styles.selectionContainer}>
        {[2, 3, 4, 5, 6, 7, 8].map((number) => (
          <TouchableOpacity
            key={number}
            style={[
              styles.button,
              selectedSeats === number && styles.selectedButton
            ]}
            onPress={() => handleSeatSelection(number)}
          >
            <Text
              style={[
                styles.buttonText,
                selectedSeats === number && styles.selectedButtonText
              ]}
            >
              {number}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate('Questionagence', voitureDetails)}
      >
        <Text style={styles.submitButtonText}>Suivant</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 12,
  },
  selectionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 24,
  },
  button: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    margin: 8,
    position: 'relative',
  },
  selectedButton: {
    borderColor: '#007BFF',
  },
  buttonText: {
    fontSize: 18,
  },
  selectedButtonText: {
    color: '#007BFF',
  },
 
  submitButton: {
    width: '40%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5E77AA',
    borderRadius: 8,
    marginTop: 24,
    marginLeft: 'auto',
    bottom: -20,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  titleContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    zIndex: 1,
  },
});

export default Portesiegevoiture;
