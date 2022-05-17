import { Typography } from "@mui/material";
import style from "./logo.module.css"
import logoImg from "../../assets/checkmark.svg"



const Logo =() =>{
    return (
        <div className={style.logoContainer}>
            <div className={style.logoBox}>
                <Typography className={style.logo}>
                    finances<span className={style.app}>App</span>
                </Typography>
                <img src={logoImg} className={style.logoImg} alt="logo Image" />
            </div>
        </div>
    )

}

export default Logo