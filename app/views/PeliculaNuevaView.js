import React, { Component } from 'react';
import {
  View, Text, TextInput,
  StyleSheet, TouchableOpacity, Switch
} from 'react-native';

import { HeaderBackButton } from 'react-navigation'

export default class PeliculaNuevaView extends Component {

  // Personalizacion del Navigation
  static navigationOptions = ({ navigation }) => ({
    title: 'Nueva Pelicula',
    headerLeft: <HeaderBackButton onPress={() => navigation.goBack()} />
  })

  // Constructor del componente
  constructor(props) {
    super(props);

    this.state = {
      inputTituloValue: '',
      inputDescripcionValue: '',
      inputGeneroValue: '',
      inputEstrenoValue: false,
      inputLogoValue: ''
    };
  }

  // Metodo que dibuja la vista a mostrar al usuario
  render() {
    // Obtencion de parametros a usarse en el componente
    const { goBack } = this.props.navigation
    
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Titulo:</Text>
          <TextInput
            style={styles.input}
            placeholder='Ingrese titulo'
            placeholderTextColor="#8E8E8E"
            onChangeText={text => this.setState({ inputTituloValue: text })}
            value={this.state.inputTituloValue}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Descripción:</Text>
          <TextInput
            style={styles.input}
            placeholder='Ingrese decripción'
            placeholderTextColor="#8E8E8E"
            onChangeText={text => this.setState({ inputDescripcionValue: text })}
            value={this.state.inputDescripcionValue}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Genero:</Text>
          <TextInput
            style={styles.input}
            placeholder='Ingrese genero'
            placeholderTextColor="#8E8E8E"
            onChangeText={text => this.setState({ inputGeneroValue: text })}
            value={this.state.inputGeneroValue}
          />
        </View>
        <View style={styles.inputSwitchContainer}>
          <Text style={styles.inputSwitchText}>Estreno:</Text>
          <Switch
            onValueChange={value => this.setState({ inputEstrenoValue: value })}
            value={this.state.inputEstrenoValue}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Logo:</Text>
          <TextInput
            style={styles.input}
            placeholder='Ingrese logo'
            placeholderTextColor="#8E8E8E"
            onChangeText={text => this.setState({ inputLogoValue: text })}
            value={this.state.inputLogoValue}
          />
        </View>
        <TouchableOpacity style={styles.submitButton}
                          onPress={() => goBack()}>
          <Text style={styles.submitButtonText}> Guardar </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// Constante que almacena los estilos usado en el componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputContainer: {
    margin: 15,
    height: 40,
  },
  inputText: {
    fontWeight: 'bold',
    height: 20,
  },
  input: {
    height: 35,
    padding: 10,
    borderColor: '#8E8E8E',
    borderWidth: 1,
    borderRadius: 5
  },
  submitButton: {
    backgroundColor: '#27ae60',
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  inputSwitchText: {
    fontWeight: 'bold',
    height: 20,
  },
  inputSwitchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 15,
    marginBottom: 0,
    height: 40,
  },
})