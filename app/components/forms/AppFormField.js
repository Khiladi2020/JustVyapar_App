import React,{useContext} from 'react'
import {StyleSheet } from 'react-native'

import {FormContext} from './formContext'
import AppText from '../AppText'
import AppTextInput from '../AppTextInput'

const AppFormField = ({name,icon,...otherProps})=>{
  const {blurState,errors,handleBlur,validate_form,handleInputChange} = useContext(FormContext)
  // console.log(errors,blurState[name])
  return (
    <>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        icon={icon}
        onBlur={()=>handleBlur(name)}
        onChangeText={(input)=>{
          handleInputChange(name,input)
          validate_form()
        }}
        onEndEditing={validate_form}
        {...otherProps}
      />
       {blurState[name] && errors[name] && <AppText style={styles.error}>{errors[name]}</AppText>}
      </>
  )
}

const styles = StyleSheet.create({
  error:{
    color:'tomato'
  }
})

export default AppFormField