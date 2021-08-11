import React,{useState} from 'react'
import {Image,StyleSheet } from 'react-native'
import * as yup from 'yup'

import AppScreen from '../components/AppScreen'
import AppButton from '../components/AppButton'
import AppText from '../components/AppText'
import AppTextInput from '../components/AppTextInput'
import AppForm from '../components/forms/AppForm'
import AppFormField from '../components/forms/AppFormField'
import AppFormSubmit from '../components/forms/AppFormSubmit'

const initialFormFields = {
  name:'',
  email:'',
  password:''
}

const validationSchema = yup.object().shape({
  name:yup.string().required().min(2),
  email: yup.string().required().email().label('Email'),
  password: yup.string().min(6).label("Password")
})

const RegisterScreen = ()=>{
  console.log('reloaded=================')

  return(
    <AppScreen style={styles.container}>
      <AppForm
        initialFormFields={initialFormFields}
        validationSchema={validationSchema}
        onSubmit={()=>console.log('juppda')}
      >
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <AppFormField name="name" placeholder="Name" icon="account"/>
        <AppFormField name="email" placeholder="Email" icon="email"/>
        <AppFormField name="password" placeholder="Password" icon="lock"/>
        <AppFormSubmit name="Register"/>
      </AppForm>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:10
  },
  logo:{
    height:100,
    width:100,
    alignSelf:'center',
    marginTop:50,
    marginBottom:20
  }
})

export default RegisterScreen