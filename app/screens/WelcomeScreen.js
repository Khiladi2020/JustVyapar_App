import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';

import AppButton from '../components/AppButton';
import routes from '../navigation/routes'

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagline}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="login" onPress={() => navigation.navigate(routes.LOGIN)} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  tagline: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
