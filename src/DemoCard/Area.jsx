import React, { useState,} from 'react';
import { Area } from '@ant-design/plots';

const DemoArea = () => {
    
    const [data,] = useState([
        { x: '2023-12-18', y: 6 },
        { x: '2023-12-19', y: 5 },
        { x: '2023-12-20', y: 5 },
        { x: '2023-12-21', y: 7 },
        { x: '2023-12-22', y: 3 },
        { x: '2023-12-23', y: 8 },
        { x: '2023-12-24', y: 9 },
        { x: '2023-12-25', y: 4 },
        { x: '2023-12-26', y: 2 },
    ]);

    const config = {
        data,
        xField: 'x',
        yField: 'y',
        xAxis: {
            label:null,//隐藏横坐标信息
            range: [0, 1],
        },
        yAxis:{
            label: null,
            //坐标网格线
            grid: null,
        },
        line: {
            style: {
                stroke: 'purple', 
            },
        },
        smooth: true,
    };

    return <Area {...config} height={35} width={50} />;
};

export default DemoArea