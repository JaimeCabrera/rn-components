import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {globalStyles} from '../theme/appTheme';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Props {
  title: string;
}

export const HeaderTitle = ({title}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={styles.renderItemTitle}>
      <Text style={{...globalStyles.title, color: colors.text}}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  renderItemTitle: {
    marginBottom: 20,
  },
  itemSeparator: {
    borderBottomWidth: 1,
    opacity: 0.3,
    marginVertical: 5,
  },
});
