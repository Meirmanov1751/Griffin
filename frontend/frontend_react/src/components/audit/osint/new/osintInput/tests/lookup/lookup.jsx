import React, {useRef, useState} from 'react';
import axios from "axios";
import load from "../../../../../../../assets/img/load-old.gif";
import instance from "../../../../../../../store/api";

const Lookup = () => {
    const inputs = useRef(null)
    const [data, setData] = useState("")
    const [loading, setLoading] = useState("")
    console.log(data)

    function UrlHandlerLogs() {
        setLoading("load")
        if (inputs.current) {

            instance.get('/pentesting/lookup/?url=' + inputs.current.value)
                .then(res => {
                    setData(res);
                    setLoading("noload")
                }).catch(err => {
                setData(err);
                setLoading("err")
            })

        }

    }

    return (<div >
        <h3 className={"osint_subtitle"}>Lookup:</h3>
            <form style={{display: 'flex'}}>

                <input className={"Osint_input"} type={"search"} ref={inputs}
                       placeholder={"Lookup шабуылының осалдығын тексеру үшін URL мекенжайыңызды енгізіңіз"}/>
                <a className={"submit--btn"} onClick={UrlHandlerLogs}><i className="fa fa-play" aria-hidden="true"></i></a>
            </form>
            {loading == "load" ? <div className={"load"}>
                <img src={load}/>
                <p>Бұған бірнеше минут кетуі мүмкін...</p>
            </div> : null}
            {loading == "err" ? <div className={"load"}>
                <p>Қате......</p>
            </div> : null}
            {data.data ? <div>
                <div className="code_block--pentest">
                    <code>
                                <div className={"console_title"}>{JSON.stringify(data.data.lookup)}:</div>
                            </code>
                </div>
            </div> : null}
        </div>);
};


export default Lookup;