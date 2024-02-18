import React, {useEffect, useRef, useState} from 'react';
import load from '../../../../../assets/img/load-old.gif'
import instance from "../../../../../store/api";
import CommandConsole from "../../../../cmd kali linux/CommandConsole";
import {useParams} from "react-router-dom";
import Source from "./Source/source";
import Whois from "./tests/whois/whois";
import Lookup from "./tests/lookup/lookup";


const OsintInput = () => {
    let {id} = useParams()

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
            const response = await instance.get('api/osint/osint/' + id + '/');
            // Обработка успешного ответа от сервера
            setFormData(response.data)
            setActivePt(true)
            localStorage.setItem('osintNewId', id)
            console.log(response.data);
        } catch (error) {
            // Обработка ошибок при отправке запроса
            console.error(error);
        }
    }

    useEffect(() => {
        if (id) {
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

    const [activePt, setActivePt] = useState(false)
    const [adding, setAdding] = useState(false)
    const handleSubmit = async (e) => {
        setAdding(true)
        e.preventDefault();
        if (!id && !localStorage.getItem('osintNewId')) {
            try {
                const response = await instance.post('api/osint/osint/', Object.assign({}, formData, data));
                localStorage.setItem('osintNewId', response.data.id)
                console.log(localStorage.getItem('osintNewId'));
                setActivePt(true)
                setAdding(false)
            } catch (error) {
                console.error(error);
            }
        } else {
            try {
                let result = id ? id : localStorage.getItem('osintNewId')
                const response = await instance.put('api/osint/osint/' + result + '/', Object.assign({}, formData, data));
                localStorage.setItem('osintNewId', response.data.id)
                setAdding(false)
            } catch (error) {
                console.error(error);
            }
        }
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
        <div className={adding ? 'adding' : null}>

            <details className={'details-main'}>
                <summary className={'summary-main'}>
                    Google Dorks <i className="fa fa-google" aria-hidden="true"></i> - это набор запросов для выявления
                    грубейших дыр в безопасности.
                </summary>
                <pre style={{textAlign: 'left'}}>
            site: - Позволяет ограничить поиск результатами только с определенного веб-сайта. Например, site:example.com
                ищет информацию только на сайте example.com.
            <hr/>
            filetype: - Используется для поиска файлов определенного типа. Например, filetype:pdf найдет все PDF-файлы в
                результатах поиска.
            <hr/>
            intext: - Используется для поиска страниц, содержащих определенное слово или фразу. Например,
                intext:"confidential" site:example.com ищет страницы на сайте example.com, содержащие слово "confidential".
            <hr/>
            intitle: - Используется для поиска страниц с определенным заголовком. Например, intitle:"login page"
                ищет страницы с заголовком "login page".
            <hr/>
            inurl: - Используется для поиска страниц с определенным URL. Например, inurl:admin ищет страницы, в URL
                которых есть "admin".
            <hr/>
            related: - Позволяет найти веб-сайты, связанные с определенным сайтом. Например, related:example.com найдет
                сайты, связанные с example.com.
            <hr/>
            cache: - Позволяет просмотреть кэшированную версию веб-страницы. Например, cache:example.com покажет
                кэшированные страницы с сайта example.com.
            <hr/>
            ext: - Используется для поиска страниц с определенным расширением файла. Например, ext:php ищет страницы с
                PHP-расширением.
            <hr/>
            info: - Используется для получения информации о веб-сайте. Например, info:example.com покажет информацию о
                сайте example.com.
            <hr/>
            file: - Позволяет искать конкретные файлы на веб-серверах. Например, file:passwords.txt может помочь найти
                файл с паролями.
             <hr/>
                    ext: - Используется для поиска страниц с определенным расширением файла. Например, ext:php ищет страницы с PHP-расширением.
            <hr/>
            allinurl: - Используется для поиска страниц, в URL которых встречаются все указанные слова или фразы. Например, allinurl:security breach найдет страницы, где в URL встречаются оба эти слова.
            <hr/>
            related: - Позволяет найти веб-сайты, связанные с определенным сайтом. Например, related:example.com найдет сайты, связанные с example.com.
            <hr/>
            info: - Используется для получения информации о веб-сайте. Например, info:example.com покажет информацию о сайте example.com.
            <hr/>
            cache: - Позволяет просматривать кэшированные версии веб-страницы. Например, cache:example.com покажет кэшированные страницы с сайта example.com.
            <hr/>
            file: - Позволяет искать конкретные файлы на веб-серверах. Например, file:passwords.txt может помочь найти файл с паролями.
            <hr/>
            phonebook: - Используется для поиска номеров телефонов в онлайн-каталогах и базах данных. Например, phonebook:John Smith New York попытается найти телефонные номера для человека с этим именем в Нью-Йорке.
            <hr/>
            map: - Позволяет найти карты и связанные с ними ресурсы. Например, map:New York покажет карты, связанные с Нью-Йорком.
            <hr/>
            infosec: - Используется для поиска страниц, связанных с информационной безопасностью. Например, infosec best practices найдет страницы с лучшими практиками в области информационной безопасности.
            <hr/>
            site:gov: - Ограничивает поиск результатами только с официальных правительственных сайтов. Например, site:gov cybersecurity ищет информацию о кибербезопасности на государственных сайтах.
                </pre>

            </details>

            <form onSubmit={handleSubmit}>
                <div className={" newStyle_container"} style={{margin: '0 auto', width: '100%'}}>
                    <div style={{display: 'flex'}}>
                        <input
                            className={"Osint_input"}
                            type={"search"}
                            name="url"
                            ref={inputs}
                            value={formData.url}
                            onChange={handleChange}
                            placeholder={"OSINT үшін URL мекенжайыңызды енгізіңіз"}
                        />
                        <a className={"submit--btn"} onClick={UrlHandler}>
                            <i className="fa fa-terminal" aria-hidden="true"></i>
                        </a>
                    </div>

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


                    <Whois/>
                    <Lookup/>
                    <h3 className={"osint_subtitle"}>Проект:</h3>
                    <select name="project" className={'newStyle_select'} onChange={handleChange}>
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


                </div>


                <div className={activePt ? "" : "disablePt"}>
                    {(id && formData && formData.source && formData.source) ? formData.source.map((s) => (
                        <Source source={s} key={s.id}/>
                    )) : null}
                    {Array.from({length: count}).map((_, index) => (
                        <Source key={index}/>
                    ))}
                    <button className={"btn_add--add"} onClick={handleAdd}>Добавить ресурс <i style={{color: "green"}}
                                                                                              className="fa fa-plus"
                                                                                              aria-hidden="true"></i>
                    </button>
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