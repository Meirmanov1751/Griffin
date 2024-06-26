import React from 'react';
import classes from "./header.module.css";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {logout} from "../../../store/action.creators/auth";
import {Trans} from "react-i18next";

const LoginHeader = (props: any) => {
    var user = useSelector((state: any) => state.auth.user)
    var dispatch: any = useDispatch()
    let navigate = useNavigate();

    function logoutHandler() {
        dispatch(logout())
        navigate("/login");
    }

    if (user) {
        return (
            <li className="nav-item">
                <a className="nav-link" onClick={logoutHandler}>
                    <Trans i18nKey="header.exit">
                        Выход
                    </Trans>
                </a>
            </li>
        )
    } else {
        return (
            <li className="nav-item">
                <Link className="nav-link" to="login">
                    <Trans i18nKey="header.login">
                        Вход
                    </Trans>
                </Link>
            </li>
        )
    }
}


const Header = () => {
    var user: any = useSelector((state: any) => state.auth.user)


    return (
        <header className={classes.header}>
            <div>
                <div className={classes.header__inner}>
                    <div>
                        <ul className="navbar-nav ml-auto desplay_felx_au">
                            <LoginHeader user={user}/>
                            <span style={{
                                height: "14px",
                                margin: "7px 7px",
                                width: "1px",
                                backgroundColor: "#555"
                            }}></span>

                            <li className="nav-item user_circl-il"
                                style={{maxWidth: "100%", marginRight: "10px", overflow: "hidden"}}>
                                <div className="nav-link">
                                    {
                                        user ? `${user.first_name} ${user.last_name} (${user.role})` : null
                                    }
                                </div>
                                {
                                    user ?
                                        <Link className="user_circl" to={"profile"}>
                                            <div className="fa fa-user-circle" aria-hidden="true"></div>
                                        </Link>
                                        : null}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;