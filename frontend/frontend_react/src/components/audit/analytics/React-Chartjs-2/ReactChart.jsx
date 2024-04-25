import React, {useEffect} from 'react';
import {Line} from 'react-chartjs-2';
import {CategoryScale, Chart} from "chart.js/auto";
import {useDispatch, useSelector} from "react-redux";
import {fetchPentest} from "../../../../store/action.creators/pentest";

Chart.register(CategoryScale);

const LineChart = () => {
    const dispatch = useDispatch();
    let pentests = useSelector((state) => state.pentests)

    useEffect(() => {
        dispatch(fetchPentest());
    }, [dispatch]);

    let first = pentests.items.filter((item) => {
        let date = new Date(item.created_at)
        return 1 === date.getMonth() + 1
    }).length

    let second = pentests.items.filter((item) => {
        let date = new Date(item.created_at)
        return 2 === date.getMonth() + 1
    }).length

    let third = pentests.items.filter((item) => {
        let date = new Date(item.created_at)
        return 3 === date.getMonth() + 1
    }).length

    let fourth = pentests.items.filter((item) => {
        let date = new Date(item.created_at)
        return 4 === date.getMonth() + 1
    }).length

    let fifth = pentests.items.filter((item) => {
        let date = new Date(item.created_at)
        return 5 === date.getMonth() + 1
    }).length

    let sixth = pentests.items.filter((item) => {
        let date = new Date(item.created_at)
        return 6 === date.getMonth() + 1
    }).length

    let seventh = pentests.items.filter((item) => {
        let date = new Date(item.created_at)
        return 7 === date.getMonth() + 1
    }).length

    let eighth = pentests.items.filter((item) => {
        let date = new Date(item.created_at)
        return 8 === date.getMonth() + 1
    }).length

    let ninth = pentests.items.filter((item) => {
        let date = new Date(item.created_at)
        return 9 === date.getMonth() + 1
    }).length

    let tenth = pentests.items.filter((item) => {
        let date = new Date(item.created_at)
        return 10 === date.getMonth() + 1
    }).length

    let eleventh = pentests.items.filter((item) => {
        let date = new Date(item.created_at)
        return 11 === date.getMonth() + 1
    }).length

    let twelfth = pentests.items.filter((item) => {
        let date = new Date(item.created_at)
        return 12 === date.getMonth() + 1
    }).length

    const data = {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        datasets: [
            {
                label: 'ПРОВЕРКИ НА ПРОНИКНОВЕНИЕ',
                data: [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth, eleventh, twelfth]
                ,
                fill: false,
                borderColor: '#097CB4',
            }
        ]
    };

    const options = {
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div>
            <div className={'chart'}>
                <Line className={'chartLine'} data={data} options={options}/>
            </div>
            <div>
                <h2 className={"title-h1"}>Сроки проведения пентестов.</h2>
                <h2 className={"title-h2"}>Однократные пентесты.</h2>
                <p>Если речь идет о одноразовых пентестах для оценки безопасности определенной системы, приложения или
                    сети,
                    то сроки проведения могут быть согласованы между организацией, заказывающей тестирование, и
                    командой,
                    проводящей пентест. Обычно такие тесты занимают от нескольких недель до нескольких месяцев, в
                    зависимости от сложности и объема тестируемой среды.</p>

                <h2 className={"title-h2"}>Регулярные пентесты.</h2>
                <p> Если планируются регулярные пентесты, например, каждый квартал или полгода, то сроки также могут
                    быть
                    предварительно определены и согласованы между заказчиком и командой, проводящей тестирование.</p>
            </div>
        </div>
    );
};

export default LineChart;
