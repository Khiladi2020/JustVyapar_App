import React from 'react'
import {View,Text,StyleSheet,FlatList} from 'react-native'

import AppScreen from '../components/AppScreen'
import ListItem from '../components/ListItem'
import Icon from '../components/Icon'
import colors from '../config/colors'
import routes from '../navigation/routes'
import ListItemSeparator from '../components/ListItemSeparator'
const menuItems = [
  {
    title:"My Listings",
    icon:{
      name:"format-list-bulleted",
      color:colors.primary
    },
    targetScreen:routes.ACCOUNT_MESSAGES
  },
  {
    title:"My Messages",
    icon:{
      name:"email",
      color:colors.secondary
    },
    targetScreen:routes.ACCOUNT_MESSAGES
  }
]

const AccountScreen = ({navigation})=>{
  return(
    <AppScreen style={styles.screen}>
      <View style={styles.container}>
        <ListItem title="Ravinder Singh"
          subTitle="ravimaan0123@gmail.com"
          image={require('../assets/logo-red.png')} 
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({item})=>(
            <ListItem
              title={item.title}
              IconComponent={<Icon name={item.icon.name} bgColor={item.icon.color}/>}
              onPress={()=>navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Logout"
        IconComponent={<Icon name="logout" bgColor="#ffe66d"/>}
      />
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container:{
    marginVertical:20
  },
  screen:{
    backgroundColor:colors.lightGrey
  }
})

export default AccountScreen