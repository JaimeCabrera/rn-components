import React, {useState} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {globalStyles} from '../theme/appTheme';

export const Modals = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={globalStyles.container}>
      <HeaderTitle title="Modals" />
      <Button title="Open Modal" onPress={() => setIsVisible(true)} />
      <Modal
        animationType="fade"
        visible={isVisible}
        style={styles.modal}
        transparent>
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text>Modal</Text>
            <Text>Cuerpo del modal</Text>
            <Button title="cerrar" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {},
  modalBackground: {
    backgroundColor: 'rgba(0,0,0,.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '80%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    elevation: 4,
  },
});
