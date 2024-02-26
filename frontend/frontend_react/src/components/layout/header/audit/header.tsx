import React, {useRef} from 'react';
import classes from "./header.module.css";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

import instance from "../../../../store/api";


const HeaderAudit = () => {
    const [company, setCompany]:any = useState({})

    async function getCompanyInfo() {
        try {
            const response = await instance.get('api/company/company/');
            setCompany(response.data.results[0])
        } catch (e) {
        }
    }

    useEffect(() => {
        getCompanyInfo()
    }, [])
    var pentest:React.Ref<any> = useRef()
    var OSINT:React.Ref<any> = useRef()
    var home:React.Ref<any> = useRef()
    var user:any = useSelector((state:any) => state.auth.user)
    var headerElemProduct:any = "";
    var headerElemOrder:any = "";

    if (user?.role) {
        headerElemProduct = user.role == 'super_admin' || user.role == 'executor' || user.role == 'auditor';
        headerElemOrder = user.role == 'super_admin' || user.role == 'customer' || user.role == 'auditor';
    }


    return (
        <header className={classes.header}>
            <div>
                <div className={classes.header__inner}>
                    <div>
                        <NavLink to={'/audit'} ref={home} className={classes.header__btn}><img className={'header_logo'} src={company.logo}/></NavLink>
                        <NavLink to={'OSINT'} ref={OSINT} className={classes.header__btn}>Разведка</NavLink>
                        <NavLink to={'Pentest'} ref={pentest} className={classes.header__btn}>Проверка на проникновение</NavLink>
                        <NavLink to={'analytics'} ref={pentest} className={classes.header__btn}>Аналитика</NavLink>
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