import { Text, View , Button} from 'react-native'
import React, { Component } from 'react'
import { Link } from 'expo-router'
import { ThemedText } from '@/components/ThemedText'

export class index extends Component {
  render() {
    return (
     <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems:'center'
     }}>
       <ThemedText type="subtitle">Welcome to my mobile App</ThemedText>
       
     </View>
      
    )
  }
}

export default index