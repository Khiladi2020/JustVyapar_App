import React from 'react'
import { View,TouchableOpacity, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';
import AppText from './AppText'
import Icon from './Icon'

const CategoryPickerItem = ({item,onPress:handlePress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Icon name={item.icon} bgColor={item.backgroundColor} size={80}/>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:20,
    paddingVertical: 15,
    alignItems:"center",
    width:'33.33%',
  },
  text:{
    marginTop:5,
    textAlign:'center'
  }
});

export default CategoryPickerItem