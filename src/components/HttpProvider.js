export const obtenerGifs = async(cat)=>{

    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(cat) }&limit=10&api_key=HH5OX3088IhxXoWl13cQncIkyQe2YbSu`;


    try {

        const resp = await fetch(apiUrl);

        if(!resp.ok)  throw 'Error API';
        
        const {data:gifs} = await resp.json();

        return gifs;
        
    } catch (error) {

        throw error;
        
    }

    

}