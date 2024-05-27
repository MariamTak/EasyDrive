import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Assurez-vous que vous avez installé react-native-vector-icons
import { useNavigation } from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/AntDesign';

const Gererannonce = ({  }) => {
    const navigation = useNavigation(); // Obtenez l'objet de navigation
    const handleGoBack = () => {
      navigation.goBack();
    };
  
    const handleExit = () => {
      // Sortir de la page et aller vers la page d'accueil
      navigation.navigate('CarDetailsScreen'); // Remplacez 'Home' par le nom de votre écran d'accueil
    };
  const [completedSteps, setCompletedSteps] = useState({
    carInfo: true, // Change this to false if you want the initial state to be unchecked
    photos: false,
    calendar: false,
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer} >
      <TouchableOpacity onPress={handleGoBack}>
        <Icon3 name="arrowleft" size={20} color="grey" style={styles.arrowIcon} />

        </TouchableOpacity>
        <TouchableOpacity onPress={handleExit}>
          <Icon3 name="close" size={20} color="grey" />
        </TouchableOpacity>
        
      </View>
      <Text style={styles.header}>Volkswagen Golf{"\n"}</Text>
      <Text style={styles.subHeader}>Gérer l'annonce</Text>

      <View style={styles.card}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('Lieu')}
        >
          <View style={styles.optionContent}>
          <Icon2
              name="location"
              size={24}
              color="#000"
              style={styles.optionIcon}
            />
            <View>
              <Text style={styles.optionText}>Modifier l'adresse</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('Prixjour')}
        >
          <View style={styles.optionContent}>
            <Icon
              name="clipboard-edit-outline"
              size={24}
              color="#000"
              style={styles.optionIcon}
            />
            <View>
              <Text style={styles.optionText}>Modifier le prix</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('Voitureindisponnible')}
        >
          <View style={styles.optionContent}>
            <Icon
              name="calendar-clock"
              size={24}
              color="#000"
              style={styles.optionIcon}
            />
            <View>
              <Text style={styles.optionText}>Mettre à jour le calendrier</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Supprimer mon annonce</Text>
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
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    fontWeight: 'bold',
    color:'black'
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 24,
    fontWeight: 'bold',
    color:'black'

  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 70,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  option: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    marginRight: 16,
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionSubText: {
    fontSize: 14,
    color: '#666666',
  },
   titleContainer: {
   marginLeft:'auto'
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 24,
    marginLeft:'auto',
    bottom: -50,
    right: 0,
    backgroundColor:'#EEEBEB',
  },
  buttonText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',

  },
});

export default Gererannonce;