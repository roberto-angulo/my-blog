import axios from 'axios';

const gettingData = dataToFetch => {
    const endpoint = `https://anguloroberto.com.ve/dev/wp-json/wp/v2/posts`;
    () => {
        axios.get(endpoint)
        .then( response => response.data )
        .catch( error => error );
    }
}

export default gettingData;