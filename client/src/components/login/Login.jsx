import { Paper } from '@mui/material'
import style from './login.module.css'
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Login = () =>{
    return (
        <div className={style.container}>
           <section className={style.logo}>
               <p>MY FINANCES APP!</p>
               <p>Logo will be here</p>
           </section>
           <section className={style.formContainer}>
           <Paper elevation={3} className={style.loginForm}>
               <h2 className={style.title}>LOGIN</h2>
                <div className={style.iconContainer}>
                    <PersonSharpIcon  className={style.icon}/>
                </div>
                <hr />
                <Paper elevation={0} className={style.form}>
                <TextField
                    className={style.fields}
                    required
                    label="User name"
                    helperText="Required"
                    variant="outlined"
                />
                <TextField
                    required
                    label="Password"
                    helperText="Required"
                    variant="outlined"
                />
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