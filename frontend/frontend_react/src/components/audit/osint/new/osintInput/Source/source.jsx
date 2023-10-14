import React, {useState} from 'react';

const Source = () => {
    var [source, setSource] = useState({
        source_name: '',
        source_url: '',
        source_description: '',
        event_date: '',
        event_location: '',
        event_description: '',
        document_title: '',
        document_type: '',
        document_file: null,
        latitude: '',
        longitude: '',
        location_address: '',
        location_description: '',
        keyword: '',
        note_text: '',
    })

    function handleChange(event){
        const { name, value, type, files } = event.target;
        setSource((prevState) => ({
            source: {
                ...prevState.source,
                [name]: type === 'file' ? files[0] : value, // Учтите, что для файлов используется files[0]
            },
        }));
    };

    return (
        <div className="pentest-section">
            <h2>Добавить источник</h2>
            <form>
                <div className="form-group">
                    <label>Название источника</label>
                    <input
                        className={"Osint_input"}
                        type="text"
                        name="source_name"
                        value={source.source_name}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>URL источника</label>
                    <input
                        className={"Osint_input"}
                        type="text"
                        name="source_url"
                        value={source.source_url}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Описание источника</label>
                    <textarea
                        className={"Osint_textarea"}
                        name="source_description"
                        value={source.source_description}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Дата события</label>
                    <input
                        className={"Osint_input"}
                        type="date"
                        name="event_date"
                        value={source.event_date}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Место события</label>
                    <input
                        className={"Osint_input"}
                        type="text"
                        name="event_location"
                        value={source.event_location}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Описание события</label>
                    <textarea
                        className={"Osint_textarea"}
                        name="event_description"
                        value={source.event_description}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Название документа</label>
                    <input
                        className={"Osint_input"}
                        type="text"
                        name="document_title"
                        value={source.document_title}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Тип документа</label>
                    <input
                        className={"Osint_input"}
                        type="text"
                        name="document_type"
                        value={source.document_type}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Файл документа</label>
                    <input
                        className={"Osint_input"}
                        type="file"
                        name="document_file"
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Широта</label>
                    <input
                        className={"Osint_input"}
                        type="text"
                        name="latitude"
                        value={source.latitude}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Долгота</label>
                    <input
                        className={"Osint_input"}
                        type="text"
                        name="longitude"
                        value={source.longitude}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Адрес местоположения</label>
                    <input
                        className={"Osint_input"}
                        type="text"
                        name="location_address"
                        value={source.location_address}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Описание местоположения</label>
                    <textarea
                        className={"Osint_textarea"}
                        name="location_description"
                        value={source.location_description}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Ключевое слово</label>
                    <input
                        className={"Osint_input"}
                        type="text"
                        name="keyword"
                        value={source.keyword}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Текст заметки</label>
                    <textarea
                        className={"Osint_textarea"}
                        name="note_text"
                        value={source.note_text}
                        onChange={handleChange}
                    />
                </div>

                <button className={"metodology_add"}  type="submit">Создать</button>
            </form>
        </div>
    );
};

export default Source;