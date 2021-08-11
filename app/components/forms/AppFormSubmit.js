import React,{useContext} from 'react'

import {FormContext} from './formContext'
import AppButton from '../AppButton'

const AppFormSubmit = ({name})=>{
  const {formData,handleSubmit} = useContext(FormContext)
  return (
    <AppButton title={name} onPress={handleSubmit}/>
  )
}

export default AppFormSubmit