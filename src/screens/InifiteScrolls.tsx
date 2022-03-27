import React, {useState} from 'react';
import {View, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import {FadeInImage} from '../components/FadeInImage';
import {HeaderTitle} from '../components/HeaderTitle';
// import {globalStyles} from '../theme/appTheme';

export const InifiteScrolls = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const renderItem = (item: number) => {
    return (
      // <Image
      //   source={{uri: `https://picsum.photos/id/${item}/500/400`}}
      //   style={styles.image}
      // />
      <FadeInImage
        style={styles.img}
        uri={`https://picsum.photos/id/${item}/500/400`}
      />
    );
  };

  const loadMore = () => {
    const newArr: number[] = [];

    for (let i = 0; i < 5; i++) {
      newArr[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArr]);
    }, 1500);
  };
  return (
    <View style={styles.container}>
      {/* <HeaderTitle title="Infinite Scroll" /> */}
      <FlatList
        data={numbers}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => item.toString()}
        ListHeaderComponent={() => <HeaderTitle title="Infinite Scroll" />}
        onEndReached={() => loadMore()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => {
          return (
            <View style={styles.activityIndicator}>
              <ActivityIndicator size={40} color="cornflowerblu" />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'cornflowerblue',
  },
  testItem: {
    // backgroundColor: 'green',
    height: 150,
  },
  image: {
    width: '100%',
    height: 400,
  },
  activityIndicator: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  img: {
    width: '100%',
    height: 400,
    borderRadius: 4,
  },
});
