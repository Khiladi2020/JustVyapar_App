import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../config/colors';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeBtn}>
        <MaterialCommunityIcons name="close" size={30} color="white" />
      </View>
      <View style={styles.deleteBtn}>
        <MaterialCommunityIcons name="trash-can-outline" size={30} color="white" /></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/chair.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  closeBtn: {
    position: 'absolute',
    top: 30,
    left: 20,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  deleteBtn: {
    position: 'absolute',
    top: 30,
    right: 20,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});

export default ViewImageScreen;
