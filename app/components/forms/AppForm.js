import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';

import AppScreen from '../AppScreen';
import AppButton from '../AppButton';
import AppText from '../AppText';
import AppTextInput from '../AppTextInput';
import useFormContext from './useFormContext';
import { FormContext } from './formContext';
import AppFormField from './AppFormField';

const AppForm = ({
  initialBlur,
  initialFormFields,
  validationSchema,
  onSubmit,
  children,
}) => {
  const {
    errors,
    formFields,
    blurState,
    handleBlur,
    validate_form,
    handleInputChange,
  } = useFormContext(initialFormFields, validationSchema);

  const handleSubmit = async () => {
    try {
      const validationStatus = await validate_form();
      console.log('success', validationStatus);
      console.log('sending request to server');
      onSubmit(formFields);
    } catch (err) {
      console.log('got error', err);
      console.log('request aborted');
    } finally {
      //set blur of all fields on login attempt
      for (const key in initialFormFields) {
        handleBlur(key);
      }
    }
  };
  // validate_form()
  // .then((res)=>{
  //   console.log(res,'sending request to server')
  // })
  // .catch((err)=>{
  //   console.log(err,'invalid credentials')
  // })
  // }

  // console.log('reloaded=================');
  return (
    <FormContext.Provider
      value={{
        errors,
        blurState,
        handleBlur,
        formFields,
        validate_form,
        handleInputChange,
        handleSubmit,
      }}>
      {children}
    </FormContext.Provider>
  );
};

export default AppForm;
