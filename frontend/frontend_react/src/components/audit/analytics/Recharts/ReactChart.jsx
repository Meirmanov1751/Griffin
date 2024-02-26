import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const LineChartExample = () => {
    const data = [
        { name: 'Январь', sales: 65 },
        { name: 'Февраль', sales: 59 },
        { name: 'Март', sales: 80 },
        { name: 'Апрель', sales: 81 },
        { name: 'Май', sales: 56 }
    ];

    return (
        <div>
            <LineChart width={600} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#ccc" />
                <Line type="monotone" dataKey="sales" stroke="blue" dot={false} />
                <Tooltip />
                <Legend />
            </LineChart>
        </div>
    );
};

export default LineChartExample;
