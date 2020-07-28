import React from 'react';
import { StyleSheet, FlatList, View, Text, TouchableOpacity, Dimensions } from 'react-native';

export default ({ puntos, onPressSelectItem, onPressOcultarLista, selected }) => {
	return (
		<View style={styles.list}>
			<FlatList
				data={puntos.map(x => x.name)}
				renderItem={({ item }) =>
					<TouchableOpacity onPress={() => onPressSelectItem(item)}>
						<View
							style={item === selected ? styles.itemSelected : styles.item}
						>
							<Text>{item}</Text>
						</View>
					</TouchableOpacity>}
				keyExtractor={item => item}
			/>
			<TouchableOpacity style={styles.touchable} onPress={onPressOcultarLista}>
				<Text style={styles.text} >Cerrar</Text>
			</TouchableOpacity>
		</View>
	)
};

const styles = StyleSheet.create({

	list: {
		height: Dimensions.get('window').height - 400,
		alignItems: 'stretch',
		justifyContent: 'center',
		backgroundColor: '#D5F5F5',
		borderRadius: 15,
	},
	item: {
		borderBottomWidth: 1,
		borderColor: '#ccc',
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
	},
	itemSelected: {
		borderBottomWidth: 1,
		borderColor: '#ccc',
		backgroundColor: '#FFFAF7',
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
	},
	touchable: {
		padding: 15,
		borderRadius: 50,
		width: '50%',
		backgroundColor: '#71A8A7',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
	},
	text: {
		fontSize: 16,
	},
})
