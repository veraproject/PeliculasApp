import React, { Component } from 'react';
import {
  View, Text, StyleSheet,
  Button, FlatList, Image,
  TouchableOpacity
} from 'react-native';

import { dataTemporalPeliculas } from '../api/RestApi'

import Ionicon from 'react-native-vector-icons/Ionicons'

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

  renderItemPelicula(item, index) {
    //console.log(item + ' - ' +index)

    return (

      <View style={styles.itemContainer}>
        <View style={styles.itemImageTextContainer}>
          <Image style={styles.itemImage} source={item.logo} />
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemText} >{item.titulo}</Text>
            <Text style={styles.itemText} >{item.descripcion}</Text>
          </View>
        </View>

        <Ionicon name='ios-arrow-forward' size={25} />
      </View>
    )
  }

  renderItemSeparator() {
    return (
      <View style={styles.itemSeparatorContainer} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#ecf0f1'
  },
  itemContainer: {
    backgroundColor: 'white',
    height: 100,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemImageTextContainer: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  itemImage: {
    height: 80,
    width: 80
  },
  itemTextContainer: {
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
    height: 1
  },
})
