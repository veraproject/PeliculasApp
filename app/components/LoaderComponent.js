import React, { Component } from 'react';
import {
    View, StyleSheet, Modal,
    ActivityIndicator
} from 'react-native';

const LoaderComponent = (props) => {
    // Obtencion de parametros a usar en el componente
    const { loading, ...attributes } = props;

    // Metodo que dibuja la vista a mostrar al usuario
    return (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={loading}
            onRequestClose={() => { console.log('close modal') }}>
            <View style={styles.modalBackground}>
                <ActivityIndicator
                    color='white'
                    size='large'
                    animating={loading} />
            </View>
        </Modal>
    )
}

// Constante que almacena los estilos usado en el componente
const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'
    },
    activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})

export default LoaderComponent