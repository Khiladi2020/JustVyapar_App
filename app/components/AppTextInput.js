import React from 'react';
import { View,TextInput, StyleSheet,Platform } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';

const AppTextInput = ({icon,width="100%",...otherProps}) => {
  return (
    <View style={[styles.container,{width}]}>
      {icon && <MaterialCommunityIcons name={icon} 
        size={20} color={colors.grey} style={styles.icon} 
      />}
      <TextInput
      placeholderTextColor={colors.grey}
      style={styles.textInput}
      {...otherProps}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.lightGrey,
    paddingHorizontal:15,
    paddingVertical:5,
    flexDirection:'row',
    borderRadius:20,
    marginVertical:10,
    alignItems:'center'
  },
  textInput:{
    fontSize:18,
    color:colors.darkGrey,
    width:'100%',
    fontFamily:Platform.OS === "android" ? "Roboto": "Avenir"
  },
  icon:{
    marginRight:10
  }
});

export default AppTextInput;
