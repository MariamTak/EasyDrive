import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const LogIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = async () => {
    const loginDetails = { email, password };

    try {
      const response = await fetch('http://10.0.2.2:8055/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginDetails),
      });

      if (response.ok) {
        const data = await response.json();
        const { user_id,fullName } = data;
        console.log("user_id récupéré :", user_id);
        console.log("fullName récupéré :", fullName);
        console.log('Login successful');
        navigation.navigate('Container', {user_id:user_id,fullName:fullName});
      } else {
        console.error('Invalid credentials');
        setMessage('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login', error);
      setMessage('Error during login');
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
          <TouchableOpacity style={styles.activeTab}>
            <Text style={styles.activeTabText}>Se connecter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inactiveTab} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.inactiveTabText}>S'inscrire</Text>
          </TouchableOpacity>
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
        <View style={styles.optionsContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.registerButton} onPress={handleLogin}>
          <Text style={styles.registerButtonText}>Se connecter</Text>
        </TouchableOpacity>
        {message ? <Text style={styles.message}>{message}</Text> : null}
        <Text style={styles.orText}>Ou</Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
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

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    marginTop: 60,
    marginBottom: 40,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 14,
    color: 'grey',
    marginTop: 5,
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
  imageContainer: {
    alignItems: 'center',
    marginVertical: 0,
  },
  image: {
    width: 300,
    height: 200,
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
    justifyContent: 'flex-end',
    marginBottom: 15,
  },
  forgotPasswordText: {
    color: '#5E77AA',
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