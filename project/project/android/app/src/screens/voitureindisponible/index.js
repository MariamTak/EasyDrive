import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Voitureindisponible = ({ visible, onClose }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const navigation = useNavigation();
  const handleClose = () => {
    // Navigate to Annoncevoiture screen
    navigation.navigate('Annoncevoiture');
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
          <TouchableOpacity style={styles.saveButton} onPress={() => navigation.navigate('SuccessPage')}>
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
