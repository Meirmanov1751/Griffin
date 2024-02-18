import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import instance from "../../../../../store/api";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {Trans} from "react-i18next";


const OsintDoc = () => {
    const {id} = useParams();
    const [osint, setOsint] = useState({})


    const downloadPDF = (id) => {
        const capture = document.querySelector(`#actual-receipt${osint.id}`);
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 10, componentWidth, componentHeight);
            doc.save('receipt.pdf');
        })
    }

    useEffect(function () {
        UrlHandler()
    }, [])

    function UrlHandler() {
        instance.get('api/osint/osint/' + id + "/")
            .then(res => {
                setOsint(res.data);
            })
    }

    console.log(osint)
    return (
        <div className={"newStyle_background"} style={{padding: "5px 0"}}>
            <div className={"newStyle_container"}>
                <h2 className={"edit_h2"}><Link to={'/audit/OSINT/edit/' + osint.id}
                                                className={"edit_btn"}>Редактировать <i
                    className="fa fa-pencil-square-o" aria-hidden="true"></i></Link></h2>
                <div id={`actual-receipt${osint.id}`}>
                    <h1>Детали проекта</h1>
                    <div className="company-info">
                        <h2>Название организации: {osint.organizationName}</h2>
                        <p>Имя лица: {osint.personName}</p>
                        <p>Цели и задачи: {osint.goalsAndTasks}</p>
                        <p>Сбор данных: {osint.dataCollection}</p>
                        <p>Фильтрация и анализ данных: {osint.dataFilteringAndAnalysis}</p>
                        <p>Хранение данных: {osint.dataStorage}</p>
                        <p>URL: {osint.url}</p>
                    </div>

                    <div className="security-info">
                        <h2>Информация о безопасности</h2>
                        <p>Clickjacking: {osint.clickjacking ? "Да" : "Нет"}</p>
                        <p>CSRF: {osint.csrf ? "Да" : "Нет"}</p>
                        <p>SQL Injection: {osint.sql_injection ? "Да" : "Нет"}</p>
                        <p>XSS: {osint.xss ? "Да" : "Нет"}</p>
                    </div>
                </div>
                <button style={{fontSize: "13px"}} className={'btn btn-primary'} onClick={downloadPDF}><Trans
                    i18nKey="btns.PDF">
                    Скачать PDF
                </Trans></button>
            </div>
        </div>
    );
};


export default OsintDoc;