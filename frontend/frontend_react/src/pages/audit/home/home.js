import React from 'react';
import instance from "../../../store/api";
import {useEffect} from "react";
import {useState} from "react";
import Project from "../../../components/audit/home/project/project";

const AuditHome = () => {
    const [company, setCompany] = useState({})

    async function getCompanyInfo(){
        const response = await  instance.get('api/company/company/');
        setCompany(response.data.results[0])
    }

    useEffect(() => {
        getCompanyInfo()
    }, [])

    return (
        <div>
            <div className={'home_audit'}>
                <img className={'home_logo'} src={company.logo}/>
                <h1 className={'company_name'}>Название компании для аудита: "<cite>{company.name}</cite>"</h1>
                <cite className={'title-h2'} ><p>Ведет тех поддержку: {company.leader}</p></cite>
            </div>

            <Project/>
        </div>
    );
};

export default AuditHome;
