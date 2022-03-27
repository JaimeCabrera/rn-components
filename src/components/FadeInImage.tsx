import React, {useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';
interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}
export const FadeInImage = ({uri, style}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator
          style={styles.activityIndicator}
          color="cornflowerblue"
          size={30}
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => {
          fadeIn(100);
          setIsLoading(false);
        }}
        style={{...(style as any), opacity}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    position: 'absolute',
  },
  img: {
    width: '100%',
    height: 400,
  },
});
