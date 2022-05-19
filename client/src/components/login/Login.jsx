import { Paper, Typography } from '@mui/material'
import style from './login.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NavBar from '../navBar/NavBar';
import HeaderForms from '../headerForms/HeaderForm';

import { useState } from 'react';

const Login = () =>{

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
            let correcPass = e.target.value;
            correcPass.length < 6
            ? setErrorPassword("password must be min 6 characters")
            : setErrorPassword("")

        }
        
    }

    const ErrorPassword = () => {
        setErrorPassword("password must be min 6 characters")
    }

    return (
        <div className={style.container}>
           <section>
               <NavBar  className={style.navBar}/>
           </section>
           <section className={style.formContainer}>
           <Paper elevation={3} className={style.loginForm}>
               <section className={style.header}>
                <HeaderForms />
               </section>
                <Paper elevation={0} className={style.form}>
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
                    label={errorPassword ? errorPassword : "Password"}
                    variant="outlined"
                    color= {errorPassword ? "error" : "secondary"}
                    onChange={handleChange}
                    onBlur= {values.password.length < 6 && ErrorPassword}
                />
                <Typography className={style.required}>Required *</Typography>
                <Button 
                    className={style.btnSubmit} 
                    variant="contained"
                    disabled ={Object.values(values).includes("") || errorPassword}
                    >
                        SUBMIT
                </Button>
                <section className={style.links}>
                    <span>Forgot password</span>
                    <span>Sign In</span>
                </section>
                </Paper>
           </Paper>
           </section>
           
        </div>
    )
}

export default Login