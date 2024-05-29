import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import BouttonTabs from '../../components/Bouttontabs';

const Demande = () => {
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
     
      <Text style={styles.title}>Demandes{"\n"}</Text>
      
      
      <Text style={styles.title2} >Vous n’avez aucune demande de location pour l’instant{"\n"}</Text>
     
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
   
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  title2:{
    fontSize: 18,
    textAlign: 'center',
    top:280
  },
  infoBox: {
    backgroundColor: '#C9DDE0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 14,
    color: 'black',
  },
 
});

export default Demande;