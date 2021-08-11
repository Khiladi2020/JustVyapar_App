import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

import AppActivityIndicator from '../components/AppActivityIndicator'
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
import {getListings} from '../api/listings';
import useApi from '../hooks/useApi'

// const listings = [
//   {
//     id:1,
//     title:'Red Jacket for sale',
//     price:500,
//     image:require('../assets/chair.jpg')
//   },
//   {
//     id:2,
//     title:'Couch in great condition',
//     price:6000,
//     image:require('../assets/snack-icon.png')
//   }
// ]
const defaultImg = "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700"

const ListingsScreen = ({ navigation }) => {
  const {data:listings,error,loading,request:loadListings} = useApi(getListings)

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <AppScreen style={styles.screen}>
      {error && (
        <>
          <AppText>Unable to fetch the listings.</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      <AppActivityIndicator animating={loading} />
      {listings && (
        <FlatList
          data={listings}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={'₹ ' + item.price}
              imageUri={item.images[0]?.url || defaultImg}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          )}
        />
      )}
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.lightGrey,
  },
});

export default ListingsScreen;
