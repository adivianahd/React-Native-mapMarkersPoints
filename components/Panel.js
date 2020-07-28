import React from 'react';
import { StyleSheet, TouchableOpacity, Text,  View, Dimensions} from 'react-native';

export default ({ onPressLeft, textLeft, togglePointsFilter }) => {
  return (
    <View style={styles.panel}>
      <TouchableOpacity style={styles.touchablePanelLista} onPress={onPressLeft}>
        <Text style={styles.text}>{textLeft}</Text>
        </TouchableOpacity>   
      <TouchableOpacity style={styles.touchablePanelMostrar} onPress={togglePointsFilter}>
        <Text style={styles.text} >Mostar/Ocultar</Text>
        </TouchableOpacity> 
    </View>
  )
}

const styles = StyleSheet.create({
    panel: {
      flex: 1,
      width: Dimensions.get('window').width,
      flexDirection: "row",
      alignItems: 'center',
      backgroundColor: '#D5F5F5',
    },
    touchablePanelLista: {
      flex:1,
      backgroundColor: '#71A8A7',
      padding: 20,
      borderRadius: 30, 
      alignItems: 'center',
    },
    touchablePanelMostrar:{
      flex: 3,
      backgroundColor: '#71A8A7',
      alignItems: 'center',
      padding: 20,
      borderRadius: 30, 
    },
    text: {
      fontSize: 16,
    },

});

