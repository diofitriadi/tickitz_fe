import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthLogin } from "../../redux/action/Auth";
import "./style.css";
import brandLogo from "../Registration/img/brandlogowhite.png";
import spiderman from "../Registration/img/signup_spiderman.png";

const Login = () => {
  const { loading, data, error, isLogin } = useSelector((state) => state.auth);    

  const [disable, setDisable] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [formAddData, setFormAddData] = useState({
    email: "",
    password: "",
  });
  
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(AuthLogin(formAddData));
  }
  // tambah kondisi loading, data, error  
  useEffect(()=> {
    if (loading === true) {
      setDisable(true)
    }
    if (isLogin === true) {
      if(data.role === "user") {
        alert("Login Success");
        setDisable(false)
        navigate("/", { replace: true });
      } else if (data.role === "admin") {
        alert("Login Success")
        setDisable(false)
        navigate("/dashboard", {replace: true})
      } 
    } else if (error) {
      alert("username or password is wrong")
      setDisable(false)
    } 
  },[data, loading, error])
  return (
    <>
      <div className="container-login">
        <div className="left-login">
          <img src={spiderman} alt="" />
          <div className="brand-logo">
            <img src={brandLogo} alt="" />
            <span>wait, watch, wow!</span>
          </div>
        </div>
        <div className="right-login">
          <div className="sign-in">
            <form onSubmit={(e) => handleLogin(e)}>
              <h3>Sign In</h3>
              <p className="login-paragraph">
                Sign in with your data that you entered <br/>during your registration
              </p>
              <div className="input-container">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Write your email"
                  className="input-style"
                  required
                  onChange={(e) => {
                    setFormAddData((prevData) => ({
                      ...prevData,
                      email: e.target.value,
                    }));
                  }}
                />
              </div>
              <div className="input-container">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Write your password"
                  className="input-style"
                  required
                  onChange={(e) => {
                    setFormAddData((prevData) => ({
                      ...prevData,
                      password: e.target.value,
                    }));
                  }}
                  icon="eye"
                />
              </div>
              {disable ? 
              <input 
                type="submit"
                name="signin"
                value="Sign In"
                onSubmit={(e) => handleLogin(e)}
                style={{opacity: 0.5, backgroundColor: '#fff'}}
                disabled
              /> : 
              <input
                type="submit"
                name="signin"
                value="Sign In"
                onSubmit={(e) => handleLogin(e)}
              />}
              <p className="text-center">
                Forgot your password ?
                <a href="reset_password.html">Reset Now</a>
              </p>
              <p className="text-center">
                Don't have an account ? <a href="/registration">Sign Up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;

// const [userLogin, setUserLogin] = useState(JSON.parse(localStorage.getItem('userLogin'))??{})
// useEffect(()=>{
//     if(userLogin.isLogin === true) {
//         navigate('/', {replace: true})
//     } else {
//         navigate('/login', {replace: true})
//     }
// },[userLogin])
// const handleLogin = async (e)  => {
//     e.preventDefault()
//     try {
//         const result = await axios({
//             method: "POST",
//             data: formAddData,
//             url: "${process.env.REACT_APP_URL_BE}/api/v1/auth/login"
//         })
//         localStorage.setItem('token', result.data.token)
//         localStorage.setItem("userLogin", JSON.stringify(result.data)) //v2 recomended
//         setUserLogin((prevData) => ({
//             ...prevData,
//             isLogin: true,
//             data: result.data
//         }))
//         console.log(userLogin)
//     } catch (error) {
//         console.log(error.response.message)
//     }
// }
