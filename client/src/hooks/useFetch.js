import { useLocalStorage } from './useLocalStorage';
import axios from 'axios';

export const useFetch = (url, initialValue) => {
    const [ response, setResponse ] = useLocalStorage('data', initialValue);

    if(!response){
        console.log('fetching data');
        axios.get(url)
        .then(res => {
            setResponse(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return response;

}