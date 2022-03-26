import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {globalStyles} from '../theme/appTheme';

interface Props {
  title: string;
}

export const HeaderTitle = ({title}: Props) => {
  return (
    <View style={styles.renderItemTitle}>
      <Text style={globalStyles.title}>{title}</Text>
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
