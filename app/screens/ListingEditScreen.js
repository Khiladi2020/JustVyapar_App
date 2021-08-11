import React, { useState,useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as yup from 'yup';
// import * as Location from 'expo-location'

import AppScreen from '../components/AppScreen';
import AppButton from '../components/AppButton';
import CategoryPickerItem from '../components/CategoryPickerItem';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import AppFormSubmit from '../components/forms/AppFormSubmit';
import AppFormPicker from '../components/forms/AppFormPicker';
import AppFormImagePicker from '../components/forms/AppFormImagePicker';
import {addListing} from '../api/listings'
import UploadScreen from './UploadScreen'

const initialFormFields = {
  title: '',
  price: 0,
  category: null,
  description: '',
  images:[]
};

const validationSchema = yup.object().shape({
  title: yup.string().required().min(3).label('Title'),
  price: yup.number().required().min(1).max(10000).label('Price').typeError("Price must be a number"),
  category: yup.object().required().nullable().label('Category'),
  description: yup.string(),
  images:yup.array().min(1,"Please select atleast one image")
});

const categories = [
  {
    label: 'Furniture',
    value: 1,
    backgroundColor:'cyan',
    icon:'apps'
  },
  {
    label: 'Clothing',
    value: 2,
    backgroundColor:'seagreen',
    icon:'alarm'
  },
  {
    label: 'Camera',
    value: 3,
    backgroundColor:'gold',
    icon:'account-edit'
  },
];

const LoginScreen2 = () => {
  // console.log('reloaded=================');
  const [location,setLocation] = useState(null)
  const [isUploading,setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  //get user location
  // useEffect(()=>{
  //   (async ()=>{
  //     try{
  //       const {status} = await Location.requestForegroundPermissionsAsync()
  //       // console.log(status)

  //       if(status !== "granted"){
  //         alert("Permission to access location was denied")
  //         return;
  //       }

  //       let user_location = await Location.getCurrentPositionAsync()
  //       console.log('user location',user_location)
  //       // let {coords:{latitude,longitude}} = await Location.getLastKnownPositionAsync()
  //       // console.log('location---',latitude,longitude)
  //       const {coords:{latitude,longitude}} = user_location
  //       setLocation({latitude,longitude})
  //     }
  //     catch (err){
  //       console.log('Error while getting location',err)
  //     }
  //   })()
  // },[]) //componentDidMount
  const handleUploadProgress = (data)=>{
    setUploadProgress(data)
    console.log(data)
  }

  const handleSubmit = async (listings)=>{
    try{
      setUploadProgress(0)
      setIsUploading(true)

      const response = await addListing(listings,handleUploadProgress)
      console.log(response)

      // setIsUploading(false)
      // alert('Success')
    } catch(err){
      alert('Could not save the listing')
      setIsUploading(false)
    }

  }

  return (
    <AppScreen style={styles.container}>
    <UploadScreen visible={isUploading} progress={uploadProgress} onDone={()=> setIsUploading(false)}/>
      <AppForm
        initialFormFields={initialFormFields}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        <AppFormImagePicker 
          name="images"
        />
        <AppFormField
          name="title"
          placeholder="Title"
          maxLength={25}
        />
        <AppFormField
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          maxLength={8}
          width={120}
        />
        <AppFormPicker
          name="category"
          placeholder="Category"
          items={categories}
          numberOfColumns={3}
          width="50%"
          PickerItemComponent={CategoryPickerItem}
        />
        <AppFormField
          name="description"
          placeholder="Description"
          multiline={true}
          numberOfLines={3}
        />
        <AppFormSubmit name="Save" />
      </AppForm>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  error: {
    color: 'tomato',
  },
  logo: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen2;
