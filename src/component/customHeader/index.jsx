import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { images } from '../../assets/images'
import { useNavigation } from '@react-navigation/native'


const CustomHeader = ({title}) => {
    console.log("name",   title)
    const Navigation = useNavigation();
  return (
    <View style={styles.header}>
        <TouchableOpacity onPress={()=>Navigation.goBack()}>
        <Image source={images.user} style={styles.userImg} />
        </TouchableOpacity>
<Text style={styles.name}>Hello, {title}! </Text>
</View> 
  )
}

export default CustomHeader

const styles = StyleSheet.create({
    userImg: {
        width: 60,
        height: 60,
        borderRadius: 30,
        margin: 20,
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      name: {
        fontSize: 20,
        fontWeight: '700',
        color: '#F9C781',
      },
})