import React, {useEffect, useState} from 'react';
import instance from "../../../../../../store/api";

const Source = (props) => {

    var [sourceData, setSource] = useState({
        source_name: '',
        source_url: '',
        source_description: '',
        event_location: '',
        event_description: '',
        document_title: '',
        document_type: '',

        location_address: '',
        location_description: '',
        keyword: '',
        note_text: '',
    })

    useEffect(() => {
        if (props.source) {
            setSource(props.source)
        }
    }, [])

    function sourceChange(event) {
        const {name, value, type, files} = event.target;
        setSource({
            ...sourceData,
            [name]: value,
        });
    };
    const [adding, setAdding] = useState(false)
    const sourceSubmit = async (e) => {
        setAdding(true)
        e.preventDefault();
        if (!props.source) {
            try {
                const response = await instance.post('api/osint/source/', Object.assign({osint: localStorage.getItem('osintNewId')}, sourceData));
                setAdding(false)
            } catch (error) {
                console.error(error);
            }
        } else {
            try {
                const response = await instance.put('api/osint/source/' + props.source.id + '/', Object.assign({osint: localStorage.getItem('osintNewId')}, sourceData));
                setAdding(false)
            } catch (error) {
                // Обработка ошибок при отправке запроса
                console.error(error);
            }
        }

    };

    return (
        <div style={{margin: '20px auto', width: '100%'}}
             className={adding ? 'adding newStyle_container' : " newStyle_container"}>
            <h1 className={'title-h1'}>Добавить источник</h1>
            <form>
                <div className="form-group">
                    <label>Название источника</label>
                    <input
                        className={"Osint_input"}
                        type="text"
                        name="source_name"
                        value={sourceData.source_name}
                        onChange={sourceChange}
                    />
                </div>

                <div className="form-group">
                    <label>URL источника</label>
                    <input
                        className={"Osint_input"}
                        type="text"
                        name="source_url"
                        value={sourceData.source_url}
                        onChange={sourceChange}
                    />
                </div>

                <div className="form-group">
                    <label>Описание источника</label>
                    <textarea
                        className={"Osint_textarea"}
                        name="source_description"
                        value={sourceData.source_description}
                        onChange={sourceChange}
                    />
                </div>

                <div className="form-group">
                    <label>Дата события</label>
                    <input
                        className={"Osint_input"}
                        type="date"
                        name="event_date"
                        value={sourceData.event_date}
                        onChange={sourceChange}
                    />
                </div>

                <div className="form-group">
                    <label>Место события</label>
                    <input
                        className={"Osint_input"}
                        type="text"
                        name="event_location"
                        value={sourceData.event_location}
                        onChange={sourceChange}
                    />
                </div>

                <div className="form-group">
                    <label>Описание события</label>
                    <textarea
                        className={"Osint_textarea"}
                        name="event_description"
                        value={sourceData.event_description}
                        onChange={sourceChange}
                    />
                </div>

                <div className="form-group">
                    <label>Название документа</label>
                    <input
                        className={"Osint_input"}
                        type="text"
                        name="document_title"
                        value={sourceData.document_title}
                        onChange={sourceChange}
                    />
                </div>

                <div className="form-group">
                    <label>Тип документа</label>
                    <input
                        className={"Osint_input"}
                        type="text"
                        name="document_type"
                        value={sourceData.document_type}
                        onChange={sourceChange}
                    />
                </div>

                <div className="form-group">
                    <label>Файл документа</label>
                    <input
                        className={"Osint_input"}
                        type="file"
                        name="document_file"
                        onChange={sourceChange}
                    />
                </div>

                <div className="form-group">
                    <label>Широта</label>
                    <input
                        className={"Osint_input"}
                        type="text"
                        name="latitude"
                        value={sourceData.latitude}
                        onChange={sourceChange}
                    />
                </div>

                <div className="form-group">
                    <label>Долгота</label>
                    <input
                        className={"Osint_input"}
                        type="text"
                        name="longitude"
                        value={sourceData.longitude}
                        onChange={sourceChange}
                    />
                </div>

                <div className="form-group">
                    <label>Адрес местоположения</label>
                    <input
                        className={"Osint_input"}
                        type="text"
                        name="location_address"
                        value={sourceData.location_address}
                        onChange={sourceChange}
                    />
                </div>

                <div className="form-group">
                    <label>Описание местоположения</label>
                    <textarea
                        className={"Osint_textarea"}
                        name="location_description"
                        value={sourceData.location_description}
                        onChange={sourceChange}
                    />
                </div>

                <div className="form-group">
                    <label>Ключевое слово</label>
                    <input
                        className={"Osint_input"}
                        type="text"
                        name="keyword"
                        value={sourceData.keyword}
                        onChange={sourceChange}
                    />
                </div>

                <div className="form-group">
                    <label>Текст заметки</label>
                    <textarea
                        className={"Osint_textarea"}
                        name="note_text"
                        value={sourceData.note_text}
                        onChange={sourceChange}
                    />
                </div>

                <button className={"metodology_add"} onClick={sourceSubmit}>Создать</button>
            </form>
        </div>
    );
};

export default Source;