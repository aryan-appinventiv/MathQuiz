import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { images } from '../../assets/images'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const Navigation = useNavigation();
    useEffect(()=>{setTimeout(() => {
        Navigation.replace('Tutorial');
    }, 1500);},[])
  return (
    <View style={styles.container}>
      <Image source={images.splash} style={styles.splashImg} />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    splashImg:{
        width: 200,
        height: 200,
    },
})