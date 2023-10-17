import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import instance from "../../../../../store/api";


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
        <div className="company-container">
            <h1>Список компаний</h1>
            <div className="company-info">
                <h2>Название компании: {project.name}</h2>
                <p>Лидер: {project.leader}</p>
                <p>Дата создания: {project.created_at}</p>
                <p>Дата обновления: {project.updated_at}</p>
            </div>
            <div className="pentest-section">
                {
                    project && project.pentest && project.pentest.map((pentest) => (
                        <div className={"project_arr--item"}>
                            <Link to={`/audit/Pentest/pentest/${pentest.id}`}>
                                <h3 className={"project_h2"}>Pentest {pentest && pentest.id}</h3>
                                <p>Организация: {pentest && pentest.organizationName}</p>
                                <p>Лицо: {pentest && pentest.personName}</p>
                                <p>Цели и задачи: {pentest && pentest.goalsAndTasks}</p>
                                <p>Сбор данных: {pentest && pentest.dataCollection}</p>
                                <p>Фильтрация и анализ данных: {pentest && pentest.dataFilteringAndAnalysis}</p>
                                <p>Хранение данных: {pentest && pentest.dataStorage}</p>
                                <p>URL: {pentest && pentest.url}</p>
                            </Link>
                        </div>
                    ))
                }
            </div>

            <div className="osint-section">
                {
                    project && project.osints && project.osints.map((Osint) => (
                        <div className={"project_arr--item"}>
                            <Link to={`/audit/OSINT/osint/${Osint.id}`} className={"project_arr--item"}>
                                <h3>Osint {Osint && Osint.id}</h3>
                                <p>Организация: {Osint && Osint.organizationName}</p>
                                <p>Лицо: {Osint && Osint.personName}</p>
                                <p>Цели и задачи: {Osint && Osint.goalsAndTasks}</p>
                                <p>Сбор данных: {Osint && Osint.dataCollection}</p>
                                <p>Фильтрация и анализ данных: {Osint && Osint.dataFilteringAndAnalysis}</p>
                                <p>Хранение данных: {Osint && Osint.dataStorage}</p>
                                <p>URL: {Osint && Osint.url}</p>
                                <p>Информация: {Osint && Osint.info}</p>
                                <p>Открытые порты: {Osint && Osint.open_ports}</p>
                                <p>Проект: {Osint && Osint.project}</p>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};


export default ProjectItem;