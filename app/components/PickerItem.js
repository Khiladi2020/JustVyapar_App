import React from 'react';
import { View,TouchableOpacity, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';
import AppText from './AppText'

const PickerItem = ({item,onPress:handlePress}) => {
  return (
    <TouchableOpacity style={{backgroundColor:''}} onPress={handlePress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text:{
    padding: 20
  }
});

export default PickerItem;
