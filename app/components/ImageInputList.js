import React,{useRef} from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';

import ImageInput from './ImageInput'

const ImageInputList = ({imageUris,onRemoveImage,onAddImage}) => {
  const scrollView = useRef()
  return (
    <View>
      <ScrollView ref={scrollView} horizontal={true} onContentSizeChange={()=> scrollView.current.scrollToEnd()}>
        <View style={styles.container}>
          {imageUris.map((uri,index)=>(
            <View style={styles.image} key={index}>
              <ImageInput imageUri={uri} onChangeImage={onRemoveImage}/>
            </View>
          ))}
          <ImageInput onChangeImage={onAddImage}/>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection:'row'
  },
  image:{
    marginRight:7
  }
});

export default ImageInputList;
