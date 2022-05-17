import Logo from "../logo/Logo"
import style from "./navBar.module.css"


const NavBar = () => {

    return (
        <section className={style.navBarContainer}>
            <Logo />
        </section>
    )

}

export default NavBar