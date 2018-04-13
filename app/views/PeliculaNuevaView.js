import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

export default class PeliculaNuevaView extends Component {

  // Personalizacion del Navigation
  static navigationOptions = ({ navigation }) => ({
    title: 'Nueva Pelicula'
  })

  // Metodo que dibuja la vista a mostrar al usuario
  render() {
    return (
      <View>
        <Text> PeliculaNuevaView </Text>
      </View>
    );
  }
}
