import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

const ListingDetailsScreen = ({route}) => {
  const listing = route.params

  return (
    <View>
      <Image style={styles.image} source={{uri:listing.images[0].url}} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>₹ {listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title="Ravinder Singh"
            subTitle="8 Listings"
            image={require("../assets/logo-red.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    height: 300,
    width: '100%',
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userContainer:{
    marginVertical:30
  }
});

export default ListingDetailsScreen;
