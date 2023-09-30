import React, {useRef, useState} from 'react';
import axios from "axios";
import load from '../../../../../assets/img/load.gif'
import instance from "../../../../../store/api";

const OsintInput = () => {
    const [formData, setFormData] = useState({
        organizationName: '',
        personName: '',
        goalsAndTasks: '',
        dataCollection: '',
        dataFilteringAndAnalysis: '',
        dataStorage: '',
        url: '',
    });
    const inputs = useRef(null);

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

            axios.get('http://localhost:8000/OSINT/?url=' + inputs.current.value)
                .then(res => {
                    setData(res);
                    setLoading("noload")
                })

        }

    }

    const handleSubmit = async (e)=> {
        e.preventDefault();
        try {
            const response = await instance.post('http://127.0.0.1:8000/api/osint/osint/', Object.assign({}, formData, data));
            // Обработка успешного ответа от сервера
            console.log(response.data);
        } catch (error) {
            // Обработка ошибок при отправке запроса
            console.error(error);
        }
        console.log(formData)
        console.log(data)
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className={"Osint_input"}
                    type={"search"}
                    name="organizationName"
                    ref={inputs}
                    value={formData.organizationName}
                    onChange={handleChange}
                    placeholder={"Название организаций для проведения OSINT"}
                />
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
                <p className={"text"} style={{marginBottom: "10px"}}>
                    ** Прежде чем начать сбор информации, определите свои цели и задачи. Что вы хотите узнать или
                    достичь с помощью собранной информации? Это может быть анализ конкретного субъекта, мониторинг
                    активности в сети или другие задачи. **
                </p>
                <textarea
                    className={"Osint_textarea"}
                    type={"search"}
                    name="dataCollection"
                    ref={inputs}
                    value={formData.dataCollection}
                    onChange={handleChange}
                    placeholder={"Сбор данных"}
                />
                <p className={"text"} style={{marginBottom: "10px"}}>
                    ** Идентифицируйте источники, откуда вы хотите собрать информацию. Это могут быть поисковики,
                    социальные сети, форумы, базы данных государственных органов и другие ресурсы. Используйте
                    разнообразные методы сбора, включая поиск по ключевым словам, метаданным, перекрестные ссылки и
                    другие. **
                </p>
                <textarea
                    className={"Osint_textarea"}
                    type={"search"}
                    name="dataFilteringAndAnalysis"
                    ref={inputs}
                    value={formData.dataFilteringAndAnalysis}
                    onChange={handleChange}
                    placeholder={"Фильтрация и анализ"}
                />
                <p className={"text"} style={{marginBottom: "10px"}}>
                    ** После сбора информации проведите анализ и фильтрацию данных. Отсеивайте ненадежные и
                    несущественные источники. Обратите внимание на сходства и различия в разных источниках.
                    Применяйте методы анализа данных, такие как сопоставление, временная линия и графическое
                    представление. **
                </p>
                <textarea
                    className={"Osint_textarea"}
                    type={"search"}
                    name="dataStorage"
                    ref={inputs}
                    value={formData.dataStorage}
                    onChange={handleChange}
                    placeholder={"Сохранение данных"}
                />
                <p className={"text"} style={{marginBottom: "10px"}}>
                    ** Сохраняйте собранную информацию и аналитические выводы в удобном и безопасном формате. Это
                    может включать в себя создание досье, отчетов или базы данных.**
                </p>

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
                    {data.data.clickjacking == 1 ? <p className={"osint_reject"}>Осалдық пайызы: 100% (ЖАМАН).....</p> :
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
                        <p className={"osint_info_text"}>Бұл сайтта әзірлеушілер порттарға кіруді жабуды ұмытпады</p>}
                    {data.data.open_ports ?
                        data.data.open_ports.map((e) => {
                            return (
                                <div>
                                    <div className="code-block"><code>{JSON.stringify(e.text)}</code></div>
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
                        <p className={"osint_info_text"}>Бұл сайтта әзірлеушілер файлға кіруге тыйым салуды ұмытпады.
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

                <button className={"btn_add--req"}>Создать отчет по Osint</button>
            </form>


        </div>
    );
};


export default OsintInput;