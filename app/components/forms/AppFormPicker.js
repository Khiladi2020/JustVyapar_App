import React,{useContext} from 'react'
import {StyleSheet } from 'react-native'

import {FormContext} from './formContext'
import AppText from '../AppText'
import AppPicker from '../AppPicker'

const AppFormPicker = ({items,name,icon,width,PickerItemComponent,numberOfColumns})=>{
  const {blurState,errors,formFields,handleInputChange} = useContext(FormContext)
  // console.log('field',formFields)
  return (
    <>
      <AppPicker 
        placeholder={name} 
        items={items}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
        icon={icon}
        selectedItem={formFields[name]}
        onSelectItem={(item)=>{
          handleInputChange(name,item)
        }}
        width={width}
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

export default AppFormPicker