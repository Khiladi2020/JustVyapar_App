import React,{useState} from 'react'
import {View,Text,StyleSheet,FlatList} from 'react-native'

import AppScreen from '../components/AppScreen'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const initialMessages = [
  {
    id:1,
    title:'T1',
    description:'D1',
    image:require('../assets/logo-red.png')
  },
  {
    id:2,
    title:'T2',
    description:'D2',
    image:require('../assets/logo-red.png')
  },
  {
    id:3,
    title:'T3',
    description:'D3',
    image:require('../assets/logo-red.png')
  },
]

const MessagesScreen = ()=>{
  const [messages,setMessages] = useState(initialMessages)
  const [refreshing,setRefreshing] = useState(false)

  const handleDelete = (message)=>{
    setMessages(messages.filter((item)=> item.id!=message.id))
  }

  return(
    <AppScreen>
      <FlatList
        data={messages}
        keyExtractor={item=>item.id.toString()}
        renderItem={({item})=>(
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={()=>console.log('selected',item)}
            rightSwipeAction={()=> <ListItemDeleteAction onPress={()=>handleDelete(item)}/>}
          />)
        }
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={()=>{
          setMessages([
            {
              id:7,
              title:'Mamu',
              description:'lala',
              image:require('../assets/snack-icon.png')
            }
          ])
        }}
      />
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  swipe:{
    backgroundColor:'red',
    width:70
  }
})

export default MessagesScreen