import React from 'react'
import {View,StyleSheet,TouchableWithoutFeedback} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors'

const ListItemDeleteAction = ({onPress:handlePress})=>{
  return(
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="trash-can" size={35} color="white" />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.danger,
    width:70,
    justifyContent:'center',
    alignItems:'center'
  }
})

export default ListItemDeleteAction