// import React from 'react';
import { Paper, Typography } from '@mui/material'
import style from './login.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NavBar from '../navBar/NavBar';
import HeaderForms from '../headerForms/HeaderForm';


const Login = () =>{
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
                    className={style.fields}
                    required
                    label="User name"
                    variant="outlined"
                />
                <TextField
                    className={style.fields}
                    required
                    label="Password"
                    variant="outlined"
                />
                <Typography className={style.required}>Required *</Typography>
                <Button className={style.btnSubmit} variant="contained">SUBMIT</Button>
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