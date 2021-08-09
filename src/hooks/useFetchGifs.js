import { obtenerGifs } from "../components/HttpProvider";

export const useFetchGifs = ( category ) => {
    

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //Ejecuta la acción solamente la primera vez.
    // O cuando la categoría cambia.
    useEffect(() => {

        obtenerGifs( category )
                .then( imgs => {
                    setState({
                        data: imgs,
                        loading: false
                    })
                } );

    }, [category]);


    return state;

}
