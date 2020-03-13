import { useLocalStorage } from './useLocalStorage';
import axios from 'axios';
import { useEffect } from 'react';

export const useFetch = (url, initialValue) => {
    const [ response, setResponse ] = useLocalStorage('data', initialValue);

    useEffect(() => {
        if(!response){
            console.log('fetching data');
            // const ac = new AbortController();
            // fetch(url, {signal: ac.signal})
            axios.get(url)
            .then(res => {
                setResponse(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }, [response, url, setResponse])
    

    return response;

}