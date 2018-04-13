import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default class PeliculaHomeView extends Component {

  // Personalizacion del Navigation
  static navigationOptions = ({ navigation }) => ({
    title: 'Listado Peliculas',
    headerRight: <Button title="Nuevo" onPress={() => navigation.navigate('PeliculaNueva')} />
  })

  // Metodo que dibuja la vista a mostrar al usuario
  render() {
    return (
      <View style={styles.container}>
        <Text> PeliculaHomeView </Text>
      </View>
    );
  }
}
