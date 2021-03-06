import React from 'react';
import { StyleSheet, View, Modal, Dimensions } from 'react-native';


export default ({ children, visibility, onRequestClose }) => {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={visibility}
      onRequestClose={onRequestClose}
      style={styles.modal}
    >
      <View style={styles.center}>
        <View style={styles.modalView}>
          {children}
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  modal: {
    borderRadius: 15,
  },
  modalView: {
    minWidth: Dimensions.get('window').width - 150,
    backgroundColor: "#fff",
    padding: 0,
    borderRadius: 15,
    shadowColor: '#f000',
    shadowOffset: {
      width: 0,
      height: 3,
    }

  },

});
