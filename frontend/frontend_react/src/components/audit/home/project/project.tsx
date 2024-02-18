import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchProject} from "../../../../store/action.creators/project";

const Project = () => {
    const dispatch: any = useDispatch();
    const dispacthProject = async () => dispatch(fetchProject());

    useEffect(() => {
        dispacthProject
    }, []);

    const project: any = useSelector((state: any) => state.projects)


    return (
        <div>

            <div className={"project_card"}>
                <h1 className={"project_title"}>Проекты компании:</h1>
                {
                    project && project.items.map((proj: any) => (
                        <div className={'project_item'}>
                            <Link style={{display: 'flex'}} className={'title-h2'} to={'project/' + proj.id}>
                                <div className={'project_logo'}>
                                    <img className={'project_logo'} src={proj.logo}/>
                                </div>
                                <div>
                                    <h4>Название проета копании: "<cite>{proj.name}</cite>"</h4>
                                    <p><cite>Ведет проект: {proj.leader}</cite></p>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Project;