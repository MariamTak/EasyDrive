import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';

const Photovoiture = () => {
  const [marque, setmarque] = useState('Volkswagen');
  const [model, setmodel] = useState('Golf');
  const [imageSource, setImageSource] = useState(null);
  const navigation = useNavigation();

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
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.assets[0].uri };
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
      <View style={styles.photo}>
        <Text style={styles.title}>Photos</Text>
        <Text>1/4{"\n"}</Text>
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Photo principale (0/4)</Text>
        {imageSource ? (
          <Image source={imageSource} style={styles.carImage} />
        ) : (
          <Image source={require('../../assets/car.jpg')} style={styles.carImage} />
        )}
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.exemple}>Voir l'exemple</Text>
        <Icon name="infocirlce" size={20} color="grey" style={styles.iconinfo} />
        <View style={styles.infoBox}>
          <Text style={styles.type}>Latérale</Text>
          <TouchableOpacity onPress={importImage}>
            <Icon name="pluscircle" size={20} color="grey" style={styles.iconplus} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.exemple}>Voir l'exemple</Text>
        <Icon name="infocirlce" size={20} color="grey" style={styles.iconinfo} />
        <View style={styles.infoBox}>
          <Text style={styles.type}>Arrière</Text>
          <TouchableOpacity onPress={importImage}>
            <Icon name="pluscircle" size={20} color="grey" style={styles.iconplus} />
          </TouchableOpacity>
        </View>
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
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 70,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  pickerContainer: {
    marginBottom: 20,
  },
  pickerLabel: {
    fontSize: 16,
    marginBottom: 10,
    top: -100,
  },
  infoBox: {
    backgroundColor: '#ECEDFA',
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
    top: -100,
  },
  carImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
    top: -100,
  },
  type: {
    textAlign: 'center',
    color: '#5E77AA',
    top:65,

    
  },
  photo:{
   textAlign:'center',
   marginTop: 20,
   top:-100,
   alignItems: 'center',


  },
  iconplus:{
marginLeft:165,
top:70,

  },
  iconinfo:{
    marginLeft:'auto',
    top:-125,

  },
  exemple:{
    fontSize: 16,
    top:-100,

  },
});

export default Photovoiture;