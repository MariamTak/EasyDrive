
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation, useRoute } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';

const Photovoiture = () => {
  const route = useRoute();
  const { voitureDetails } = route.params;
  const { marque, modele, id, country, year, immatriculation, kilometrage, carburant, boite, selectedDoors, selectedSeats, agence, lieu, prix } = voitureDetails;

  const [mainPhoto, setMainPhoto] = useState(null);
  const [sidePhoto, setSidePhoto] = useState(null);
  const [rearPhoto, setRearPhoto] = useState(null);
  const navigation = useNavigation();

    
  console.log("id:", id); 
  console.log("modele:", modele); 
  console.log("marque:", marque);
  console.log("country:", country); 
  console.log("year:", year); 
  console.log("immatriculation:", immatriculation); 
  console.log("kilometrage:", kilometrage); 
  console.log("carburant:", carburant); 
  console.log("boite:", boite); 
  console.log("selectedDoors:", selectedDoors); 
  console.log("selectedSeats:", selectedSeats); 
  console.log("agence:", agence); 
  console.log("lieu:", lieu); 
  console.log("prix:", prix); 

  const importImage = (setImage) => {
    const options = {
      mediaType: 'photo',
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.assets[0].uri };
        setImage(source);
        console.log('Image selected:', source);
      }
    });
  };

  const convertToBase64 = async (uri) => {
    return new Promise((resolve, reject) => {
      fetch(uri)
        .then(response => response.blob())
        .then(blob => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result.split(',')[1]);
          };
          reader.readAsDataURL(blob);
        })
        .catch(error => reject(error));
    });
  };

  const handleNext = async () => {
    try {
      let base64MainPhoto = null;
      let base64SidePhoto = null;
      let base64RearPhoto = null;

      if (mainPhoto) {
        base64MainPhoto = await convertToBase64(mainPhoto.uri);
      }
      if (sidePhoto) {
        base64SidePhoto = await convertToBase64(sidePhoto.uri);
      }
      if (rearPhoto) {
        base64RearPhoto = await convertToBase64(rearPhoto.uri);
      }

      const updatedVoitureDetails = {
        ...voitureDetails,
        mainPhoto: base64MainPhoto,
        sidePhoto: base64SidePhoto,
        rearPhoto: base64RearPhoto
      };

      navigation.navigate('Voitureindisponible', {
        voitureDetails: updatedVoitureDetails
      });
    } catch (error) {
      console.error('Error converting image to base64:', error);
      Alert.alert('Erreur', 'Une erreur est survenue lors de la conversion des images.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={handleNext}>
          <Icon name="arrowright" size={20} color="grey" style={styles.arrowIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
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
            <TouchableOpacity onPress={() => importImage(setMainPhoto)}>
              <Icon name="pluscircle" size={20} color="grey" style={styles.iconplus} />
            </TouchableOpacity>
            {mainPhoto && <Image source={mainPhoto} style={styles.carImage} />}
          </View>
        </View>
        <View style={styles.pickerContainer}>
          <Text style={styles.exemple}>Voir l'exemple</Text>
          <View style={styles.infoBox}>
            <Text style={styles.type}>Latérale</Text>
            <TouchableOpacity onPress={() => importImage(setSidePhoto)}>
              <Icon name="pluscircle" size={20} color="grey" style={styles.iconplus} />
            </TouchableOpacity>
            {sidePhoto && <Image source={sidePhoto} style={styles.carImage} />}
          </View>
        </View>
        <View style={styles.pickerContainer}>
          <Text style={styles.exemple}>Voir l'exemple</Text>
          <View style={styles.infoBox}>
            <Text style={styles.type}>Arrière</Text>
            <TouchableOpacity onPress={() => importImage(setRearPhoto)}>
              <Icon name="pluscircle" size={20} color="grey" style={styles.iconplus} />
            </TouchableOpacity>
            {rearPhoto && <Image source={rearPhoto} style={styles.carImage} />}
          </View>
        </View>
      </ScrollView>
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
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pickerContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  pickerLabel: {
    fontSize: 16,
    marginBottom: 10,
  },
  infoBox: {
    backgroundColor: '#ECEDFA',
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  type: {
    textAlign: 'center',
    color: '#5E77AA',
    marginBottom: 10,
  },
  photo: {
    textAlign: 'center',
    marginTop: 20,
    alignItems: 'center',
  },
  iconplus: {
    marginLeft: 15,
  },
  exemple: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Photovoiture;
