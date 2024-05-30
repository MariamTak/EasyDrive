
  import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Voitureindisponible = ({ visible}) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const {
    marque, modele, id, country, year, immatriculation, kilometrage,
    carburant, boite, selectedDoors, selectedSeats, agence, lieu,
    prix
  } = route.params.voitureDetails;

  const voitureDetails = {
    marque, modele, id, country, year, immatriculation, kilometrage,
    carburant, boite, selectedDoors, selectedSeats, agence, lieu,
    prix, startDate, endDate
  };

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
  console.log("startDate:", startDate);
  console.log("endDate:", endDate);

  const handleSave = async () => {
    const availabilityData = {
      startDate: startDate,
      endDate: endDate,
      marque:marque,
      modele:modele,
      immatriculation:immatriculation,
      country:country,
      year:year,
      kilometrage:kilometrage,
      carburant:carburant,
      boite:boite,
      selectedDoors:selectedDoors,
      selectedSeats:selectedSeats,
      agence:agence,
      lieu:lieu,
      prix:prix,
      user: {id:id}
    };

    try {
      const response = await fetch('http://10.0.2.2:8080/voitures', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(availabilityData),
      });

      if (response.ok) {
        console.log('Availability period saved successfully');
        navigation.navigate('MesVoitures', { voitureDetails });
      } else {
        console.error('Error saving availability period');
      }
    } catch (error) {
      console.error('Error saving availability period', error);
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={() => navigation.navigate('Prixjour')}  style={styles.closeButton}>
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
            maxLength={10}
          />
          <Text style={styles.label}>Fin</Text>
          <TextInput
            style={styles.dateTimePicker}
            placeholder="jj-mm-aaaa"
            value={endDate}
            onChangeText={setEndDate}
            keyboardType="numeric"
            maxLength={10}
          />
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
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
