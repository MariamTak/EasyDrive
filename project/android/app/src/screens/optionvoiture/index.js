import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';  // Assurez-vous que vous avez installé react-native-vector-icons
import { useNavigation } from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/AntDesign';

const Optionvoiture = ({  }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigation = useNavigation(); // Obtenez l'objet de navigation
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleExit = () => {
    // Sortir de la page et aller vers la page d'accueil
    navigation.navigate('CarDetailsScreen'); // Remplacez 'Home' par le nom de votre écran d'accueil
  };

  const options = [
    { id: 'bike_rack', label: 'Porte vélo', icon: 'bike' },
    { id: 'air_conditioning', label: 'Climatisation', icon: 'air-conditioner' },
    { id: 'gps', label: 'GPS', icon: 'map-marker' },
    { id: 'cruise_control', label: 'Régulateur de vitesse', icon: 'speedometer' },
    { id: 'snow_tires', label: 'Pneus neige', icon: 'car-tire-alert' },
    { id: 'more', label: '...', icon: 'dots-horizontal' }
  ];

  const handleOptionToggle = (id) => {
    setSelectedOptions(prevOptions =>
      prevOptions.includes(id)
        ? prevOptions.filter(option => option !== id)
        : [...prevOptions, id]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.titleContainer} >
      <TouchableOpacity onPress={handleGoBack}>
        <Icon2 name="arrowleft" size={20} color="grey" style={styles.arrowIcon} />

        </TouchableOpacity>
        <TouchableOpacity onPress={handleExit}>
          <Icon2 name="close" size={20} color="grey" />
        </TouchableOpacity>
        
      </View>
      <Text style={styles.header}>Des options en plus?</Text>

      <View style={styles.selectionContainer}>
        {options.map(option => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.button,
              selectedOptions.includes(option.id) && styles.selectedButton
            ]}
            onPress={() => handleOptionToggle(option.id)}
          >
            <Icon
              name={option.icon}
              size={24}
              style={[
                styles.icon,
                selectedOptions.includes(option.id) && styles.selectedIcon
              ]}
            />
            <Text
              style={[
                styles.buttonText,
                selectedOptions.includes(option.id) && styles.selectedButtonText
              ]}
            >
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate('Questionagence')}
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
  titleContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white', // Ensure background color matches the rest of the page
    zIndex: 1, // Ensure it stays on top
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  selectionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 24,
  },
  button: {
    width: 160,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    margin: 8,
    flexDirection: 'row',
  },
  selectedButton: {
    borderColor: '#007BFF',
  },
  icon: {
    marginRight: 8,
    color: '#000000',
  },
  selectedIcon: {
    color: '#007BFF',
  },
  buttonText: {
    fontSize: 14,
    color: '#000000',
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
    marginLeft:'auto',
    bottom:-70
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default Optionvoiture;