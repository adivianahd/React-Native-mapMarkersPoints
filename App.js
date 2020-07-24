import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Map, Modal, Panel, Input } from './components';


export default function App() {
  const [puntos, setPuntos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [puntoTemp, setPuntoTemp] = useState({});
  const [visibility, setVisibility] = useState(true);

  const handleLongPress = ({ nativeEvent }) => {
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
    const newPunto = { coodinate: puntoTemp, name: nombre };
    setPuntos(puntos.concat(newPunto))
    handleCloseModal()
    setNombre("")
  }

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} />
      <Modal
        visibility={visibility}
        onRequestClose={handleCloseModal}
      >
        <Input title="Ingrese el nombre" placeholder="Nombre del punto" onChangeText={handleChangeText} />
        <Button title="Aceptar" onPress={handleSubmit} />
      </Modal>
      <Panel />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
