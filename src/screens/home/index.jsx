import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import {images} from '../../assets/images';
import {useNavigation, useRoute} from '@react-navigation/native';
import CustomHeader from '../../component/customHeader';

const Home = () => {

  const route = useRoute();
  const {name} = route.params;

  const Navigation = useNavigation();
  const gotoLevel=(type)=>{
    Navigation.navigate('Level',{type, name});
    console.log("type---->", type);
  }
  
  return (
    <View style={styles.container}>
     <CustomHeader title={name}/>
      <View style={styles.body}>
        <Text style={styles.title}>Welcome to our app!</Text>
        <Text style={styles.description}>
          Please select an option from the menu below.
        </Text>
        <View style={styles.menu}>
          <View style={styles.firstMenu}>
            <TouchableOpacity style={styles.buttonCont} onPress={()=>gotoLevel('+')}>
              <Text style={styles.button}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonCont} onPress={()=>gotoLevel('-')}>
              <Text style={styles.button}>-</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.secondMenu}>
            <TouchableOpacity style={styles.buttonCont} onPress={()=>gotoLevel('*')}>
              <Text style={styles.button}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonCont} onPress={()=>gotoLevel('/')}>
              <Text style={styles.button}>/</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36588A',
    paddingTop: 50,
  },

  body: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: 'white',
    letterSpacing: 1,
  },
  description: {
    fontSize: 18,
    color: 'white',
    marginVertical: 20,
  },
  firstMenu:{
    flexDirection:'row',
    gap: 50,
    marginVertical: 30,
  },
  secondMenu:{
    flexDirection:'row',
    gap: 50,
  },
  buttonCont:{
    backgroundColor: '#F9C781',
    borderRadius: 50,
    justifyContent:'center',
    alignItems:'center',
    width: 100,
    height: 100,
  },
  button:{
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  menu:{
    flex:1,
    marginTop: 80,
  },
});
