import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AuthRegister } from '../../redux/action/Register'
import './style.css'
import spiderman1 from './img/signup_spiderman.png'
import logoTickitz from './img/brandlogowhite.png'



const Register = () => {
    const {isRegister} = useSelector(state => state.register)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formAddRegister, setFormAddRegister] = useState({
        name: '',
        email: '',
        password: '',
        image: '',
        phone_number: ''
    })
    const handleRegister = (e) => {
        e.preventDefault()
        dispatch(AuthRegister(formAddRegister))
        // tambah kondisi loading, data, error 
        if(isRegister === true) {
            alert('Register Success')
            navigate('/', {replace: true})
        } else {
            navigate('/Registration', {replace: true})
            }
    }  
    return(
        <>
        <div className="container-signup">
            <div className="left-signup">
                <img src={spiderman1} alt=""/>
                <div className="brand-logo">
                    <img src={logoTickitz} alt=""/><span>wait, watch, wow!</span>
                </div>
            </div>
            <div className="right-signup">
            <form action="sign-up" onSubmit={(e)=> handleRegister(e)}>
                <h3>Sign Up</h3>
                <p>Fill your additional details</p>
				<div className="input-container">
                    <label htmlFor="name">Name</label>
                    <input type={'text'} name="name" id="name" placeholder="Write your first name" required onChange={(e) => {
                        setFormAddRegister((prevData) => ({
                            ...prevData,
                            name: e.target.value
                        }))
                    }}/>
                </div>
                <div className="input-container">
                    <label htmlFor="email">Email</label>
                    <input type={'email'} name="email" id="email" placeholder="Write your email" required onChange={(e) => {
                        setFormAddRegister((prevData) => ({
                            ...prevData,
                            email: e.target.value
                        }))
                    }}/>
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password</label>
                    <input type={'password'} name="password" id="password" placeholder="Write your password" icon="eye" required onChange={(e) => {
                        setFormAddRegister((prevData) => ({
                            ...prevData,
                            password: e.target.value
                        }))
                    }}/>
                </div>
                <div className="input-container">
                    <label htmlFor="image">Image</label>
                    <input type={'file'} name="image" id="image" placeholder="Insert Image Link" alt='' onChange={(e) => {
                        setFormAddRegister((prevData) => ({
                            ...prevData,
                            image: e.target.value
                        }))
                    }}/>
                </div>
                <div className="input-container">
                    <label htmlFor="phonenumber">Phone Number</label>
                    <input type={'text'} name="phone" id="phone" placeholder="Write your phone number" required onChange={(e) => {
                        setFormAddRegister((prevData) => ({
                            ...prevData,
                            phone_number: e.target.value
                        }))
                    }}/>
                </div>
                <input type="submit" name="signin" value="Register" onSubmit={(e)=> handleRegister(e)}/>
				<p className="text-center">Already have account ? <a href="/Login">Sign In</a></p>
            </form>
            </div>
        </div>
        </>
    )
}

export default Register