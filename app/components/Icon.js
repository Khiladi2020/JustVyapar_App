import React from 'react'
import {View} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = ({name,size=50,bgColor="#000",iconColor="#fff"})=>{
  return(
    <View style={{
      height:size,
      width:size,
      backgroundColor:bgColor,
      borderRadius:size*0.5,
      justifyContent:'center',
      alignItems:'center'
    }}>
      <MaterialCommunityIcons name={name} color={iconColor} size={size*0.6} />
    </View>
  )
}

export default Icon