import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons2 from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '856155178117-o2o55er3dhhpp3or833lbciqkd7k2nbd.apps.googleusercontent.com'
    });
  }, []);

  const onLogin = async () => {
    if (email === '' || password === '') {
      setMessage('Veuillez remplir les deux champs.');
      return;
    }

    try {
      const signInMethods = await auth().fetchSignInMethodsForEmail(email);
      if (signInMethods.length > 0) {
        // L'utilisateur existe, tentative de connexion
        await auth().signInWithEmailAndPassword(email, password);
        setMessage('Connexion réussie!');
        navigation.navigate('RegistrationScreen'); 
      } else {
        setMessage("L'utilisateur n'existe pas. Veuillez vous inscrire d'abord.");
      }
    } catch (error) {
      setMessage(`Échec de la connexion : ${error.message}`);
    }
  };

  const onGoogleRegister = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
      await auth().signInWithCredential(googleCredential);
      setMessage('Connexion Google réussie!');
    } catch (error) {
      setMessage(`Échec de la connexion Google : ${error.message}`);
    }
  };

  const onResetPassword = async () => {
    if (email === '') {
      setMessage('Veuillez entrer votre adresse e-mail pour réinitialiser votre mot de passe.');
      return;
    }

    try {
      await auth().sendPasswordResetEmail(email);
      setMessage('Un e-mail de réinitialisation du mot de passe a été envoyé.');
    } catch (error) {
      setMessage(`Échec de l'envoi de l'e-mail de réinitialisation : ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer} >
        <Image source={require('../../assets/login3.jpg')} resizeMode='contain' style={styles.image}/>
      </View>
      <View style={styles.form}>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.activeTab}>
            <Text style={styles.activeTabText}>Connexion</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inactiveTab} onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.inactiveTabText}>Inscription</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <Icons2 name="mail" size={20} color="grey" />
          <TextInput
            style={styles.input}
            placeholder="Adresse e-mail"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock-closed" size={20} color="grey" />
          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.optionsContainer}>
          <View style={styles.rememberMeContainer}>
            <Text>Se souvenir de moi</Text>
          </View>
          <TouchableOpacity onPress={onResetPassword}>
            <Text style={styles.forgotPasswordText}>Mot de passe oublié?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
          <Text style={styles.loginButtonText}>Connexion</Text>
        </TouchableOpacity>
        {message ? <Text style={styles.message}>{message}</Text> : null}
        <Text style={styles.orText}>Ou connectez-vous avec</Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton} onPress={onGoogleRegister}>
            <Image source={require('../../assets/google.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../../assets/facebook.png')} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 0,
  },
  image: {
    width: 200,
    height: 200,
  },
  form: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  activeTab: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    paddingBottom: 10,
    alignItems: 'center',
  },
  activeTabText: {
    fontWeight: 'bold',
  },
  inactiveTab: {
    flex: 1,
    paddingBottom: 10,
    alignItems: 'center',
  },
  inactiveTabText: {
    color: 'grey',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: 'blue',
  },
  loginButton: {
    backgroundColor: '#5E77AA',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: 'grey',
    marginBottom: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  message: {
    textAlign: 'center',
    color: 'red',
    marginTop: 10,
  },
});

export default LoginScreen;
