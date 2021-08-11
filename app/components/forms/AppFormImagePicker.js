import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { FormContext } from './formContext';
import ImageInputList from '../ImageInputList';
import AppText from '../AppText';

const AppFormImagePicker = ({ name }) => {
  const { blurState, errors, formFields,handleInputChange } = useContext(FormContext);
  
  const handleAdd = (uri)=>{
    handleInputChange(name,[...formFields[name],uri])
  }

  const handleRemove = (uri)=>{
    handleInputChange(name, formFields[name].filter(imageUri => imageUri!==uri))
  }
  
  return (
    <>
      <ImageInputList
        imageUris={formFields[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      {blurState[name] && errors[name] && (
        <AppText style={styles.error}>{errors[name]}</AppText>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    color: 'tomato',
  },
});

export default AppFormImagePicker;
