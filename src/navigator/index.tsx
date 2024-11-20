import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Splash from '../screens/splash';
import Tutorial from '../screens/tutorial';
import Level from '../screens/level';
import Test from '../screens/test.tsx';
import QuizScreen from '../screens/quiz/index.jsx';
import ResultScreen from '../screens/result/index.jsx';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tutorial"
          component={Tutorial}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Level"
          component={Level}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="Test"
          component={Test}
          options={{headerShown: false}}
        />
           <Stack.Screen
          name="QuizScreen"
          component={QuizScreen}
          options={{headerShown: false}}
        />
           <Stack.Screen
          name="ResultScreen"
          component={ResultScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
