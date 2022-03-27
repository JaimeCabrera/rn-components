import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../context/theme/ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';
import {MenuItem} from '../interface/interfaces';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  const {icon, name, component} = menuItem;
  // hook para los colores
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  // hook de navegacion
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigation.navigate(`${component}`)}>
      <View style={styles.container}>
        <View style={styles.menuItemRight}>
          <Icon name={icon} size={25} color={colors.primary} />
          <Text style={{...styles.menuItemText, color: colors.text}}>
            {name}
          </Text>
        </View>
        <View style={styles.menuItemLeft}>
          <Icon
            name="chevron-forward-outline"
            size={25}
            color={colors.primary}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuItemRight: {
    flexDirection: 'row',
  },
  menuItemText: {
    marginLeft: 10,
    fontSize: 20,
    color: 'cornflowerblue',
  },
  menuItemLeft: {},
});
