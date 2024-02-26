import React, {useEffect, useState} from 'react';
import {Link, NavLink, useParams} from 'react-router-dom';
import instance from "../../../../../store/api";
import {Outlet} from "react-router";


const ProjectItem = () => {
    const {id} = useParams();

    const [project, setProject] = useState([])

    useEffect(function () {
        UrlHandler()
    }, [])

    function UrlHandler() {
        instance.get('api/project/project/' + id + "/")
            .then(res => {
                setProject(res.data);
            })
    }

    return (
        <div>
            <div className={'newStyle_container '}>
                <div className="company-info">
                    <h2 className={'title-h1'}>Название компании: "<cite>{project.name}</cite>"</h2>
                    <p>Лидер: {project.leader}</p>
                    <p>Дата создания: {project.created_at}</p>
                    <p>Дата обновления: {project.updated_at}</p>
                </div>
                <header className="header d-flex justify-content-between border-bottom">
                    <div className="navbar navbar-expand-lg navbar-light ">
                        <div className="navbar-collapse">
                            <div className="navbar-nav w-100 ml-auto d-flex justify-content-around">
                                <NavLink to={'policy'} style={{padding: '0 20px'}}
                                         className="nav-link project_outlet_btn text-white">Политика
                                    безопасности</NavLink>
                                <NavLink to={'standard'} style={{padding: '0 20px'}}
                                         className="nav-link project_outlet_btn text-white">Стандарты</NavLink>
                                <NavLink to={'procedur'} style={{padding: '0 20px'}}
                                         className="nav-link project_outlet_btn text-white">Процедуры</NavLink>
                                <NavLink to={'schedule'} style={{padding: '0 20px'}}
                                         className="nav-link project_outlet_btn text-white">Расписание
                                    аудитов</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="navbar navbar-expand-lg navbar-light bg-white">
                        <div className="navbar-collapse">
                            <NavLink to={'/audit/policy_panel/' + id} className="nav-link project_outlet_btn text-black"
                                     style={{padding: '0 20px'}}><i
                                className="fa fa-cogs" aria-hidden="true"></i> Понель политики</NavLink>
                        </div>
                    </div>
                </header>
                <div className={"newStyle_background border"}>
                    <div className={"project_outlet"}>
                        <Outlet/>
                    </div>

                </div>
            </div>
            <div className={'newStyle_container '}>
                <h1 className={'title'}>ПРОВЕРКИ НА ПРОНИКНОВЕНИЕ:</h1>
                <div className="pentest-section">

                    {
                        project && project.pentest && project.pentest.map((pentest) => (
                            <div className={"project_arr--item"}>
                                <Link to={`/audit/Pentest/pentest/${pentest.id}`}>
                                    <h3 className={"project_h2"}>ПРОВЕРКА НА ПРОНИКНОВЕНИЕ: {pentest && pentest.id}</h3>
                                    <p className={"project_p"}>Спец название: {pentest && pentest.organizationName}</p>
                               </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={'newStyle_container '}>
                <h1 className={'title'}>РАЗВЕДКИ ПО ОТКРЫТЫМ ИСТОЧНИКАМ (OPEN-SOURCE INTELLIGENCE):</h1>
                <div className="osint-section">

                    {
                        project && project.osints && project.osints.map((Osint) => (
                            <div className={"project_arr--item"} >
                                <Link to={`/audit/OSINT/osint/${Osint.id}`} >
                                    <h3 className={"project_h2"}>РАЗВЕДКА: {Osint && Osint.id}</h3>
                                    <p className={"project_p"}>Спец название: {Osint && Osint.organizationName}</p>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};


export default ProjectItem;