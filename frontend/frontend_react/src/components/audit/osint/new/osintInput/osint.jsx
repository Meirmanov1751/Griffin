import React, {useEffect, useRef, useState} from 'react';
import load from '../../../../../assets/img/load.gif'
import instance from "../../../../../store/api";
import CommandConsole from "../../../../cmd kali linux/CommandConsole";
import Source from "./Source/source";
import {useParams} from "react-router-dom";



const OsintInput = () => {
    let {id} = useParams()
    localStorage.setItem('osintNewId', '')
    const [formData, setFormData] = useState({
        organizationName: '',
        project: 1,
        personName: '',
        goalsAndTasks: '',
        dataCollection: '',
        dataFilteringAndAnalysis: '',
        dataStorage: '',
        url: '',
    });
    const inputs = useRef(null);
    const [project, setProject] = useState([])

    async function getProject() {
        const response = await instance.get('api/project/project/');
        setProject(response.data.results)
    }

    async function getOsint() {
        try {
            const response = await instance.get('api/osint/osint/'+ id + '/');
            // Обработка успешного ответа от сервера
            setFormData(response.data)
            console.log(response.data);
        } catch (error) {
            // Обработка ошибок при отправке запроса
            console.error(error);
        }
    }

    useEffect(() => {
        if(id){
            getOsint()
        }
        getProject()
    }, [])


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const [data, setData] = useState("")
    const [loading, setLoading] = useState("")
    console.log(data)

    function UrlHandler() {
        setLoading("load")
        if (inputs.current) {

            instance.get('OSINT/?url=' + inputs.current.value)
                .then(res => {
                    setData(res);
                    setLoading("noload")
                })

        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await instance.post('api/osint/osint/', Object.assign({}, formData, data));
            debugger
            // Обработка успешного ответа от сервера
            console.log(response.data);
            localStorage.setItem('osintNewId', response.data.id)
        } catch (error) {
            // Обработка ошибок при отправке запроса
            console.error(error);
        }
        console.log(formData)
        console.log(data)
    };

    const [isConsoleVisible, setIsConsoleVisible] = useState(false);
    const [isDragAndDropVisible, setIsDragAndDropVisible] = useState(false);

    const toggleConsole = () => {
        setIsConsoleVisible(!isConsoleVisible);
        setIsDragAndDropVisible(false); // Скрыть другой компонент
    };

    const toggleDragAndDrop = () => {
        setIsDragAndDropVisible(!isDragAndDropVisible);
        setIsConsoleVisible(false); // Скрыть другой компонент
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            document: e.target.files[0],
        });
    };

    const [count, setCount] = useState(1);

    const handleAdd = () => {
        setCount(count + 1);
    };

    return (
        <div class="company-container">

            <form className={"form_pentest"} onSubmit={handleSubmit}>
                <div style={{margin: '0 auto'}}>
                    <input
                        className={"input"}
                        type={"search"}
                        name="url"
                        ref={inputs}
                        value={formData.url}
                        onChange={handleChange}
                        placeholder={"OSINT үшін URL мекенжайыңызды енгізіңіз"}
                    />
                    <a className={"submit--btn"} value={">"} onClick={UrlHandler}>
                        <i className="fa fa-terminal" aria-hidden="true"></i>
                    </a>

                    {loading == "load" ? <div className={"load"}>
                        <img src={load}/>
                        <p>Бұл бірнеше минут алуы мүмкін...</p>
                    </div> : null}

                    {data.data ? <div className={"osint_block"}>
                        <h3 className={"osint_subtitle"}>XSS:</h3>
                        {data.data.xss == 1 ? <p className={"osint_reject"}>Осалдық пайызы: 100% (ЖАМАН).....</p> :
                            <p className={"osint_sucess"}>Осалдық пайызы: 0% (ЖАҚСЫ).....</p>
                        }

                        <h3 className={"osint_subtitle"}>CSRF:</h3>
                        {data.data.csrf == 1 ? <p className={"osint_reject"}>Осалдық пайызы: 100% (ЖАМАН).....</p> :
                            <p className={"osint_sucess"}>Осалдық пайызы: 0% (ЖАҚСЫ).....</p>
                        }

                        <h3 className={"osint_subtitle"}>Clickjacking:</h3>
                        {data.data.clickjacking == 1 ?
                            <p className={"osint_reject"}>Осалдық пайызы: 100% (ЖАМАН).....</p> :
                            <p className={"osint_sucess"}>Осалдық пайызы: 0% (ЖАҚСЫ).....</p>
                        }

                        <h3 className={"osint_subtitle"}>SQL injection:</h3>
                        {data.data.sql_injection == 1 ?
                            <p className={"osint_reject"}>Осалдық пайызы: 100% (ЖАМАН).....</p> :
                            <p className={"osint_sucess"}>Осалдық пайызы: 0% (ЖАҚСЫ).....</p>
                        }

                        <h3 className={"osint_subtitle"}>Ашық порттар:</h3>
                        {data.data.open_ports ?
                            <p className={"osint_info_text"}>Әзірлеушілер осы сайттағы деректерге қол жеткізуді жабуды
                                ұмытып
                                кетті.
                                порттар:</p> :
                            <p className={"osint_info_text"}>Бұл сайтта әзірлеушілер порттарға кіруді жабуды
                                ұмытпады</p>}
                        {data.data.open_ports ?
                            data.data.open_ports.map((e) => {
                                return (
                                    <div>
                                        <div className={"osint_info_text"}>{JSON.stringify(e.text)}</div>
                                    </div>
                                )
                            })
                            : null}

                        <h3 className={"osint_subtitle"}>Info:</h3>
                        {data.data.info ?
                            <p className={"osint_info_text"}>Әзірлеушілер осы сайттағы деректерге қол жеткізуді жабуды
                                ұмытып
                                кетті.
                                файл:</p> :
                            <p className={"osint_info_text"}>Бұл сайтта әзірлеушілер файлға кіруге тыйым салуды
                                ұмытпады.
                                әзірлеу</p>}


                        {data.data.info ?
                            data.data.info.map((e) => {
                                return (
                                    <div>
                                        <h3 className={"info_subtitle"}>{JSON.stringify(e.name)}:</h3>
                                        <div className="code-block"><code>{JSON.stringify(e.text)}</code></div>
                                    </div>
                                )
                            })
                            : null}


                    </div> : <div style={{width: "75%", marginTop: "3%"}}></div>}
                    <h3 className={"osint_subtitle"}>Проект:</h3>
                    <select name="project" onChange={handleChange}>
                        {project.map((os) => (
                            <option key={os.id} value={os.id}>{os.name}</option>
                        ))}
                    </select>
                    <input
                        className={"Osint_input"}
                        type={"search"}
                        name="personName"
                        ref={inputs}
                        value={formData.personName}
                        onChange={handleChange}
                        placeholder={"ФИО человека, который делал заказ"}
                    />

                    <textarea
                        className={"Osint_textarea"}
                        type={"search"}
                        name="goalsAndTasks"
                        ref={inputs}
                        value={formData.goalsAndTasks}
                        onChange={handleChange}
                        placeholder={"Определение целей и задач"}
                    />

                    <textarea
                        className={"Osint_textarea"}
                        type={"search"}
                        name="dataCollection"
                        ref={inputs}
                        value={formData.dataCollection}
                        onChange={handleChange}
                        placeholder={"Сбор данных"}
                    />
                    <textarea
                        className={"Osint_textarea"}
                        type={"search"}
                        name="dataFilteringAndAnalysis"
                        ref={inputs}
                        value={formData.dataFilteringAndAnalysis}
                        onChange={handleChange}
                        placeholder={"Фильтрация и анализ"}
                    />

                    <textarea
                        className={"Osint_textarea"}
                        type={"search"}
                        name="dataStorage"
                        ref={inputs}
                        value={formData.dataStorage}
                        onChange={handleChange}
                        placeholder={"Сохранение данных"}
                    />


                    <button className={"btn_add--req"}>Создать отчет по Osint</button>

                    <div>
                        <h1>Компонент</h1>

                        {Array.from({ length: count }).map((_, index) => (
                            <Source key={index} />
                        ))}
                        <button className={"btn_add--add"} onClick={handleAdd}>Добавить ресурс  <i style={{color: "green"}} className="fa fa-plus"
                                                                                                 aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
                <details style={{position: 'fixed', bottom: '0', left: '0'}}
                         className={"details-terminal_osint form_osint--div"}>
                    <summary className={"summary-terminal"}>
                        <div onClick={toggleConsole}>
                            <div className="fa fa-window-maximize icon_terminal"
                                 aria-hidden="true"></div>
                            Инструменты
                        </div>
                        <div onClick={toggleConsole} className={"terminal_minimize"}>
                            <i className="fa fa-window-minimize" aria-hidden="true"></i>
                        </div>
                    </summary>
                    <div>
                        <div className="button_terminal--div">
                            <button className="button_terminal" onClick={toggleConsole}>
                                <div className="fa fa-terminal icon_terminal"
                                     aria-hidden="true"></div>
                                Терминал
                            </button>
                            <button className="button_terminal" onClick={toggleDragAndDrop}>
                                <div className="fa fa-download icon_terminal"
                                     aria-hidden="true"></div>
                                Загрузить документы
                            </button>
                        </div>

                        {isConsoleVisible && (
                            <div>
                                <CommandConsole/>
                            </div>
                        )}

                        {isDragAndDropVisible && (
                            <div>
                                <div className="upload-container">
                                    <label className="label-upload" htmlFor="fileInput">
                                        Выберите документ
                                    </label>
                                    <input type="file" accept=".pdf,.doc,.docx" id="fileInput"
                                           onChange={handleFileChange}/>
                                    <div>Перетащите или нажмите, чтобы загрузить</div>
                                </div>
                            </div>
                        )}
                    </div>
                </details>

            </form>


        </div>
    );
};


export default OsintInput;