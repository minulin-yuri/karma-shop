import TopMenu from "../TopMenu";
import Logo from "./assets/logo.png";

import './style.scss';

export default function Navigation() {
    return (
        <nav className="navigation">
            <div className="container navigation__container">
                <div className="navigation__left">
                    <img src={Logo} alt="logo" className="navigation__logo" />
                    <h4 className="navigation__title">KARMA</h4>
                </div>
                <div className="navigation__right">
                    <TopMenu />
                </div>
            </div>
        </nav>
    )
}