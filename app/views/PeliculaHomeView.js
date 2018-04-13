import React, { Component } from 'react';
import {  View, Text, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default class PeliculaHomeView extends Component {

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state

    return {
      title: 'Listado Peliculas',
      headerRight: <Button title="Nuevo" onPress={() => null} />
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> PeliculaHomeView </Text>
      </View>
    );
  }
}
