import React, {useContext} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeContext} from '../context/theme/ThemeContext';
import {Home} from '../screens/Home';
import {Animation1} from '../screens/Animation1';
import {Animation2} from '../screens/Animation2';
import {Switchs} from '../screens/Switchs';
import {Alerts} from '../screens/Alerts';
import {TextInputs} from '../screens/TextInputs';
import {Refresh} from '../screens/Refresh';
import {SectionLists} from '../screens/SectionLists';
import {Modals} from '../screens/Modals';
import {InifiteScrolls} from '../screens/InifiteScrolls';
import {Slides} from '../screens/Slides';
import {ChangeTheme} from '../screens/ChangeTheme';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <View style={{backgroundColor: theme.colors.background, flex: 1}}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: {
              // backgroundColor: 'white',
            },
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Animation1" component={Animation1} />
          <Stack.Screen name="Animation2" component={Animation2} />
          <Stack.Screen name="Switchs" component={Switchs} />
          <Stack.Screen name="Alerts" component={Alerts} />
          <Stack.Screen name="TextInput" component={TextInputs} />
          <Stack.Screen name="Refresh" component={Refresh} />
          <Stack.Screen name="SectionLists" component={SectionLists} />
          <Stack.Screen name="Modals" component={Modals} />
          <Stack.Screen name="InfiniteScroll" component={InifiteScrolls} />
          <Stack.Screen name="Slides" component={Slides} />
          <Stack.Screen name="Theme" component={ChangeTheme} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
