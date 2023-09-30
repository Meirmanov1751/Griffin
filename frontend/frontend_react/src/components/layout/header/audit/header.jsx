import React, {useRef} from 'react';
import classes from "./header.module.css";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";


const HeaderAudit = () => {
    var pentest = useRef()
    var OSINT = useRef()
    var home = useRef()
    var user = useSelector(state => state.auth.user)
    var headerElemProduct = "";
    var headerElemOrder = "";

    if (user?.role) {
        headerElemProduct = user.role == 'super_admin' || user.role == 'executor' || user.role == 'auditor';
        headerElemOrder = user.role == 'super_admin' || user.role == 'customer' || user.role == 'auditor';
    }


    return (
        <header className={classes.header}>
            <div    >
                <div className={classes.header__inner}>
                    <div>
                        <NavLink to={'/audit'} ref={home} className={classes.header__btn}>Негізгі</NavLink>
                        <NavLink to={'OSINT'} ref={OSINT} className={classes.header__btn}>OSINT</NavLink>
                        <NavLink to={'Pentest'} ref={pentest} className={classes.header__btn}>Пентест</NavLink>
                    </div>
                    <div>
                        <NavLink to={'docs'} ref={pentest} className={classes.header__btn}>Документация <i
                            className="fa fa-info-circle" aria-hidden="true"></i></NavLink>
                        <NavLink to={'/HelpDesk'} ref={pentest} className={classes.header__btn}>  HelpDesk <i
                            className="fa fa-tty" aria-hidden="true"></i></NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderAudit;