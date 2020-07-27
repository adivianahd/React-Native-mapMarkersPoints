import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Map, Modal, Panel, Input, Lista } from './components';


export default function App() {
  const [puntos, setPuntos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [mostrarLista, setMostrarLista] = useState('new_punto');
  const [puntoTemp, setPuntoTemp] = useState({});
  const [visibility, setVisibility] = useState(false);

  const handleLongPress = ({ nativeEvent }) => {
    setMostrarLista('new_punto')
    setPuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
  };

  const handleChangeText = text => {
    setNombre(text)
  };

  const handleCloseModal = () => {
    setVisibility(false)
  };

  const handleSubmit = () => {
    if(!nombre){
      return;
    }
    const newPunto = { coodinate: puntoTemp, name: nombre };
    setPuntos(puntos.concat(newPunto))
    handleCloseModal()
    setNombre("")
    
  };

  const handleCancelSubmit = () => {
    handleCloseModal()
    setNombre("")
  };

  const handleLista = () => {
    setMostrarLista('all_puntos')
    setVisibility(true)

  };

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} />
      <Modal
        visibility={visibility}
        onRequestClose={handleCloseModal}
      >
        { mostrarLista === "new_punto" ?
        <>
        <Input title="Ingrese el nombre" placeholder="Nombre del punto" onChangeText={handleChangeText} />
        <View style={styles.buttonsContainerModal}>
          <TouchableOpacity style={styles.button} disabled={!nombre} onPress={handleSubmit}>
            <Text>Aceptar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleCancelSubmit}>
            <Text>Cancelar</Text>
          </TouchableOpacity>
        </View>
        </> 
        : 
        <Lista puntos={puntos} onPressOcultarLista={handleCloseModal}/>
        }
      </Modal>
      <Panel onPressLeft={handleLista} textLeft={'Lista'} />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  button: {
    backgroundColor: "#ccc",
    padding: 5,
    borderRadius: 7,
  },

  buttonsContainerModal:{
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
  },

});
