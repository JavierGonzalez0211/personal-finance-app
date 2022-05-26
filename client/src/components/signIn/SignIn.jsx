import style from './signIn.module.css'
import { Paper, TextField, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import NavBar from '../navBar/NavBar';
import HeaderFormsAuth from '../headerForms/HeaderFormAuth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import SignInAction from '../../actions/user/signIn';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const signInError = useSelector (state => state.signInError);

    //states of errors
    const [errors, setErrors] = useState({
        errorEmail: false,
        errorPassword: false,
        errorRepeatPassword: false,
        messageError: "",
    })

        //state of inputs values
        const [values, setValues] = useState({
            userName: "",
            email: "",
            password: "",
            repeatPassword: "",
        });

    useEffect(() => {
        //check if sign In was refuse
        if (signInError.state) {
            setErrors({
                ...errors,
                messageError:signInError.message
                })
        }

    }, [signInError])
    
    const handleChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

        //checking email 
        if (e.target.name === 'email') {
            let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if  (!regexEmail.test(e.target.value)) {
                setErrors({
                    ...errors,
                    errorEmail: true,
                })
            } else {
                setErrors({
                    ...errors,
                    errorEmail:false,
                })
            }
        }

        //checking if password is min 6 char
        if (e.target.name === "password" ) {
            let checkPass = e.target.value;
            if (checkPass.length < 6) {
                setErrors({
                    ...errors,
                    errorPassword: true,
                })
            }else {
                setErrors({
                    ...errors,
                    errorPassword: false,
                })
            } 
        }

        //check if repeat password match password
        if (e.target.name === "repeatPassword" ) {
            if (values.password !== e.target.value) {
                setErrors({
                    ...errors,
                    errorRepeatPassword: true,
                })
            }else {
                setErrors({
                    ...errors,
                    errorRepeatPassword: false,
                })
            }
        }
    };

    const submit = async (e) => {
        e.preventDefault();
        const resp = await dispatch(SignInAction(values));

        if (resp === "success") {
            navigate ("/login")
        };
    };

    return (
        <div className={style.container}>
            <section>
                <NavBar  className={style.navBar}/>
            </section>
            <section className={style.formContainer}>
                <Paper elevation={3} className={style.loginForm}>
                    <section className={style.header}>
                        <HeaderFormsAuth headerTitle="SIGN IN" />
                    </section>
                    <Paper elevation={0} className={style.form}>
                        <Typography className={style.errorMsg}>
                            {errors.messageError}
                        </Typography>

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
                            name= "email"
                            value= {values.email}
                            className={style.fields}
                            required
                            label="email"
                            variant="outlined"
                            color= {errors.errorEmail ? "error" : "secondary"}
                            onChange={handleChange}
                            type= "email"
                        />
                        {errors.errorEmail && 
                        <Typography className={style.errorMsgFields}>
                        Email address is not valid
                        </Typography>}

                        <TextField
                            name= "password"
                            value= {values.password}
                            className={style.fields}
                            required
                            type="password"
                            label="Password"
                            variant="outlined"
                            color= {errors.errorPassword ? "error" : "secondary"}
                            onChange={handleChange}
                        />
                        {errors.errorPassword && 
                        <Typography className={style.errorMsgFields}>
                        Password must has min 6 characters
                        </Typography>}

                        <TextField
                            name= "repeatPassword"
                            value= {values.repeatPassword}
                            className={style.fields}
                            required
                            type="password"
                            label="Repeat Password"
                            variant="outlined"
                            color= {errors.errorRepeatPassword ? "error" : "secondary"}
                            onChange={handleChange}
                        />
                        {errors.errorRepeatPassword && 
                        <Typography className={style.errorMsgFields}>
                        Password and Repeat password are differents
                        </Typography>}

                        <Typography className={style.required}>Required *</Typography>

                        <Button 
                            className={style.btnSubmit} 
                            variant="contained"
                            disabled ={Object.values(values).includes("") || Object.values(errors).includes(true)}
                            onClick = {submit}
                            >
                                SUBMIT
                        </Button>
                    </Paper>
                </Paper>
           </section>
        </div>
    )
};

export default SignIn
