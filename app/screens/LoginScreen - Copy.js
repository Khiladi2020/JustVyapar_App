import React,{useState} from 'react'
import {Image,StyleSheet } from 'react-native'
import * as yup from 'yup'

import AppScreen from '../components/AppScreen'
import AppButton from '../components/AppButton'
import AppText from '../components/AppText'
import AppTextInput from '../components/AppTextInput'

const initialBlur = {
  email:false,
  password:false
}

const initialFormFields = {
  email:'',
  password:''
}

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label('Email'),
  password: yup.string().min(6).label("Password")
})

const validator = (formData)=>{
  return new Promise((resolve,reject)=> validationSchema.validate({
    ...formData
    },{abortEarly:false})
    .then((validated)=>{
      resolve("OK")
    })
    .catch(err=>{
      const new_state = {}
      err.inner.forEach((e,i)=>{
        // console.log(e.name,e.message,e.path)
        new_state[e.path] = e.message
      })
      reject(new_state)
    })
  )
}

const LoginScreen = ()=>{
  console.log('reloaded=================')
  const [formFields,setFormFields] = useState(initialFormFields)
  const [errors,setErrors] = useState({})
  const [blurState,setBlurState] = useState(initialBlur)

  const handleBlur = (field)=>{
    setBlurState(prevState=> { 
      return {...prevState,[field]:true}
    })
    console.log(blurState)
  }

  const handleInputChange = (field,input)=>{
    setFormFields(prevState=>{
      return {...prevState,[field]:input}
    })
  }

  const validate_form = async ()=>{
    return validator(formFields)
    .then((res)=>{
      // console.log(res);
      setErrors({}) //delete all errors
      return "OK"
    })
    .catch((err)=>{
      setErrors(err)
      // console.log(err)
      return Promise.reject("NOT OK")
    })
  }

  const handleLogin = async()=>{
    try{
      const validationStatus = await validate_form()
      console.log('success',validationStatus)
      console.log('sending request to server')
    }
    catch (err){
      console.log('got error',err)
      console.log('request aborted')
    }finally{
      //set blur of all fields on login attempt
      for(const key in initialFormFields){
        handleBlur(key)
      }
    }
    // validate_form()
    // .then((res)=>{
    //   console.log(res,'sending request to server')
    // })
    // .catch((err)=>{
    //   console.log(err,'invalid credentials')
    // })
  }

  console.log('reloaded=================')

  return(
    <AppScreen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        icon="email"
        placeholder="Email"
        onBlur={()=>handleBlur('email')}
        onChangeText={(input)=>{
          handleInputChange('email',input)
          validate_form()
        }}
        onEndEditing={validate_form}
      />
      {blurState.email && errors.email && <AppText style={styles.error}>{errors.email}</AppText>}
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        icon="lock"
        placeholder="Password"
        onBlur={()=>handleBlur('password')}
        onChangeText={(input)=>{
          handleInputChange('password',input)
          validate_form()
        }}
        onEndEditing={validate_form}
      />
      {blurState.password && errors.password && <AppText style={styles.error}>{errors.password}</AppText>}
      <AppButton title="Login" onPress={handleLogin}/>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:10
  },
  error:{
    color:'tomato'
  },
  logo:{
    height:100,
    width:100,
    alignSelf:'center',
    marginTop:50,
    marginBottom:20
  }
})

export default LoginScreen