import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home';
import {Animation1} from '../screens/Animation1';
import {Animation2} from '../screens/Animation2';
import {Switchs} from '../screens/Switchs';
import {Alerts} from '../screens/Alerts';
import {TextInputs} from '../screens/TextInputs';
import {Refresh} from '../screens/Refresh';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Animation1" component={Animation1} />
      <Stack.Screen name="Animation2" component={Animation2} />
      <Stack.Screen name="Switchs" component={Switchs} />
      <Stack.Screen name="Alerts" component={Alerts} />
      <Stack.Screen name="TextInput" component={TextInputs} />
      <Stack.Screen name="Refresh" component={Refresh} />
    </Stack.Navigator>
  );
};
