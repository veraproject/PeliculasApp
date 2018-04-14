import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    Image
} from 'react-native';

import { HeaderBackButton } from 'react-navigation'

export default class PeliculaDetalleView extends Component {
    // Personalizacion del Navigation
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state
        return {
            title: `Pelicula: ${params.item.titulo.toUpperCase()}`,
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack()} />
        }
    }

    // Metodo que dibuja la vista a mostrar al usuario
    render() {
        const { params } = this.props.navigation.state
        const { titulo, descripcion, logo } = params.item
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitleText}>Titulo:</Text>
                    <Text style={styles.inputText}>{titulo}</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitleText}>Descripción:</Text>
                    <Text style={styles.inputText}>{descripcion}</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={logo} />
                </View>
            </View>
        );
    }
}


// Constante que almacena los estilos usado en el componente
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    inputContainer: {
        margin: 15,
        height: 20,
    },
    inputTitleText: {
        fontSize: 16,
        fontWeight: 'bold',
        height: 20,
    },
    inputText: {
        height: 20,
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20
    },
    image: {
        height: 350,
        width: 300
    },
})
