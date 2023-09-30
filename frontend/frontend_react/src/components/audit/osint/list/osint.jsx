import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTable} from 'react-table';
import {fetchOsint} from "../../../../store/action.creators/osint";
import {Link} from "react-router-dom";

const OsintList = () => {
    const dispatch = useDispatch();
    const osints = useSelector((state) => state.osints.items);
    const data = React.useMemo(() => osints, [osints]);
    const columns = React.useMemo(
        () => [
            {
                Header: 'Организация',
                accessor: 'organizationName',
            },
            {
                Header: 'Имя человека',
                accessor: 'personName',
            },
            {
                Header: 'Цели и задачи',
                accessor: 'goalsAndTasks',
            },
            {
                Header: 'Сбор данных',
                accessor: 'dataCollection',
            },
            {
                Header: 'Фильтрация и анализ',
                accessor: 'dataFilteringAndAnalysis',
            },
            {
                Header: 'Хранение данных',
                accessor: 'dataStorage',
            },
            {
                Header: 'URL',
                accessor: 'url',
            },
            {
                Header: 'Clickjacking',
                accessor: 'clickjacking',
            },
            {
                Header: 'CSRF',
                accessor: 'csrf',
            },
            {
                Header: 'Info',
                accessor: 'info',
                Cell: ({value}) => JSON.stringify(value),
            },
            {
                Header: 'Open Ports',
                accessor: 'open_ports',
            },
            {
                Header: 'SQL Injection',
                accessor: 'sql_injection',
            },
            {
                Header: 'XSS',
                accessor: 'xss',
            },
            // Добавьте другие колонки, если необходимо
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    });

    useEffect(() => {
        dispatch(fetchOsint());
    }, [dispatch]);
    console.log(osints)
    return (
        <div className={"continer-osint"}>
            <div>
                <table className={"tableWrapper"} {...getTableProps()}>
                    <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                <Link className={"tr-link"} to={`osint/${row.original.id}`}>
                                {row.cells.map(cell => {
                                    return (

                                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>

                                    );
                                })}
                                </Link>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default OsintList;