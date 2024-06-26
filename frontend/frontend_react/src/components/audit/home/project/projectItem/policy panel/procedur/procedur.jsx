import React from 'react';
import {useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import instance from "../../../../../../../store/api";
import Proceduritem from "./proceduritem";
import Source from "../../../../../osint/new/osintInput/Source/source";

const ProcedurPanel = () => {
    let {id} = useParams()

    const [project, setProject] = useState([])

    useEffect(function () {
        UrlHandler()
    }, [])

    function UrlHandler() {
        if(id) {
            instance.get('api/project/project/' + id + "/")
                .then(res => {

                    setProject(res.data);
                })
        }
    }
    const [count, setCount] = useState(1);

    const handleAdd = () => {
        setCount(count + 1);
    };
    return (
        <div>
            {
                project && project.procedure && project.procedure.map((item) => <Proceduritem projectId={project.id} id={item}/>)
            }
            { Array.from({length: count}).map((_, index) => (
                <Proceduritem projectId={project.id} key={index}/>
            ))}

            <button className={"btn_add--add"} onClick={handleAdd}>Добавить ресурс <i style={{color: "green"}}
                                                                                      className="fa fa-plus"
                                                                                      aria-hidden="true"></i>
            </button>
        </div>
    );
};

export default ProcedurPanel;