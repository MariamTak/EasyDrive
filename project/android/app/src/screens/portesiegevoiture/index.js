import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';

const Portesiegevoiture = () => {
  const [selectedDoors, setSelectedDoors] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState(null);
  const [isTrunkIncluded, setIsTrunkIncluded] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const {marque, model, kilometrage,immatriculation,country,year,carburant,boite } = route.params;
  const user_id=route.params.user_id;
  console.log("user_id récupéré :", user_id);
  console.log("user_id récupéré :", user_id);
  console.log("user_id récupéré :", marque);
  console.log("user_id récupéré :", model);
  console.log("user_id récupéré :", kilometrage);
  console.log("user_id récupéré :", immatriculation);
  console.log("user_id récupéré :", country);
  console.log("user_id récupéré :", year);
  console.log("user_id récupéré :", carburant);
  console.log("user_id récupéré :", boite);

 

 


  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleExit = () => {
    navigation.navigate('Home');
  };

  const handleDoorSelection = (number) => {
    setSelectedDoors(number);
  };

  const handleSeatSelection = (number) => {
    setSelectedSeats(number);
  };
  const handleSuivant = () => {
    // Utilisez les variables récupérées ici (marque, model, kilometrage, selectedDoors, selectedSeats)
    navigation.navigate('Questionagence', { user_id:user_id,marque:marque, model:model, kilometrage:kilometrage,immatriculation:immatriculation, country:country,year:year ,carburant:carburant, boite:boite, selectedDoors:selectedDoors, selectedSeats:selectedSeats });
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

      <Text style={styles.subHeader}>Nombre de portes ( exclure le coffre) </Text>
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
            {selectedDoors === number && isTrunkIncluded && (
              <Icon3 name="car-hatchback" size={20} color="grey" style={styles.trunkIcon} />
            )}
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
        onPress={handleSuivant}
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
  trunkIcon: {
    position: 'absolute',
    top: -10,
    right: -10,
  },
  trunkToggleButton: {
    marginBottom: 24,
  },
  trunkToggleText: {
    fontSize: 16,
    color: '#007BFF',
    textDecorationLine: 'underline',
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
