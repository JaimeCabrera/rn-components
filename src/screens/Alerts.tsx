import React from 'react';
import {Button, View, Alert} from 'react-native';
import prompt from 'react-native-prompt-android';
import {HeaderTitle} from '../components/HeaderTitle';
import {globalStyles} from '../theme/appTheme';

export const Alerts = () => {
  const showAlert = () => {
    Alert.alert(
      'Titulo',
      'Alert content',
      [
        {
          text: 'Cancelar',
          style: 'default',
        },
        {
          text: 'Ok',
          style: 'cancel',
        },
      ],
      {
        // esyto para cancelar si le doy click
        cancelable: true,
      },
    );
  };
  // solo para ios para
  const showPrompt = () => {
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'numeric',
        cancelable: false,
        defaultValue: '',
        placeholder: 'placeholder',
      },
    );
    // Alert.prompt(
    //   'Titulo',
    //   'mensaje',
    //   (value: string) => console.log(`info: ${value}`),
    //   'secure-text',
    // );
  };

  return (
    <View style={globalStyles.container}>
      <HeaderTitle title="Alert" />
      <Button title="Mostrar Alerta" onPress={() => showAlert()} />
      <Button title="Mostrar Prompt" onPress={() => showPrompt()} />
    </View>
  );
};
