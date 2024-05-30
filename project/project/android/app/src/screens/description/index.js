import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const CarDetailsScreen = () => {
  const navigation = useNavigation();



  const handleClose = () => {
    navigation.navigate('Container') 
  };

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <View style={styles.header}>
        
        <TouchableOpacity onPress={handleClose}>
          <Icon name="close" size={20} color="grey" />
        </TouchableOpacity>
      </View>
      <Text style={styles.desc}>Description{"\n"}</Text>
      <Text style={styles.Label} >Volkswagen Golf{"\n"}</Text>

      <Image
        source={require('../../assets/owner.jpg')}
        style={styles.carImage}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.ownerLabel}>Propriétaire:</Text>
        <Text style={styles.ownerName}>IDRISSI Ahmed</Text>
      </View>
      
      <Text style={styles.ownerLabel}>Description:{"\n"}</Text>
      <Text style={styles.description}>
        Mercedes-Benz est synonyme d'excellence automobile. C'est pour ça que nous l'avons choisi comme référence pour nos véhicules pour qu'ils puissent combiner entre une performance exemplaire et un luxe de premier ordre avec des normes de sécurité impeccables et des références environnementales exceptionnelles.
      </Text>
      <Text style={styles.specsLabel}>Spécification:</Text>
      <View style={styles.specsContainer}>
        <View style={styles.specItem}>
          <Text style={styles.specText}>4 Places</Text>
        </View>
        <View style={styles.specItem}>
          <Text style={styles.specText}>Essence</Text>
        </View>
        <View style={styles.specItem}>
          <Text style={styles.specText}>Manuel</Text>
        </View>
        <View style={styles.specItem}>
          <Text style={styles.specText}>64L</Text>
        </View>
        <View style={styles.specItem}>
          <Text style={styles.specText}>10000 KM</Text>
        </View>
        <View style={styles.specItem}>
          <Text style={styles.specText}>325 Km/h</Text>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Réserver</Text>
        </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  desc: {
    color: '#5E77AA',
    fontWeight: 'bold',
    fontSize: 20, 
  },
  scrollView: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 'auto', 

  },
  arrowIcon: {
    marginLeft: 'auto', 
  },
  carImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  ownerLabel: {
    color: 'black',
    fontWeight: 'bold',
    marginRight: 8,
  },
  ownerName: {
    flex: 1,
    color: 'black',
  },
  phoneButton: {
    backgroundColor: '#5E77AA',
    padding: 8,
    borderRadius: 8,
  },
  phoneButtonText: {
    color: 'white',
  },
  description: {
    marginBottom: 16,
    textAlign: 'justify',
    color: 'black',
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    width: '100%',
  },
  specsLabel: {
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
  },
  specsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  specItem: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    width: '48%',
  },
  specText: {
    textAlign: 'center',
  },
  button: {
   width:365,
   height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5E77AA',
    borderRadius: 8,
    marginTop: 24,
    
    
    right: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  Label:{
    color: 'black',
    fontWeight: 'bold',
    marginRight: 18,
  }
});

export default CarDetailsScreen;