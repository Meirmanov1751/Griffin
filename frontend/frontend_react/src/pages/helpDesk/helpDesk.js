import React from 'react';
import icon1 from '../../assets/img/icon1.png'
import HeaderContainer from "../../components/layout/header/helpDesk/header.container";
import {Outlet} from "react-router";
import {useEffect} from "react";
import {fetchReferenceType} from "../../store/action.creators/referenceType";
import {fetchBypassSheet} from "../../store/action.creators/bypassSheet";
import {useDispatch} from "react-redux";

const HelpDesk = () => {
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchReferenceType());
        dispatch(fetchBypassSheet());
    }, []);
    return (
        <div>
            <HeaderContainer/>
            <Outlet></Outlet>
        </div>
    );
};

export default HelpDesk;
