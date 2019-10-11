import definitions from '../actions/definitions';
import axios from 'axios';

const dataUrl = './public/data.json';

const getData = url => dispatch => {
    dispatch({ type: definitions.GET_DATA });
    axios.get(dataUrl)
        .then(
            response =>
                dispatch(getDataSuccess(response.data))
        ).catch(
            error => dispatch(getDataError(error))
        )
};

const getDataSuccess = data => ({
    data,
    type: definitions.GET_DATA_SUCCESS
});

const getDataError = data => ({
    data,
    type: definitions.GET_DATA_ERROR
});


export {
    getData,
    getDataSuccess,
    getDataError,

}