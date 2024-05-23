import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { BlurView } from '@react-native-community/blur';

const CarDetailsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/voiture.jpeg')}
        style={styles.carImage}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.ownerLabel}>Propriétaire:</Text>
        <Text style={styles.ownerName}>Ahmed.......</Text>
        <TouchableOpacity style={styles.phoneButton}>
          <Text style={styles.phoneButtonText}>Afficher numéro</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.description}>
        Mercedes-Benz est synonyme d'excellence automobile. C'est pour ça que nous l'avons choisi comme référence pour nos véhicules pour qu'ils puissent combiner entre une performance exemplaire et un luxe de premier ordre avec des normes de sécurité impeccables et des références environnementales exceptionnelles.
      </Text>
      <Text style={styles.specsLabel}>Spécification:</Text>
      <View style={styles.specsContainer}>
        <BlurView blurType="light" blurAmount={10} style={styles.specItemBlur}>
          <View style={styles.specItem}>
            <Text style={styles.specText}>4 Places</Text>
          </View>
        </BlurView>
        <BlurView blurType="light" blurAmount={10} style={styles.specItemBlur}>
          <View style={styles.specItem}>
            <Text style={styles.specText}>Essence</Text>
          </View>
        </BlurView>
        <BlurView blurType="light" blurAmount={10} style={styles.specItemBlur}>
          <View style={styles.specItem}>
            <Text style={styles.specText}>Manuel</Text>
          </View>
        </BlurView>
        <BlurView blurType="light" blurAmount={10} style={styles.specItemBlur}>
          <View style={styles.specItem}>
            <Text style={styles.specText}>64L</Text>
          </View>
        </BlurView>
        <BlurView blurType="light" blurAmount={10} style={styles.specItemBlur}>
          <View style={styles.specItem}>
            <Text style={styles.specText}>10000 KM</Text>
          </View>
        </BlurView>
        <BlurView blurType="light" blurAmount={10} style={styles.specItemBlur}>
          <View style={styles.specItem}>
            <Text style={styles.specText}>325 Km/h</Text>
          </View>
        </BlurView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  carImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  ownerLabel: {
    fontWeight: 'bold',
    marginRight: 8,
  },
  ownerName: {
    flex: 1,
  },
  phoneButton: {
    backgroundColor: '#5E77AA',
    padding: 8,
    borderRadius: 8,
  },
  phoneButtonText: {
    color: 'white',
  },
  description: {
    marginBottom: 16,
    textAlign: 'justify',
  },
  specsLabel: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  specsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  specItem: {
    backgroundColor: 'transparent',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    width: '48%',
  },
  specItemBlur: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  specText: {
    textAlign: 'center',
  },
});

export default CarDetailsScreen;
