import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';
const Voitureindisponible = ({ visible }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const navigation = useNavigation();
  const handleClose = () => {
    // Navigate to Annoncevoiture screen
    navigation.navigate('Annoncevoiture');
  };
  const route = useRoute();
  const user_id=route.params.user_id;
 

  const {marque, model, kilometrage,immatriculation,country,year,carburant,boite,selectedDoors,selectedSeats,agence,lieu,prix } = route.params;
  console.log("user_id récupéré :", user_id);
  console.log("user_id récupéré :", user_id);
  console.log("user_id récupéré :", marque);
  console.log("user_id récupéré :", model);
  console.log("user_id récupéré :", kilometrage);
  console.log("user_id récupéré :", immatriculation);
  console.log("user_id récupéré :", country);
  console.log("user_id récupéré :", year);
  console.log("user_id récupéré :", selectedDoors);
  console.log("user_id récupéré :", selectedSeats);
  console.log("user_id récupéré :", agence);
  console.log("user_id récupéré :", lieu);
  console.log("user_id récupéré :", prix);
  console.log("user_id récupéré :", startDate);
  console.log("user_id récupéré :", endDate);

  const handleSubmit = async () => {
    const voitureDetails = ('handleSubmit',{ user:{user_id:user_id},marque:marque, model:model, kilometrage:kilometrage,immatriculation:immatriculation, country:country,year:year ,carburant:carburant, boite:boite, selectedDoors:selectedDoors, selectedSeats:selectedSeats,agence:agence,lieu:lieu,prix:prix ,startDate:startDate,endDate:endDate});
    navigation.navigate('MesVoitures',{user_id:user_id});

    try {
      const response = await fetch('http://10.0.2.2:8055/api/voitures', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(voitureDetails),
      });

      if (response.ok) {
        const data = await response.json();
        const { id } = data;
        console.log("id récupéré :", id);
        console.log('Données envoyées avec succès');
        navigation.navigate('MesVoitures', { user_id:user_id,id:id });
        console.log("id récupéré :", id);
      } else {
        console.error('Erreur lors de l\'envoi des données');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi des données', error);
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Période de disponibilité</Text>
          <Text style={styles.label}>Début</Text>
          <TextInput
            style={styles.dateTimePicker}
            placeholder="jj-mm-aaaa"
            value={startDate}
            onChangeText={setStartDate}
            keyboardType="numeric"
            maxLength={10} // Longueur maximale pour JJ/MM/AAAA
          />
          <Text style={styles.label}>Fin</Text>
          <TextInput
            style={styles.dateTimePicker}
            placeholder="jj-mm-aaaa"
            value={endDate}
            onChangeText={setEndDate}
            keyboardType="numeric"
            maxLength={10} // Longueur maximale pour JJ/MM/AAAA
          />
          <TouchableOpacity style={styles.saveButton} onPress={handleSubmit} >
            <Text style={styles.saveButtonText}>Enregistrer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  label: {
    width: '100%',
    textAlign: 'left',
    marginBottom: 5,
  },
  dateTimePicker: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#5E77AA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Voitureindisponible;
