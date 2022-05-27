import Logo from "../logo/Logo"
import style from "./navBar.module.css"


const NavBar = () => {

    return (
        <section className={style.navBarContainer}>
            <section className={style.logo}>
            <Logo />
            </section>
        </section>
    )

}

export default NavBar