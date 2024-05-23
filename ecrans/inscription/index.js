import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

const Inscription = () => {
  useEffect(() => {
    GoogleSignin.configure({WebClientId:'856155178117-o2o55er3dhhpp3or833lbciqkd7k2nbd.apps.googleusercontent.com'});
  }, []);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onRegister = () => {
    // Utiliser les données pour l'inscription
    const userData = {
      email,
      password,
      phoneNumber,
      firstName,
      lastName,
    };

    // Inscription avec les données utilisateur
    auth()
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then(() => {
        Alert.alert('Compte utilisateur créé avec succès!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Cette adresse e-mail est déjà utilisée!');
        }
        if (error.code === 'auth/invalid-email') {
          Alert.alert('Cette adresse e-mail est invalide!');
        }
        // Gérer d'autres erreurs ici
      });
  };

  const onGoogleRegister = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // Utilisez les informations de l'utilisateur Google pour l'inscription ou connectez-vous
      console.log(userInfo);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.signup}>Inscription</Text>
      <TextInput
        placeholder="Nom"
        style={styles.inputBox}
        value={lastName}
        onChangeText={value => setLastName(value)}
      />
      <TextInput
        placeholder="Prénom"
        style={styles.inputBox}
        value={firstName}
        onChangeText={value => setFirstName(value)}
      />
      <TextInput
        placeholder="Numéro de téléphone"
        style={styles.inputBox}
        value={phoneNumber}
        onChangeText={value => setPhoneNumber(value)}
        keyboardType="phone-pad" // Afficher la palette de numéros
      />
      <TextInput
        placeholder="Email"
        style={styles.inputBox}
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <TextInput
        placeholder="Password"
        style={styles.inputBox}
        value={password}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={onRegister} style={styles.register}>
        <Text style={styles.registerTitle}>S'inscrire</Text>
      </TouchableOpacity>
      <GoogleSigninButton
        style={styles.googleButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={onGoogleRegister}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  inputBox: {
    borderWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: 12,
    borderRadius: 5,
    width: '90%',
    marginTop: 20,
  },
  register: {
    width: '90%',
    backgroundColor: '#FCAF03',
    padding: 12,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  registerTitle: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
  },
  signup: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '600',
    marginBottom: 20,
  },
  googleButton: {
    width: '90%',
    marginTop: 20,
  },
});

export default Inscription;
