import React, {useContext} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {globalStyles} from '../theme/appTheme';
import {ThemeContext} from '../context/theme/ThemeContext';

export const ChangeTheme = () => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={globalStyles.container}>
      <HeaderTitle title="Change Theme" />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={{...styles.btnChangeTheme, backgroundColor: colors.primary}}
          activeOpacity={0.8}
          onPress={() => setLightTheme()}>
          <Text style={styles.textBtn}>Light</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.btnChangeTheme, backgroundColor: colors.primary}}
          activeOpacity={0.8}
          onPress={() => setDarkTheme()}>
          <Text style={styles.textBtn}>Dark</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnChangeTheme: {
    justifyContent: 'center',
    width: 130,
    height: 40,
    borderRadius: 8,
  },
  textBtn: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});
