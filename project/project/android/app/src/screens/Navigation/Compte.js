import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Compte = () => {
  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>Bonjour, Guest</Text>
      </View>
      <View style={styles.options}>
        <View style={styles.option}>
          <Icon name="user" size={24} color="#5E77AA" style={styles.icon} />
          <Text style={styles.text}>Connexion</Text>
        </View>
        <View style={styles.option}>
          <Icon name="user-plus" size={24} color="#5E77AA" style={styles.icon} />
          <Text style={styles.text}>Inscription</Text>
        </View>
      
        <View style={styles.option}>
          <Icon name="car" size={24} color="#5E77AA" style={styles.icon} />
          <Text style={styles.text}>Louer ma voiture</Text>
        </View>
        <View style={styles.option}>
          <Icon name="question-circle" size={24} color="#5E77AA" style={styles.icon} />
          <Text style={styles.text}>Centre d'aide</Text>
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  welcome: {
    paddingBottom: 20,

  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  options: {
    paddingTop: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon: {
    marginRight: 20,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default Compte;
