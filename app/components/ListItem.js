import React from 'react';
import { View,Image, StyleSheet,TouchableHighlight } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Swipeable from 'react-native-gesture-handler/Swipeable'

import AppText from './AppText'
import colors from '../config/colors'

const ListItem = ({ title, subTitle, image, IconComponent ,onPress:handlePress,rightSwipeAction }) => {
  return (
    <Swipeable renderRightActions={rightSwipeAction} >
      <TouchableHighlight 
        underlayColor={colors.lightGrey}  
        onPress={handlePress}
      >
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
          </View>
          <MaterialCommunityIcons name="chevron-right" size={20} color={colors.grey}/>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    padding:12,
    backgroundColor: colors.white,
    alignItems:'center'
  },
  detailsContainer:{
    justifyContent:'center',
    marginLeft:10,
    flex:1
  },
  image:{
    height:70,
    width:70,
    borderRadius:35
  },
  subTitle:{
    color:colors.grey,
    fontSize:16
  },
  title:{
    fontSize:20,
    fontWeight:'bold'
  }
});

export default ListItem;
