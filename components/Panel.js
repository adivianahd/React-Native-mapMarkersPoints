import React from 'react';
import { StyleSheet, Button, View } from 'react-native';


export default () => {
  return (
    <View style={styles.panel}>
      <Button title='Lista' color='#ccc'/>
      <Button title='Mostar/Ocultar'/>
    </View>
  )
}

const styles = StyleSheet.create({
    panel:{
      flex: 1,
      width: "100%",
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: "space-around",
    },
  });
  
  