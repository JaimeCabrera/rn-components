import React, {useContext, useState} from 'react';
import {RefreshControl, ScrollView, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {globalStyles} from '../theme/appTheme';
import {ThemeContext} from '../context/theme/ThemeContext';

export const Refresh = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('terminamos');
      setRefreshing(false);
      setData('hola mundo');
    }, 3500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressBackgroundColor={colors.text}
          colors={['blue', 'red', 'orange']}
        />
      }>
      <View style={globalStyles.container}>
        <HeaderTitle title="Pull to refresh" />
        <Text>{JSON.stringify(data)}</Text>
      </View>
    </ScrollView>
  );
};
