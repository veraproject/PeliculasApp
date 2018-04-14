
const urlListadoPelicula = `https://1nql88kfw5.execute-api.us-east-2.amazonaws.com/dev/listarpeliculas`
const urlEliminarPelicula = `https://1nql88kfw5.execute-api.us-east-2.amazonaws.com/dev/eliminarpelicula`
const urlAgregarPelicula = `https://1nql88kfw5.execute-api.us-east-2.amazonaws.com/dev/agregarpeliculav2`
const urlObtenerPelicula = `https://1nql88kfw5.execute-api.us-east-2.amazonaws.com/dev/detallepelicula`

const HeadersRestApi = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}

const TimeOutRestApi = 3000

export default class RestApi {

    getServiceAllPeliculas() {
        console.log('==> Ejecucion servicio listar peliculas')

        return fetch(urlListadoPelicula)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson
            })
            .catch((error) => {
                console.error(error);
            })
    }

}


export const dataTemporalPeliculas = [
    {
        estreno: true,
        id_pelicula: "a04967f5-ed89-4d0e-893d-8806d84e6d1d",
        descripcion: "Chichu chichu",
        titulo: "Coco",
        logo: require('../images/img-coco.jpg'),
        genero: "terror"
    },
    {
        estreno: true,
        id_pelicula: "4b4d21a0-102a-45fb-9d05-2c299c87babb",
        descripcion: "Jumanji",
        titulo: "Ya fue",
        logo: require('../images/img-jumanji.jpg'),
        genero: "Yaaaaa"
    },
    {
        estreno: true,
        id_pelicula: "0109bcd0-e85d-4af0-b76b-d620c9298f92",
        descripcion: "Solo sigo ordenees",
        titulo: "paulo",
        logo: require('../images/img-ole.jpg'),
        genero: "terror"
    },
    {
        "estreno": true,
        "id_pelicula": "c6595fb1-1801-47e9-ac41-e887a43305c2",
        "descripcion": "Pelicula 1",
        "titulo": "victor",
        "logo": require('../images/img-sinfoto.png'),
        "genero": "terror"
    }
]