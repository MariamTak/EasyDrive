import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const MesVoitures = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);

  const cars = [
    { id: '1', name: 'Volkswagen Golf', location: 'Rabat, bayt al maarifa', image: require('../../assets/owner.jpg') }
  ];

  const CarItem = ({ car }) => (
    <TouchableOpacity style={styles.carItem} onPress={() => handleCarItemPress(car)}>
      <Image source={car.image} style={styles.carImage} />
      <View>
        <Text style={styles.carName}>{car.name}</Text>
        <Text style={styles.carLocation}>{car.location}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleNavigateToContainer = () => {
    navigation.navigate('Container');
  };

  const handleNavigateToMesVoitures = () => {
    navigation.navigate('MesVoitures');
  };

  const handleSearch = () => {
    const filtered = cars.filter(car => car.name.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredCars(filtered);
  };

  const handleCarItemPress = (car) => {
    // Navigate to Gererannonce screen with the car data
    navigation.navigate('Gererannonce', { car });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Voitures</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Container')} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher par plaque d'immatriculation"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Icon name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <Button
        title="Toutes vos voitures"
        type="outline"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.outlineButton}
      />
      <FlatList
        data={filteredCars.length > 0 ? filteredCars : cars}
        renderItem={({ item }) => <CarItem car={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1, // Ensures the button is on top of other elements
  },
  closeButtonText: {
    fontSize: 24,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  searchButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#5E77AA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginBottom: 16,
  },
  outlineButton: {},
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  carItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
  },
  carImage: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  carLocation: {
    color: '#666',
  },
  closeButton: {
    padding: 10,
  },
  message: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default MesVoitures;
