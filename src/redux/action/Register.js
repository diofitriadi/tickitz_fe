import axios from "axios";

const RegisterRequest = () => {
    return {
        type: "REGISTER_REQUEST"
    };
};

const RegisterSuccess = (data) => {
    return {
        type: "REGISTER_SUCCESS",
        payload: data
    };
};

const RegisterError = (error) => {
    return {
        type: "REGISTER_ERROR",
        payload: error
    };
};

export const AuthRegister = (formData) => {
    return (dispatch) => {
        dispatch(RegisterRequest())
        axios({
            method: "POST",
            url: `${process.env.REACT_APP_URL_BE}/api/v1/auth/register`,
            data: formData
        }).then((res)=> { //ketika sukses, dispatch success
            dispatch(RegisterSuccess(res.data)) //trigger / dispatch
        }).catch((err)=> {
            console.log(err.response.data, "tes error")
            dispatch(RegisterError(err.response.data))
        })
    }
};

