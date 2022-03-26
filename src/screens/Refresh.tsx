import React, {useState} from 'react';
import {RefreshControl, ScrollView, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {globalStyles} from '../theme/appTheme';

export const Refresh = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('terminamos');
      setRefreshing(false);
      setData('hola mundoi');
    }, 3500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressBackgroundColor="white"
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
