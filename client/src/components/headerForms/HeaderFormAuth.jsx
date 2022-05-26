import { Typography } from "@mui/material";
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import style from './headerFormsAuth.module.css'


const HeaderFormsAuth = ({headerTitle}) => {

    return (
        <section className={style.headerContainer}>
            <Typography  className={style.title}>
                {headerTitle}
            </Typography>
            <div className={style.iconContainer}>
                <PersonSharpIcon  className={style.icon}/>
            </div>
        </section>
    )

}

export default HeaderFormsAuth;