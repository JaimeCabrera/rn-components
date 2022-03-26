import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {HeaderTitle} from '../components/HeaderTitle';
import {ItemSeparator} from '../components/ItemSeparator';
import {menuItems} from '../Menu/MenuItems';
import {globalStyles} from '../theme/appTheme';

export const Home = () => {
  // hooks de navegacion

  return (
    <SafeAreaView>
      <View style={globalStyles.container}>
        <FlatList
          data={menuItems}
          renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
          keyExtractor={item => item.name}
          ListHeaderComponent={() => <HeaderTitle title="Opciones de Menu" />}
          ItemSeparatorComponent={() => <ItemSeparator />}
        />
      </View>
    </SafeAreaView>
  );
};
