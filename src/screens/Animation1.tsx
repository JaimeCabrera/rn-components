import React from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

export const Animation1 = () => {
  const {fadeIn, fadeOut, opacity, position, startMotion} = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          transform: [
            {
              translateY: position,
            },
          ],
        }}
      />
      <Button
        title="fadeIn"
        onPress={() => {
          fadeIn();
          startMotion(-100, 700);
        }}
      />
      <Button title="fadeOut" onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: 'purple',
    width: 150,
    height: 150,
  },
});
