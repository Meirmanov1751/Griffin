import React, {useEffect} from 'react';
import Project from "../../../components/audit/home/project/project";
import {useDispatch, useSelector} from "react-redux";
import {fetchCompany} from "../../../store/action.creators/company";

const AuditHome = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCompany());
    }, []);

    const company = useSelector(state => state.company)

    return (
        <div className={'newStyle_container'}>
            <div className={'home_audit'}>
                <img className={'home_logo'} src={company.items[0] && company.items[0].logo}/>
                <h1 className={'company_name'}>Название компании для аудита:
                    "<cite>{company.items[0] && company.items[0].name}</cite>"</h1>
                <cite className={'title-h2_r'}><p>Ведет тех поддержку:
                    "<cite>{company.items[0] && company.items[0].leader}</cite>"</p></cite>
            </div>

            <Project/>
        </div>
    );
};

export default AuditHome;
