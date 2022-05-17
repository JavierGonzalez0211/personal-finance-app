import { Typography } from "@mui/material";
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import style from './headerForms.module.css'


const HeaderForms = () => {

    return (
        <section className={style.headerContainer}>
            <Typography  className={style.title}>
                LOGIN
            </Typography>
            <div className={style.iconContainer}>
                <PersonSharpIcon  className={style.icon}/>
            </div>
        </section>
    )

}

export default HeaderForms;