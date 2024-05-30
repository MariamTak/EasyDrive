import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useRoute } from '@react-navigation/native';

const MesVoitures = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [searchText, setSearchText] = useState('');
  const [cars, setCars] = useState([]);
  const user_id = route.params?.user_id;
  const id = route.params?.id;

  console.log("user_id récupéré :", user_id);
  console.log("id récupéré :", id);

  const fetchCarsByUserId = async () => {
    if (!user_id) {
      console.error('User ID is not available');
      return;
    }

    try {
      const response = await fetch(`http://10.0.2.2:8055/${user_id}/voitures`);
      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  useEffect(() => {
    fetchCarsByUserId();
  }, [user_id, route.params?.refresh]);

  const handleSearch = () => {
    const filtered = cars.filter(car => car.marque.toLowerCase().includes(searchText.toLowerCase()));
    setCars(filtered);
  };

  const CarItem = ({ car }) => (
    <TouchableOpacity style={styles.carItem} onPress={() => handleCarItemPress(car)}>
      <View>
        <Text style={styles.carName}>{car.marque}</Text>
        <Text style={styles.carLocation}>{car.immatriculation}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleCarItemPress = (car) => {
    navigation.navigate('Gererannonce', { car, id, user_id });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Voitures</Text>
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
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
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
  carItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  carLocation: {
    color: '#666',
  },
});

export default MesVoitures;
