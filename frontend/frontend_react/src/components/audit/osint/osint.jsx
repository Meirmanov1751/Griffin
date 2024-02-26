import React from 'react';
import {Outlet} from "react-router";
import OsintHeader from "./header/header";
import './osint.css'

const Osint = () => {
    localStorage.setItem('osintNewId', '')

    return (
        <div className={"newStyle_container"}>
            <h1 className={"title"}>Разведка по открытым источникам (Open-source intelligence)</h1>
            <OsintHeader/>
            <Outlet></Outlet>
        </div>
    );
};


export default Osint;