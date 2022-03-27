import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomSwtch} from '../components/CustomSwtch';
import {HeaderTitle} from '../components/HeaderTitle';
import {globalStyles} from '../theme/appTheme';
import {ThemeContext} from '../context/theme/ThemeContext';

export const Switchs = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const onChange = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value,
    });
  };
  // para qiue los estados concuerden con el del switchRow
  const {isActive, isHungry, isHappy} = state;

  return (
    <View style={globalStyles.container}>
      <HeaderTitle title="Shitches" />
      <View style={styles.switchRow}>
        <Text style={{...styles.switchTitle, color: colors.text}}>
          Is active
        </Text>
        <CustomSwtch
          onChange={value => onChange(value, 'isActive')}
          isOn={isActive}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={{...styles.switchTitle, color: colors.text}}>
          Is hugry
        </Text>
        <CustomSwtch
          onChange={value => onChange(value, 'isHungry')}
          isOn={isHungry}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={{...styles.switchTitle, color: colors.text}}>isHappy</Text>
        <CustomSwtch
          onChange={value => onChange(value, 'isHappy')}
          isOn={isHappy}
        />
      </View>

      <Text style={{...styles.switchTitle, color: colors.text}}>
        {JSON.stringify(state, null, 5)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  switchTitle: {
    fontSize: 25,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
