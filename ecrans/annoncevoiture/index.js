import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Assurez-vous que vous avez installé react-native-vector-icons
import { useNavigation } from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/AntDesign';
const Annoncevoiture = ({  }) => {
    const navigation = useNavigation(); // Obtenez l'objet de navigation
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
        <TouchableOpacity onPress={handleExit}>
          <Icon2 name="close" size={20} color="grey" />
        </TouchableOpacity>
        
      </View>
      <Text style={styles.header}>Volkswagen Golf{"\n"}</Text>
      <Text style={styles.subHeader}>Votre annonce</Text>

      <View style={styles.card}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('Modelvoiture')}
        >
          <View style={styles.optionContent}>
            <Icon
              name={completedSteps.carInfo ? 'check-circle' : 'circle-outline'}
              size={24}
              color={completedSteps.carInfo ? '#007BFF' : '#CCCCCC'}
              style={styles.optionIcon}
            />
            <View>
              <Text style={styles.optionText}>Ajoutez des informations sur votre voiture</Text>
              <Text style={styles.optionSubText}>Modèle, kilométrage, adresse...</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('Photovoiture')}
        >
          <View style={styles.optionContent}>
            <Icon
              name="camera"
              size={24}
              color="#000"
              style={styles.optionIcon}
            />
            <View>
              <Text style={styles.optionText}>Ajoutez des photos</Text>
              <Text style={styles.optionSubText}>Au moins 3, prises de différents angles</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('Voitureindisponnible')}
        >
          <View style={styles.optionContent}>
            <Icon
              name="calendar"
              size={24}
              color="#000"
              style={styles.optionIcon}
            />
            <View>
              <Text style={styles.optionText}>Mettez à jour votre calendrier</Text>
              <Text style={styles.optionSubText}>Dites aux locataires quand votre voiture est disponible</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color:'grey',

  },
  subHeader: {
    fontSize: 16,
    marginBottom: 24,
    fontWeight: 'bold',
    color:'black'

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
});

export default Annoncevoiture;
