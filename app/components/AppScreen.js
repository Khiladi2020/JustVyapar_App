import React from 'react'
import {SafeAreaView,View ,StyleSheet,Platform,StatusBar} from 'react-native'

const device = Platform.OS

const AppScreen = ({children, style})=>{
  const bgColor = {}
  
  if(style && style.backgroundColor){
    bgColor.backgroundColor=style.backgroundColor
  }

  const main_view = (
    <View style={[styles.main_view,style]}>
      {children}
    </View>
  )
  
  const screen = device === "ios" ? (
    <SafeAreaView style={[styles.screen_ios,bgColor]}>
      {main_view}
    </SafeAreaView>
  ):
  (
    <View style={[styles.screen_common,bgColor]}>
      {main_view}
    </View>
  )

  return screen
  
}

const styles = StyleSheet.create({
  screen_common:{
    // paddingTop: device === "android" ? StatusBar.currentHeight:0,
    flex:1,
  },
  screen_ios:{
    flex:1
  },
  main_view:{
    flex:1
  }
})

export default AppScreen