import { baseUrl } from '../shared/baseUrl';


export const fetchDetails = () => (dispatch) => {

    return fetch('http://localhost:3002/data')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(details => dispatch(Details(details)))
        .catch(error => console.log(error));
}

export const Details = (details) => ({
    payload: details
});
