import axios from "axios";

const GetMoviesRequest = () => {
    return {
        type: "GET_MOVIES_REQUEST",
    };
};

const GetMoviesSuccess = (data) => {
    return {
        type: "GET_MOVIES_SUCCESS",
        payload: data
    };
};

const GetMoviesError = (error) => {
    return {
        type: "GET_MOVIES_ERROR",
        payload: error
    };
};

export const GetMovies = () => {
    return (dispatch) => {
        dispatch(GetMoviesRequest())
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_URL_BE}/api/v1/movies/?page=1&limit=5`,
        }).then((res)=> { //ketika sukses, dispatch success
            dispatch(GetMoviesSuccess(res.data)) //trigger / dispatch
        }).catch((err)=> {
            console.log(err.response, "tes error")
            dispatch(GetMoviesError(err))
        })
    }
};

