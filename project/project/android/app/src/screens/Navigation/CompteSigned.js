// AccountScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';

const AccountScreen = ({ navigation, route }) => {
  const { fullName } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://example.com/profile-pic.png' }} style={styles.profileImage} />
        <Text style={styles.name}>{fullName}</Text>
        <Text style={styles.memberSince}>Membre depuis le 24 mai 2024</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Icon name="star" size={20} color="#5E77AA" style={styles.icon} />
        <Text style={styles.buttonText}>Évaluation</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="history" size={20} color="#5E77AA" style={styles.icon} />
        <Text style={styles.buttonText}>Mon historique de location</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MesVoitures')}>
        <Icon name="car" size={20} color="#5E77AA" style={styles.icon} />
        <Text style={styles.buttonText}>Mes voitures</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="question-circle" size={20} color="#5E77AA"style={styles.icon} />
        <Text style={styles.buttonText}>Centre d'aide</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="users" size={20} color="#5E77AA" style={styles.icon} />
        <Text style={styles.buttonText}>Inviter des amis</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="sign-out" size={20} color="#5E77AA" style={styles.icon} />
        <Text style={styles.buttonText}>Se déconnecter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  memberSince: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AccountScreen;
