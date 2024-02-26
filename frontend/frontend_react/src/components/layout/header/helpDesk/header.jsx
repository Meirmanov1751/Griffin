import React from 'react';
import './header.css'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import logo from "../../../../assets/img/img.png"
import LanguageSelector from "../../../../LanguageSelector";
import { Trans } from 'react-i18next';
import 'font-awesome/css/font-awesome.min.css';



const Header = (props) => {
    var user = useSelector(state => state.auth.user)
    var headerElemProduct = "";
    var headerElemOrder = "";

    if (user?.role) {
        headerElemProduct = user.role == 'super_admin' || user.role == 'executor' || user.role == 'auditor';
        headerElemOrder = user.role == 'super_admin' || user.role == 'customer' || user.role == 'auditor';
    }
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light">

                <div className="navbar-collapse" id="navbarNav">
                    <div className="container">
                        <div className="nav-cont-ul">
                            <div className="nav-cont-ul-logo">
                                <div>
                                    {
                                        user ?
                                            <Link className="navbar-brand" to="/">
                                                <img className="navbar-brand logo" src={logo}/>
                                            </Link> :
                                            <img className="navbar-brand logo" src={logo}/>
                                    }
                                </div>
                                <LanguageSelector/>
                                {
                                    user ?
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item">
                                                <Link className="nav-link" to="posts">
                                                    Жаналықтар
                                                </Link>
                                            </li>

                                            {headerElemProduct?
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="executors">
                                                        Орындаушылар
                                                    </Link>
                                                </li>:null}

                                            {headerElemOrder?
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="customers">
                                                        Тұтынушылар
                                                    </Link>
                                                </li>:null}

                                            <li className="nav-item">
                                                <Link className="nav-link" to="orders">
                                                    Тапсырыстар
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link className="nav-link" to="products">
                                                    Өнімдер
                                                </Link>
                                            </li>

                                            {
                                                user ?
                                                    headerElemOrder ?
                                                        <div style={{display: "flex"}}>
                                                            <li className="nav-item">
                                                                <Link className="nav-link" to="orders_create">
                                                                    Тапсырыс жасау
                                                                </Link>
                                                            </li>

                                                        </div>
                                                        : null
                                                    : null
                                            }
                                            {
                                                user ?
                                                    headerElemProduct ?
                                                        <div style={{display: "flex"}}>
                                                            <li className="nav-item">
                                                                <Link className="nav-link" to="products_create">
                                                                    Өнімді қосу
                                                                </Link>
                                                            </li>

                                                        </div>: null
                                                    : null
                                            }
                                        </ul> : null
                                }
                                {
                                    user ?
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item">
                                                <Link className="nav-link text-white" to="reference">
                                                    <Trans i18nKey="header.reference">
                                                        Справки
                                                    </Trans>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link className="nav-link text-white" to="bypassSheet">
                                                    <Trans i18nKey="header.bypassSheet">
                                                        Обходные листы
                                                    </Trans>
                                                </Link>
                                            </li>
                                        </ul> :
                                        null}
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

