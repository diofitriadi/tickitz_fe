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

export const AuthRegister = (registerData) => {
    return (dispatch) => {
        dispatch(RegisterRequest())
        axios({
            method: "POST",
            url: "http://localhost:3000/api/v1/auth/register",
            data: {
                name : registerData.name , 
                email: registerData.email, 
                password: registerData.password, 
                image: registerData.image, 
                phone_number: registerData.phone_number
            }
        }).then((res)=> { //ketika sukses, dispatch success
            dispatch(RegisterSuccess(res.data)) //trigger / dispatch
        }).catch((err)=> {
            console.log(err.response, "tes error")
            dispatch(RegisterError(err))
        })
    }
};

