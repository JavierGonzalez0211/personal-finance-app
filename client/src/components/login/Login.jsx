import { Paper, Typography } from '@mui/material'
import style from './login.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NavBar from '../navBar/NavBar';
import HeaderFormsAuth from '../headerForms/HeaderFormAuth';
import loginUser from '../../actions/user/loginUser'

import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';

// TODO: LINKS
const Login = () =>{

    const dispatch = useDispatch();
    const isLoged = useSelector (state => state.isLoged)
    const loginError = useSelector (state => state.loginError)
    const navitage = useNavigate()

    useEffect(() => {
      if (isLoged) {
        navitage ('/')
      }
    }, [isLoged])
    

    const [values, setValues] = useState({
        userName: "",
        password: "",
    })

    const [errorPassword, setErrorPassword] = useState("")

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

        if (e.target.name === "password") {
            let correctPass = e.target.value;
            correctPass.length < 6
            ? setErrorPassword("password must be min 6 characters")
            : setErrorPassword("")
        }
    };

    const submit = (e) => {
        e.preventDefault()
        dispatch ( loginUser(values))
    }

    return (
        <div className={style.container}>
           <section>
               <NavBar  className={style.navBar}/>
           </section>
           <section className={style.formContainer}>
           <Paper elevation={3} className={style.loginForm}>
               <section className={style.header}>
                <HeaderFormsAuth headerTitle="LOGIN" />
               </section>
                <Paper elevation={0} className={style.form}>
                   { loginError && <Typography className={style.errorMsg}>User or password invalid</Typography>}
                <TextField
                    name= "userName"
                    value= {values.userName}
                    className={style.fields}
                    required
                    label="User name"
                    variant="outlined"
                    color= "secondary"
                    onChange={handleChange}
                />
                <TextField
                    name= "password"
                    value= {values.password}
                    className={style.fields}
                    required
                    type="password"
                    label={"Password"}
                    // label={errorPassword ? errorPassword : "Password"}
                    variant="outlined"
                    color= {errorPassword ? "error" : "secondary"}
                    onChange={handleChange}
                />
                {errorPassword && <Typography className={style.errorPassword}>{errorPassword}</Typography>}
                <Button 
                    className={style.btnSubmit} 
                    variant="contained"
                    disabled ={Object.values(values).includes("") || errorPassword !==""}
                    onClick = {submit}
                    >
                        SUBMIT
                </Button>
                <section className={style.links}>
                    <Link to= "/forgot-password">Forgot password</Link>
                    <Link to= "/signin">Sign In</Link>
                </section>
                </Paper>
           </Paper>
           </section>
           
        </div>
    )
}

export default Login