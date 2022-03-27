import React, {useContext} from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import {ThemeContext} from '../context/theme/ThemeContext';
import {useAnimation} from '../hooks/useAnimation';

export const Animation1 = () => {
  const {fadeIn, fadeOut, opacity, position, startMotion} = useAnimation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          backgroundColor: colors.notification,
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
        color={colors.primary}
      />
      <Button title="fadeOut" onPress={fadeOut} color={colors.primary} />
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
    width: 150,
    height: 150,
  },
});
