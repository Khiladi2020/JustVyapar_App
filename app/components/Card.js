import React from 'react'
import {View,Text,Image,StyleSheet,TouchableWithoutFeedback} from 'react-native'

import AppText from './AppText'
import colors from '../config/colors'

const Card = ({title,subTitle,imageUri,onPress:handlePress})=>{
  return(
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri:imageUri}} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card:{
    backgroundColor:colors.white,
    borderRadius:15,
    marginBottom:20,
    overflow:'hidden'
  },
  detailsContainer:{
    padding:20
  },
  image:{
    width:'100%',
    height:200
  },
  subTitle:{
    color:colors.secondary,
    fontWeight:'bold'
  },
  title:{
    marginBottom:7
  }
})

export default Card