import React from 'react';

import { StackNavigator, HeaderBackButton } from 'react-navigation';

import PeliculaHomeView from '../views/PeliculaHomeView'
import PeliculaNuevaView from '../views/PeliculaNuevaView'
import PeliculaDetalleView from '../views/PeliculaDetalleView'

const Routers = StackNavigator({
    PeliculaHome: {
        screen: PeliculaHomeView
    },
    PeliculaNueva:{
        screen: PeliculaNuevaView
    },
    PeliculaDetalle:{
        screen: PeliculaDetalleView
    }
},
{
    initialRouteName: "PeliculaHome",
    //headerMode: "none",
})

export default Routers