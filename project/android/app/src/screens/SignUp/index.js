import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';

const SignUp = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: "419681689627-rq0qnpr1iaed5tbb85hfk3furao23r7p.apps.googleusercontent.com",
    });
  }, []);

  const handleSignUp = async () => {
    if (!email || !password || !fullName) {
      setMessage('Veuillez remplir tous les champs');
      return;
    }
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      await userCredential.user.updateProfile({ displayName: fullName });
      navigation.navigate('Container');
    } catch (error) {
      console.error("Error during email sign-up:", error);
      setMessage(error.message);
    }
  };

  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      navigation.navigate('Container');
    } catch (error) {
      console.error("Google sign-in error:", error);
      setMessage(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/Member1.png')}
          resizeMode='contain'
        />
      </View>
      <View style={styles.form}>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.inactiveTab} onPress={() => navigation.navigate('LogIn')}>
            <Text style={styles.inactiveTabText}>Se connecter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.activeTab}>
            <Text style={styles.activeTabText}>S'inscrire</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="grey" />
          <TextInput
            style={styles.input}
            placeholder="Nom complet"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="envelope" size={20} color="grey" />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="grey" />
          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <Icon name={passwordVisible ? "eye" : "eye-slash"} size={20} color="grey" />
          </TouchableOpacity>
        </View>
        {message ? <Text style={styles.message}>{message}</Text> : null}
        <TouchableOpacity style={styles.registerButton} onPress={handleSignUp}>
          <Text style={styles.registerButtonText}>S'inscrire</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>Ou</Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton} onPress={onGoogleButtonPress}>
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

export default SignUp;

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
    width: 300,
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
  registerButton: {
    backgroundColor: '#5E77AA',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  registerButtonText: {
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
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});
