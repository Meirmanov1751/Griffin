import React from 'react';
import icon1 from '../../assets/img/icon1.png'
import HeaderContainer from "../../components/layout/header/helpDesk/header.container";
import {Outlet} from "react-router";

const HelpDesk = () => {

    return (
        <div>
            <HeaderContainer/>
            <Outlet></Outlet>
        </div>
    );
};

export default HelpDesk;
