import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Finaliser = () => {
  const navigation = useNavigation(); 
  const [lieu, setLieu] = useState('');

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleExit = () => {
    navigation.navigate('CarDetailsScreen');
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
      <Text style={styles.title}>Ok, vous pourrez bientot publier votre annonce !{"\n"}</Text>
      
      <View style={styles.textWithIcon}>
        <Text style={styles.title2}>Plus que quelque étapes ...</Text>
        <Icon2 name="car" size={20} color="grey" style={styles.iconStyle} />
      </View>

      <View style={styles.textWithIcon}>
        <Text style={styles.title3}>Finalisez votre annonce</Text>
      </View>

      <View style={styles.textWithIcon}>
        <Text style={styles.title4}>Complétez les informations manquantes</Text>
      </View>
     
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Annoncevoiture')}>
          <Text style={styles.buttonText}>Continuer</Text>
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
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 70,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    top: 80,
  },
  textWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title2: {
    fontSize: 16,
    fontWeight: 'bold',
    top: 300,
  },
  title3: {
    fontSize: 15,
    top: 300,
  },
  title4: {
    fontSize: 12,
    top: 300,
  },
  iconStyle: {
    marginLeft: 10,
    top: 340,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5E77AA',
    borderRadius: 8,
    marginTop: 24,
    bottom: -290,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Finaliser;