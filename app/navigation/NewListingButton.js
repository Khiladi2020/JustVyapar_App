import React from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors'

const NewListingButton = (props) => {
  return (
    <TouchableOpacity {...props}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus-circle" color={colors.white} size={40}/>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    justifyContent:'center',
    height:70,
    width:70,
    borderRadius:40,
    borderColor:colors.white,
    borderWidth:5,
    backgroundColor:colors.primary
  },
});

export default NewListingButton;
