import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ResultScreen = ({route}) => {
  const {score, name} = route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <View style={styles.resultContainer}>
        <Text style={styles.headerText}>Quiz Complete!</Text>
        <Text style={styles.scoreText}>Your Score: {score}</Text>
        {score>2? (<Text style={styles.pass}>Congratulations! You passes this test.🥳👑</Text>):(<Text style={styles.fail}>Better luck next time.🥱🤤</Text>)}

        <TouchableOpacity onPress={() => navigation.replace('Home', {name})}>
            <Text style={styles.button}>Restart</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#36588A',
    paddingTop: 50,
    backgroundColor: '#fff',
    justifyContent:'center',
  },
  headerText: {
    fontSize: 24,
    marginBottom: 20,
    color: '#000',
    fontWeight: 'bold',

  },
  scoreText: {
    fontSize: 20,
    marginBottom: 30,
    color: '#F9C781',
    fontWeight: '700',
  },
  resultContainer:{
    paddingHorizontal: 20,
    alignItems:'center',
  },
  button:{
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: 5,
    width: 150,
    textAlign: 'center',
    marginVertical: 20,
  },
  pass:{
    fontSize: 18,
    color: 'green',
    fontWeight: '700',
  },
  fail:{
    fontSize: 18,
    color: 'red',
    fontWeight: '700',
  }
});

export default ResultScreen;
