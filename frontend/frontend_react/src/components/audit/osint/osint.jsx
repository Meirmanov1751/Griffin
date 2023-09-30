import React from 'react';
import {Outlet} from "react-router";
import OsintHeader from "./header/header";
import './osint.css'

const Osint = () => {

    return (
        <div >
            <h1 className={"title"}>OSINT</h1>
            <OsintHeader/>
            <Outlet></Outlet>
        </div>
    );
};


export default Osint;