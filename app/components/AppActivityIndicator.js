import React from 'react'
import LottieView from 'lottie-react-native'

const AppActivityIndicator = ({animating})=>{
  if(!animating) return null

  return(
      <LottieView source={require('../assets/animations/loader_3.json')} autoPlay loop/>
  )
}

export default AppActivityIndicator