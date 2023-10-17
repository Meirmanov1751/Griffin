import React, {useEffect, useState} from 'react';
import instance from "../../../../store/api";
import {Link} from "react-router-dom";

const Project = () => {
    const [project, setProject] = useState([])

    async function getCompanyInfo() {
        const response = await instance.get('api/project/project/');
        setProject(response.data.results)
    }



    useEffect(() => {
        getCompanyInfo()
    }, [])

    return (
        <div>
            <h1 className={"project_title"}>Проекты компании:</h1>
            <div className={"project_card"}>
                {
                    project.map((proj) => (
                        <div className={'project_item'}>
                            <Link className={'title-h2'} to={'project/'+ proj.id}>
                                <h2>Название проета копании: "<cite>{proj.name}</cite>"</h2>
                                <p><cite>Ведет проект: {proj.leader}</cite></p>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Project;