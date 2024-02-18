import React from 'react';
import LineChart from "./React-Chartjs-2/ReactChart";


const Analytics = () => {
    return (
        <div>
            <div className={"newStyle_container"} >
                <h1 className={"title"}>Аналитика</h1>
                <LineChart/>
            </div>
        </div>
    );
};

export default Analytics;