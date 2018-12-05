import axios from 'axios';
// we'll need axios
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_GOOD = 'FETCH_DATA_GOOD';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';



// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const fetchData = () => {
    dispatch({ type: FETCH_DATA_START });
    axios
        .get('https://swapi.co/api/people/')
        .then(response => {
            dispatch({ type: FETCH_DATA_GOOD, payload: response.data. });
        })
        .catch(err => {
            dispatch({ tyype: FETCH_DATA_FAIL, payload: err });
        });
}