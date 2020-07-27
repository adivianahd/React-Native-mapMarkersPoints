import React from 'react';
import { StyleSheet, Text, View, Modal, Dimensions}   from 'react-native';


export default ( {children, visibility, onRequestClose} ) => {
    return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={visibility}
      onRequestClose={onRequestClose}
      >
      <View style={styles.center}>
        <View style={styles.modalView}>
          {children}
        </View>
      </View>
    </Modal>
    )
}

const styles = StyleSheet.create({
  center:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  modalView:{
    minWidth: Dimensions.get('window').width - 150,
    backgroundColor: "#fff",
    justifyContent: 'center',
		alignItems: 'center',
    padding:0,
    borderRadius: 4,
    shadowColor:'#f000',
    shadowOffset:{
      width: 0,
      height: 3,
    }

  },

});
