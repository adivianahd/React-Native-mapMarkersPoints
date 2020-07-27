import React, { useState } from 'react';
import { StyleSheet, FlatList, View, Text, TouchableOpacity, Dimensions} from 'react-native';

export default ({ puntos , onPressOcultarLista}) => {
	return(
		<View style={styles.list}>
			<FlatList 
			data={puntos.map(x => x.name)}
			renderItem={({item}) => <Text>{item}</Text>}
			keyExtractor= {item => item}
			/>
			<TouchableOpacity onPress={onPressOcultarLista}>
				<Text>Cerrar</Text>
			</TouchableOpacity>
		</View>
	)
};

const styles = StyleSheet.create({
  list:{
		justifyContent:"center",
		alignItems:'center',
		height: Dimensions.get('window').height - 400,
		width: Dimensions.get('window').width - 200,
  }
})
