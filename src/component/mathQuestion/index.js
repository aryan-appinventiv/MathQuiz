import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const MathQuestion = ({ onSubmit, question, answer }) => {
  const [userAnswer, setUserAnswer] = useState('');

  const handleSubmit = () => {
    onSubmit(parseInt(userAnswer, 10) === answer);
    setUserAnswer('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question} ?</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={userAnswer}
        onChangeText={setUserAnswer}
        placeholder="Enter your answer"
       
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonTxt}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
  },
  questionText: {
    fontSize: 20,
    marginVertical: 10,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    marginVertical: 10,
    padding: 5,
    borderRadius: 5,
    textAlign:'center',
    backgroundColor:'#F9C781',
    borderColor: '#F9C781',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonTxt:{
    fontSize: 18,
    color: 'white',
    backgroundColor:'#7C0A02',
    padding: 10,
    borderRadius: 5,
    textAlign:'center',
  },
  button:{
    marginTop: 10,
  }
});

export default MathQuestion;