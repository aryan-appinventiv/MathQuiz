// import React, {useState} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import MathQuestion from '../../component/mathQuestion';
// import {useNavigation, useRoute} from '@react-navigation/native';
// import CustomHeader from '../../component/customHeader';

// const QuizScreen = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const {level, type, name} = route.params;

//   const [score, setScore] = useState(0);
//   const [currentQuestion, setCurrentQuestion] = useState(1);

//   const maxQuestions = 5;

//   const getNumberRange = level => {
//     switch (level) {
//       case 'Easy':
//         return [1, 10];
//       case 'Medium':
//         return [10, 50];
//       case 'Difficult':
//         return [50, 100];
//       default:
//         return [1, 10];
//     }
//   };

//   const generateQuestion = () => {
//     const [min, max] = getNumberRange(level);
//     const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
//     const num2 = Math.floor(Math.random() * (max - min + 1)) + min;

//     let question = '';
//     let answer = 0;

//     switch (type) {
//       case '+':
//         question = `${num1} + ${num2}`;
//         answer = num1 + num2;
//         break;
//       case '-':
//         question = `${num1} - ${num2}`;
//         answer = num1 - num2;
//         break;
//       case '*':
//         question = `${num1} * ${num2}`;
//         answer = num1 * num2;
//         break;
//       case '/':
//         const divisor = num2 === 0 ? 1 : num2;
//         question = `${num1} ÷ ${divisor}`;
//         answer = Math.floor(num1 / divisor);
//         break;
//       default:
//         question = `${num1} + ${num2}`;
//         answer = num1 + num2;
//     }

//     return {question, answer};
//   };

//   const [currentMath, setCurrentMath] = useState(generateQuestion());

//   const handleAnswer = isCorrect => {
//     if (isCorrect) setScore(score + 1);

//     if (currentQuestion === maxQuestions) {
//       navigation.replace('ResultScreen', {score, name});
//     } else {
//       setCurrentQuestion(currentQuestion + 1);
//       setCurrentMath(generateQuestion());
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <CustomHeader title={name} />
//       <View style={styles.questionContainer}>
//         <Text style={styles.headerText}>
//           Question {currentQuestion} of {maxQuestions}
//         </Text>
//         <MathQuestion
//           question={currentMath.question}
//           answer={currentMath.answer}
//           onSubmit={handleAnswer}
//         />
//       </View>

//       <Text style={styles.scoreText}>Score: {score}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#36588A',
//     paddingTop: 50,
//   },
//   headerText: {
//     fontSize: 18,
//     marginVertical: 20,
//     textAlign: 'center',
//     color: 'gray',
//   },
//   scoreText: {
//     marginTop: 20,
//     fontSize: 18,
//     backgroundColor:'white',
//     textAlign:'center',
//     marginHorizontal: 20,
//   borderRadius: 10,
//   padding: 10,
//   fontWeight: '700',
//   },
//   questionContainer:{
//     padding: 20,
//     backgroundColor: '#F7F7F7',
//     borderRadius: 10,
//     marginHorizontal: 20,
//     marginTop: 20,
//   }
// });

// export default QuizScreen;






import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MathQuestion from '../../component/mathQuestion';
import { useNavigation, useRoute } from '@react-navigation/native';
import CustomHeader from '../../component/customHeader';

const QuizScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { level, type, name } = route.params;

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [remainingTime, setRemainingTime] = useState(15); // Timer state

  const maxQuestions = 5;

  const getNumberRange = (level) => {
    switch (level) {
      case 'Easy':
        return [1, 10];
      case 'Medium':
        return [10, 50];
      case 'Difficult':
        return [50, 100];
      default:
        return [1, 10];
    }
  };

  const generateQuestion = () => {
    const [min, max] = getNumberRange(level);
    const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const num2 = Math.floor(Math.random() * (max - min + 1)) + min;

    let question = '';
    let answer = 0;

    switch (type) {
      case '+':
        question = `${num1} + ${num2}`;
        answer = num1 + num2;
        break;
      case '-':
        question = `${num1} - ${num2}`;
        answer = num1 - num2;
        break;
      case '*':
        question = `${num1} * ${num2}`;
        answer = num1 * num2;
        break;
      case '/':
        const divisor = num2 === 0 ? 1 : num2;
        question = `${num1} ÷ ${divisor}`;
        answer = Math.floor(num1 / divisor);
        break;
      default:
        question = `${num1} + ${num2}`;
        answer = num1 + num2;
    }

    return { question, answer };
  };

  const [currentMath, setCurrentMath] = useState(generateQuestion());

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);

    if (currentQuestion === maxQuestions) {
      navigation.replace('ResultScreen', { score, name });
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setCurrentMath(generateQuestion());
      setRemainingTime(15); 
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleAnswer(false); 
          return 15; 
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion]); 

  return (
    <View style={styles.container}>
      <CustomHeader title={name} />
      <View style={styles.questionContainer}>
        <Text style={styles.headerText}>
          Question {currentQuestion} of {maxQuestions}
        </Text>
        <MathQuestion
          question={currentMath.question}
          answer={currentMath.answer}
          onSubmit={handleAnswer}
        />
        <Text style={styles.timerText}>Time Remaining: {remainingTime}s</Text>
      </View>

      <Text style={styles.scoreText}>Score: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36588A',
    paddingTop: 50,
  },
  headerText: {
    fontSize: 18,
    marginVertical: 20,
    textAlign: 'center',
    color: 'gray',
  },
  scoreText: {
 marginTop: 20,
    fontSize: 18,
    backgroundColor: 'white',
    textAlign: 'center',
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 10,
    fontWeight: '700',
  },
  questionContainer: {
    padding: 20,
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
  },
  timerText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'red',
    marginTop: 10,
  },
});

export default QuizScreen;