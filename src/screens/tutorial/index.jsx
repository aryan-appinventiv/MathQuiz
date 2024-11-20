import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {images} from '../../assets/images';
import { useNavigation } from '@react-navigation/native';

const Tutorial = () => {
  const [name, setName] = useState('');
  const Navigation = useNavigation();
  const gotoHome=()=>{
    Navigation.navigate('Home',{name});
  }
  return (
    <View style={styles.container}>
        <View style={styles.header}>
      <Image source={images.tutorial} />
        </View>
      <View style={styles.secondCont}>
        <Text style={styles.text}>Ready for the Math Quiz? </Text>
        <TextInput
          placeholder="Enter your Name"
          style={styles.input}
          value={name}
          onChangeText={txt => setName(txt)}
        />
        {name.trim()? (<TouchableOpacity style={styles.button} onPress={gotoHome}>
          <Text style={styles.buttonText}>Let's Begin</Text>
        </TouchableOpacity>):(<TouchableOpacity style={[styles.button,{opacity:0.7}]} disabled>
          <Text style={styles.buttonText}>Let's Begin</Text>
        </TouchableOpacity>)}
        
      </View>
    </View>
  );
};

export default Tutorial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36588A',
  },
  secondCont: {
    flex: 2,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 20
  },
  input: {
    width: '100%',
    borderWidth: 1,
    backgroundColor: '#F9C781',
    textAlign: 'center',
    padding: 10,
    borderColor: '#F9C781',
    borderRadius: 10,
    marginTop: 20,
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
  },
  button: {
    width: '100%',
    backgroundColor: '#F9C781',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '600',
    letterSpacing: 1,
  },
  header:{
    flex:1,
    justifyContent:'flex-start',
  }
});
