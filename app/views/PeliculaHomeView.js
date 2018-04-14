import React, { Component } from 'react';
import {
  View, Text, StyleSheet,
  Button, FlatList, Image,
  TouchableOpacity, TouchableWithoutFeedback, Alert
} from 'react-native';

import { dataTemporalPeliculas } from '../api/RestApi'

// Se importa componentes externos
import Ionicon from 'react-native-vector-icons/Ionicons'
import Swipeout from 'react-native-swipeout'

export default class PeliculaHomeView extends Component {

  // Personalizacion del Navigation
  static navigationOptions = ({ navigation }) => ({
    title: 'Listado Peliculas',
    headerRight: (
      <TouchableOpacity style={styles.addButton}
        onPress={() => navigation.navigate('PeliculaNueva')}>
        <Ionicon
          name='ios-add'
          size={30} />
      </TouchableOpacity>
    )
  })

  // Constructor del componente
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      activeRow: null
    }
  }

  componentDidMount() {
    this.setState({
      data: dataTemporalPeliculas
    })
  }

  // Metodo que dibuja la vista a mostrar al usuario
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item, index }) => this.renderItemPelicula(item, index)}
          ItemSeparatorComponent={() => this.renderItemSeparator()}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }

  // Metodo que dibuja una fila del listado
  renderItemPelicula(item, index) {
    //console.log(item + ' - ' +index)

    const { navigate } = this.props.navigation

    const swipeSettings = {
      autoClose: true,
      close: item.id_pelicula !== this.state.activeRow,
      onClose: (secId, rowId, direction) => this.onSwipeClose(item, rowId, direction),
      onOpen: (secId, rowId, direction) => this.onSwipeOpen(item, rowId, direction),
      right: [
        {
          text: 'Eliminar', type: 'delete',
          onPress: () => this.showMessageConfirmDelete(item, index)
        }
      ],
      cancelable: true,
      rowId: index,
      sectionId: 1
    }

    return (
      <View style={{ flex: 1 }}>
        <Swipeout {...swipeSettings} >
          <TouchableWithoutFeedback onPress={() => navigate('PeliculaDetalle', { item: item })}>
            <View style={styles.itemContainer}>
              <View style={styles.itemImageTextContainer}>
                <Image style={styles.itemImage} source={item.logo} />
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemText} >{item.titulo}</Text>
                  <Text style={styles.itemText} >{item.descripcion}</Text>
                </View>
              </View>

              <Ionicon
                name='ios-arrow-forward'
                size={25}
              />
            </View>
          </TouchableWithoutFeedback>
        </Swipeout>
      </View>
    )
  }

  // Metodo que dibuja el separador entre fila del listado
  renderItemSeparator() {
    return (
      <View style={styles.itemSeparatorContainer} />
    )
  }

  // Metodo que establece ativeRow = id_pelicula, cuando se abre swipe
  onSwipeOpen(item, rowId, direction) {
    this.setState({ activeRow: item.id_pelicula })
  }

  // Metodo que establece ativeRow = null, cuando se cierra swipe
  onSwipeClose(item, rowId, direction) {
    if (item.id_pelicula === this.state.activeRow &&
      typeof direction !== 'undefined') {
      this.setState({ activeRow: null })
    }
  }

  // Metodo que permite mostrar un mensaje de confirmacion, para la eliminacion de un item (Pelicula)
  showMessageConfirmDelete(item, index) {
    Alert.alert('Confirmación', '¿Esta seguro de eliminar esta pelicula?',
      [
        { text: 'No', onPress: null, style: 'cancel' },
        { text: 'Si', onPress: this.eliminarPelicula.bind(this, item, index) }
      ],
      { cancelable: true }
    )
  }

  eliminarPelicula(item, index) {
    console.log(item.id_pelicula)
  }

}

// Constante que almacena los estilos usado en el componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  itemContainer: {
    backgroundColor: 'white',
    height: 120,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemImageTextContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },
  itemImage: {
    height: 100,
    width: 80
  },
  itemTextContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  itemText: {
    paddingLeft: 10,
    fontSize: 15
  },
  addButton: {
    paddingRight: 10
  },
  itemSeparatorContainer: {
    flex: 1,
    height: 1,
    backgroundColor: '#8E8E8E',
  },
})
