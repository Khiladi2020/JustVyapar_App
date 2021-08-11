import React,{useEffect} from 'react';
import {View,StyleSheet,Image,TouchableWithoutFeedback,Alert,Platform} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import * as ImagePicker from 'expo-image-picker'
import { launchImageLibrary } from 'react-native-image-picker';

import colors from '../config/colors'


const ImageInput = ({imageUri,onChangeImage:handleChangeImage}) => {
  //request permission
  // useEffect(()=>{
  //   (async ()=>{
  //     if(Platform.OS!=="web"){
  //       const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync()
  //       if(status!=="granted"){
  //         alert('Sorry we need camera roll permission to make this work')
  //       }
  //     }
  //   })()
  // },[])//setted empty array to prevent executions on rerenders, act as componentDidMount

  const handlePress = ()=>{
    if(!imageUri) pickImage()
    else{
      Alert.alert(
        "Delete",
        "Are you sure, you want to delete this image ?",
        [
          {
            text:"Yes",
            onPress:()=>handleChangeImage(imageUri)
          },
          {
            text:"No"
          }
        ]
      )
    }
  }

  const pickImage = async ()=>{
    const options = {
      mediaType:'photo',
      quality:0.5
    }
    try{
      launchImageLibrary(options,(response)=>{
        if(response.didCancel){
          console.log('cancelled by user')
        }
        if(response.errorCode){
          console.log(response.errorCode,responseresponse.errorMessage)
        }
        if(response.assets){
          console.log(response.assets)
        }
        if(!response.didCancel && !response.errorCode){
          const selected_img_uri = response.assets[0].uri
          console.log(selected_img_uri)
          handleChangeImage(selected_img_uri)
        }

      })
    } catch(err){
      console.log('errorssss',err)
    }

    // ------------- expo image picker code ---------
    // try{
    //   const result = await ImagePicker.launchImageLibraryAsync({
    //     mediaTypes:ImagePicker.MediaTypeOptions.Images,
    //     qulity:0.5
    //   })
    //   console.log(result)

    //   if(!result.cancelled){
    //     handleChangeImage(result.uri)
    //   }
    // }
    // catch (err){
    //   console.log('Error in picking image,',err)
    // }
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && <MaterialCommunityIcons name="camera" size={40} color={colors.grey}/>}
        {imageUri && <Image source={{uri:imageUri}} style={styles.image}/>}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.lightGrey,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:15,
    height:100,
    width:100,
    overflow:'hidden'
  },
  image:{
    height:"100%",
    width:"100%"}
});

export default ImageInput;
