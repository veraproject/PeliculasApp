import React from 'react';

import { StackNavigator, HeaderBackButton } from 'react-navigation';

import PeliculaHomeView from '../views/PeliculaHomeView'
import PeliculaNuevaView from '../views/PeliculaNuevaView'

const Routers = StackNavigator({
    PeliculaHome: {
        screen: PeliculaHomeView
    },
    PeliculaNueva:{
        screen: PeliculaNuevaView
    },
},
{
    initialRouteName: "PeliculaHome",
    //headerMode: "none",
})

export default Routers