import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";

const OsintHeader= () => {

    return (
        <div className={"continer-osint"}>
            <div className={"osint_header"}>
                <NavLink className={"osint_header-link"} to={'/audit/OSINT'} >Список</NavLink>
                <NavLink className={"osint_header-link"} to={'new'} >Создать новый отчет</NavLink>
            </div>
        </div>
    );
};


export default OsintHeader;