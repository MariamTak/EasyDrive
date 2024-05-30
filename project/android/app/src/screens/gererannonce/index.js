import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Assurez-vous que vous avez installé react-native-vector-icons
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/AntDesign';
import axios from 'axios';

const Gererannonce = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const user_id=route.params.user_id
  const id = route.params.id;
  console.log("id récupéré :", id);

  const handleExit = () => {
    navigation.navigate('MesVoitures');
  };

  const handleDeleteAnnonce = async () => {
    try {
      await axios.delete(`http://10.0.2.2:8055/api/delete/${id}`);
      Alert.alert("Succès", "Votre annonce a été supprimée avec succès.");
      navigation.navigate('MesVoitures',{id:id,user_id:user_id ,refresh: true});
    } catch (error) {
      console.error("Erreur lors de la suppression de l'annonce :", error);
      Alert.alert("Erreur", "Une erreur est survenue lors de la suppression de l'annonce.");
    }
  };

  const handleConfirmDelete = () => {
    Alert.alert(
      "Confirmer la suppression",
      "Êtes-vous sûr de vouloir supprimer cette annonce ?",
      [
        {
          text: "Annuler",
          style: "cancel",
        },
        {
          text: "Supprimer",
          onPress: handleDeleteAnnonce,
          style: "destructive",
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={handleExit}>
          <Icon3 name="close" size={20} color="grey" />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.subHeader}>Gérer l'annonce</Text>

      <View style={styles.card}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('Lieu')}
        >
          <View style={styles.optionContent}>
            <Icon2
              name="location"
              size={24}
              color="#000"
              style={styles.optionIcon}
            />
            <View>
              <Text style={styles.optionText}>Modifier l'adresse</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('Prixjour')}
        >
          <View style={styles.optionContent}>
            <Icon
              name="clipboard-edit-outline"
              size={24}
              color="#000"
              style={styles.optionIcon}
            />
            <View>
              <Text style={styles.optionText}>Modifier le prix</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('Voitureindisponnible')}
        >
          <View style={styles.optionContent}>
            <Icon
              name="calendar-clock"
              size={24}
              color="#000"
              style={styles.optionIcon}
            />
            <View>
              <Text style={styles.optionText}>Mettre à jour le calendrier</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleConfirmDelete}>
          <Text style={styles.buttonText}>Supprimer mon annonce</Text>
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
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: 'black',
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 70,
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#EEEBEB',
  },
  buttonText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Gererannonce;
