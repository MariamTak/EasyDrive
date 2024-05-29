import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
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
  iconplus:{
    marginLeft:15,
    
    
      },
     
  exemple: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Photovoiture;
