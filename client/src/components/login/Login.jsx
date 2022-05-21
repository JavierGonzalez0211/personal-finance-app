import { Paper, Typography } from '@mui/material'
import style from './login.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NavBar from '../navBar/NavBar';
import HeaderForms from '../headerForms/HeaderForm';
import loginUser from '../../actions/user/loginUser'

import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'

const Login = () =>{

    const dispatch = useDispatch();
    const isLoged = useSelector (state => state.isLoged)
    const loginError = useSelector (state => state.loginError)

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
                <HeaderForms />
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
                    label={errorPassword ? errorPassword : "Password"}
                    variant="outlined"
                    color= {errorPassword ? "error" : "secondary"}
                    onChange={handleChange}
                />
                <Typography className={style.required}>Required *</Typography>
                <Button 
                    className={style.btnSubmit} 
                    variant="contained"
                    disabled ={Object.values(values).includes("") || errorPassword !==""}
                    onClick = {submit}
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