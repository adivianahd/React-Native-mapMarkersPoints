import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Map, Modal, Panel, Input, Lista } from './components';


export default function App() {
  const [points, setPoints] = useState([]);
  const [name, setName] = useState("");
  const [selected, setSelected] = useState("");
  const [showList, setShowList] = useState('new_point');
  const [pointTemp, setPointTemp] = useState({});
  const [visibility, setVisibility] = useState(false);
  const [pointsFilter, setPointsFilter] = useState(true);

  const togglePointsFilter = () => setPointsFilter(!pointsFilter)

  const handleLongPress = ({ nativeEvent }) => {
    setShowList('new_point')
    setPointTemp(nativeEvent.coordinate)
    setVisibility(true)
  };

  const handleChangeText = text => {
    setName(text)
  };

  const handleCloseModal = () => {
    setVisibility(false)
  };

  const handleSubmit = () => {
    if (!name) {
      return;
    }
    const newPoint = { coordinate: pointTemp, name: name };
    setPoints(points.concat(newPoint))
    handleCloseModal()
    setName("")

  };

  const handleCancelSubmit = () => {
    handleCloseModal()
    setName("")
  };

  const handleLista = () => {
    setShowList('all_points')
    setVisibility(true)

  };

  const selectItem = (item) => {
    if (item === selected) {
      setVisibility(false)
      return setSelected("")
    }
    setSelected(item)
    setVisibility(false)
  }

  let pointsFiltrados = points;
  if (selected) {
    pointsFiltrados = points.filter(e => e.name == selected);
  }

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} points={pointsFiltrados} pointsFilter={pointsFilter} />
      <Modal
        visibility={visibility}
        onRequestClose={handleCloseModal}
      >
        {showList === "new_point" ?
          <View style={styles.form}>
            <Input title="Ingrese el nombre" placeholder="Nombre del punto" onChangeText={handleChangeText} />
            <View style={styles.buttonsContainerModal}>
              <TouchableOpacity style={styles.button} disabled={!name} onPress={handleSubmit}>
                <Text style={styles.text}>Aceptar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleCancelSubmit}>
                <Text style={styles.text}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
          :
          <Lista points={points} onPressOcultarLista={handleCloseModal} onPressSelectItem={selectItem} selected={selected} />
        }
      </Modal>
      <Panel onPressLeft={handleLista} textLeft={'Lista'} togglePointsFilter={togglePointsFilter} />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainerModal: {
    flexDirection: "row",
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#71A8A7',
    padding: 8,
    borderRadius: 7,
    marginTop: 20,
  },
  form: {
    padding: 40,
    backgroundColor: '#D5F5F5',
    borderRadius: 15,
  },
  text: {
    fontSize: 16,
  },
});
