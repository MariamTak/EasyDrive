import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation,useRoute } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';

const Photovoiture = () => {
  const [imageSource, setImageSource] = useState(null);
  const navigation = useNavigation();
  const route = useRoute();
  const {marque, model, kilometrage,immatriculation,country,year,carburant,boite,selectedDoors,selectedSeats,agence,lieu,prix } = route.params;
  const handleSuivant = () => {
    // Utilisez les variables récupérées ici (marque, model, kilometrage, selectedDoors, selectedSeats)
    navigation.navigate('Voitureindisponible', { marque:marque, model:model, kilometrage:kilometrage,immatriculation:immatriculation, country:country,year:year ,carburant:carburant, boite:boite, selectedDoors:selectedDoors, selectedSeats:selectedSeats,agence:agence,lieu:lieu,prix:prix,imageSource:imageSource });
  };
 



 
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleExit = () => {
    navigation.navigate('CarDetailsScreen');
  };

  const importImage = () => {
    const options = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const { uri, fileName } = response.assets[0];
        const source = { uri, name: fileName, type: response.assets[0].type };
        setImageSource(source);
        console.log('Image selected:', source);
      }
    });
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
      <ScrollView>
        <View style={styles.photo}>
          <Text style={styles.title}>Photos</Text>
          <Text>1/3{"\n"}</Text>
        </View>
        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Photo principale (0/3)</Text>
          <View style={styles.infoBox}>
            <Text style={styles.type}>Principale</Text>
            <TouchableOpacity onPress={importImage}>
              <Icon name="pluscircle" size={20} color="grey" style={styles.iconplus} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.pickerContainer}>
          <Text style={styles.exemple}>Voir l'exemple</Text>
          <View style={styles.infoBox}>
            <Text style={styles.type}>Latérale</Text>
            <TouchableOpacity onPress={importImage}>
              <Icon name="pluscircle" size={20} color="grey" style={styles.iconplus} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.pickerContainer}>
          <Text style={styles.exemple}>Voir l'exemple</Text>
          <View style={styles.infoBox}>
            <Text style={styles.type}>Arrière</Text>
            <TouchableOpacity onPress={importImage}>
              <Icon name="pluscircle" size={20} color="grey" style={styles.iconplus} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.nextButton} onPress={handleSuivant}>
        <Text style={styles.nextButtonText}>Suivant</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  arrowIcon: {
    marginRight: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  photo: {
    alignItems: 'center',
  },
  pickerContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  pickerLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  type: {
    fontSize: 16,
  },
  iconplus: {
    marginLeft: 8,
  },
  exemple: {
    color: '#5E77AA',
  },
  nextButton: {
    backgroundColor: '#5E77AA',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    margin: 16,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Photovoiture;