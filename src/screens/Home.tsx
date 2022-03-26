import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {HeaderTitle} from '../components/HeaderTitle';
import {menuItems} from '../Menu/MenuItems';
import {globalStyles} from '../theme/appTheme';

export const Home = () => {
  // hooks de navegacion

  const itemSeparator = () => {
    return <View style={styles.itemSeparator} />;
  };

  return (
    <SafeAreaView>
      <View style={globalStyles.container}>
        <FlatList
          data={menuItems}
          renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
          keyExtractor={item => item.name}
          ListHeaderComponent={() => <HeaderTitle title="Opciones de Menu" />}
          ItemSeparatorComponent={() => itemSeparator()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemSeparator: {
    borderBottomWidth: 1,
    opacity: 0.3,
    marginVertical: 5,
  },
});
