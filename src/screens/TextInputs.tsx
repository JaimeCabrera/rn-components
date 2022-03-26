import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {CustomSwtch} from '../components/CustomSwtch';
import {HeaderTitle} from '../components/HeaderTitle';
import {useForm} from '../hooks/useForm';
import {globalStyles} from '../theme/appTheme';

export const TextInputs = () => {
  // const [form, setForm] = useState();
  const {form, onChange, isSubcribe} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubcribe: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={styles.scrollView}>
        <View style={globalStyles.container}>
          <HeaderTitle title="Text Inputs" />
          <TextInput
            style={styles.textInput}
            placeholder="Escribe tu nombre"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={value => onChange(value, 'name')}
          />
          <TextInput
            style={styles.textInput}
            autoCorrect={false}
            placeholder="Escribe tu email"
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={value => onChange(value, 'email')}
            keyboardAppearance="dark"
          />
          {/* ejemoploi */}
          <Text>Suscribirme</Text>
          <CustomSwtch
            isOn={isSubcribe}
            onChange={value => onChange(value, 'isSubcribe')}
          />
          <HeaderTitle title={JSON.stringify(form, null, 1)} />
          <HeaderTitle title={JSON.stringify(form, null, 1)} />

          <TextInput
            style={styles.textInput}
            keyboardType="phone-pad"
            placeholder="Escribe tu telefono"
            onChangeText={value => onChange(value, 'phone')}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 6,
    borderColor: 'rgba(93, 109, 126,.3)',
    marginVertical: 10,
  },
  scrollView: {
    marginBottom: 30,
    backgroundColor: 'transparent',
  },
});
