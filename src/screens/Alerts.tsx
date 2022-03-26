import React from 'react';
import {Button, View, Alert} from 'react-native';
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

  return (
    <View style={globalStyles.container}>
      <HeaderTitle title="Alert" />
      <Button title="Mostrar Alerta" onPress={() => showAlert()} />
    </View>
  );
};
