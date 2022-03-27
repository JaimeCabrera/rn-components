import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {
  Dimensions,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../context/theme/ThemeContext';

const {width: Windowwidth} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

export const Slides = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigation = useNavigation<any>();
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const renderItem = (item: Slide) => {
    return (
      <View
        style={{...styles.slideContainer, backgroundColor: colors.background}}>
        <Image source={item.img} style={styles.slideImg} />
        <Text style={{...styles.slideTitle, color: colors.primary}}>
          {item.title}
        </Text>
        <Text style={{...styles.slideDesc, color: colors.text}}>
          {item.desc}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{...styles.container, backgroundColor: colors.background}}>
      <Carousel
        data={items}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={Windowwidth}
        itemWidth={Windowwidth}
        layout="default"
        onSnapToItem={index => setActiveSlide(index)}
      />
      <View style={styles.paginationContainer}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeSlide}
          dotStyle={{
            width: 10,
            borderRadius: 10,
            backgroundColor: colors.primary,
          }}
        />
        {activeSlide === items.length - 1 && (
          <TouchableOpacity
            style={{...styles.btn, backgroundColor: colors.primary}}
            activeOpacity={0.6}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.btnText}>Entrar</Text>
            <Icon name="chevron-forward-outline" color="white" size={20} />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  slideContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 40,
    justifyContent: 'center',
  },
  slideImg: {
    width: 350,
    height: 400,
    resizeMode: 'center',
  },
  slideTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  slideDesc: {
    fontSize: 16,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',

    width: 100,
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
    color: 'white',
  },
});
