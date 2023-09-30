import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {useSelector} from "react-redux";
import axios from "axios";
import instance from "../../../../../store/api";


// clickjacking
//     :
//     false
// csrf
//     :
//     false
// dataCollection
//     :
//     ""
// dataFilteringAndAnalysis
//     :
//     ""
// dataStorage
//     :
//     ""
// goalsAndTasks
//     :
//     ""
// id
//     :
//     7
// info
//     :
//     null
// open_ports
//     :
//     null
// organizationName
//     :
//     "Забытые ботинки. Король и Шут"
// personName
//     :
//     "erg"
// sql_injection
//     :
//     false
// url
//     :
//     ""
// xss
//     :
//     false

const OsintDoc= () => {
    const { id } = useParams();
    const [osint, setOsint] = useState({})

    useEffect(function (){
        UrlHandler()
    },[])

    function UrlHandler() {


            instance.get('http://localhost:8000/api/osint/osint/' + id +"/")
                .then(res => {
                    setOsint(res.data);
                })



    }
    console.log(osint)
    return (
        <div className={"continer"}>
            <h1 className={"title"}>{osint.id}</h1>
            <h1 className={"title"}>{osint.organizationName}</h1>
            <h1 className={"title"}>{osint.dataFilteringAndAnalysis}</h1>
            <h1 className={"title"}>{osint.personName}</h1>
        </div>
    );
};


export default OsintDoc;