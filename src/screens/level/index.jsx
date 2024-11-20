import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, { useState } from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {images} from '../../assets/images';
import CustomHeader from '../../component/customHeader';

const Level = () => {
  const [level, setLevel] = useState('');
  const route = useRoute();
  const {type, name} = route.params;
  console.log("type on level screen----->", type )
  const Navigation = useNavigation();
  const setState=(levelo)=>{
    setLevel(levelo);
  
  }
  const startTest=()=>{
    Navigation.navigate('QuizScreen', {level, type, name});
  }
  return (
    <View style={styles.container}>
     <CustomHeader title={name}/>
      <View style={styles.body}>
        <Text style={styles.description}>
          Please select the difficulty level from the menu below.
        </Text>
        <View style={styles.menu}>
        {level==='Easy'?(   <TouchableOpacity style={[styles.button,{opacity:0.6}]} onPress={()=>setState('Easy')}>
            <Text style={styles.buttonText}>Easy</Text>
          </TouchableOpacity>):(   <TouchableOpacity style={styles.button} onPress={()=>setState('Easy')}>
            <Text style={styles.buttonText}>Easy</Text>
          </TouchableOpacity>)}
          {level==='Medium'?(   <TouchableOpacity style={[styles.button,{opacity:0.6}]} onPress={()=>setState('Medium')}>
            <Text style={styles.buttonText}>Medium</Text>
          </TouchableOpacity>):(   <TouchableOpacity style={styles.button} onPress={()=>setState('Medium')}>
            <Text style={styles.buttonText}>Medium</Text>
          </TouchableOpacity>)}
          {level==='Difficult'?(   <TouchableOpacity style={[styles.button,{opacity:0.6}]} onPress={()=>setState('Difficult')}>
            <Text style={styles.buttonText}>Difficult</Text>
          </TouchableOpacity>):(   <TouchableOpacity style={styles.button} onPress={()=>setState('Difficult')}>
            <Text style={styles.buttonText}>Difficult</Text>
          </TouchableOpacity>)}
       
        </View>
        <View style={styles.start}>
            {level? (  <TouchableOpacity style={styles.startButton} onPress={startTest}>
            <Text style={styles.buttonText}>Start Test</Text>
          </TouchableOpacity>):(  <TouchableOpacity style={[styles.startButton,{opacity:0.8}]} onPress={startTest} disabled>
            <Text style={styles.buttonText}>Start Test</Text>
          </TouchableOpacity>)}
        
        </View> 
      </View>
    </View>
  );
};

export default Level;

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
  description: {
    fontSize: 20,
    color: 'white',
    marginVertical: 20,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: '#F9C781',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  startButton:{
    backgroundColor: '#811331',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  start:{
    flex:1,
    width: '100%',
    justifyContent:'center',
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '600',
    letterSpacing: 1,
  },
  menu:{
    width: '100%',
    marginTop: 50,
    gap: 30
  }
  
});
