import definitions from '../actions/definitions';

const initialState = {
    header: {
        title: ""
    },
    article: "",
    contentUrl: "",
    playStateLabels: {

    }
}

const createDataReducer = () => ({
    [definitions.GET_DATA_SUCCESS]: getDataSuccess,
    [definitions.GET_DATA_ERROR]: getDataError,
})

const getDataSuccess = (state, data) => {
    const { article,
        header,
        contentUrl,
        playStateLabels,
    } = data
    return {
        ...state,
        article,
        header,
        contentUrl,
        playStateLabels
    }
}

const getDataError = (state, action) => (
    {
        ...state
    })

const reducers = createDataReducer();

const data = (state = initialState, action) =>
    (action.type in reducers) ? reducers[action.type](state, action.data) : state;

export {
    data as default,
    getDataSuccess,
}