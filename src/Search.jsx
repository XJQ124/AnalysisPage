import { useState } from 'react';
import React from 'react';
import { Card,Divider,Dropdown,Menu,Table} from 'antd';
import { Area } from '@ant-design/plots';
import { EllipsisOutlined, InfoCircleOutlined, CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import _ from 'lodash';

const items =[
    {
        key:'1',
        label: (
            <>
            操作一
            </>
        ),
    },
    {
        key: '2',
        label: (
            <>
            操作二
            </>
        ),
    }
]

const DemoArea1 = () => {
    const [data] = useState([
        { x: '2023-12-19', y: 1 },
        { x: '2023-12-20', y: 6 },
        { x: '2023-12-21', y: 4 },
        { x: '2023-12-22', y: 8 },
        { x: '2023-12-23', y: 3 },
        { x: '2023-12-24', y: 7 },
        { x: '2023-12-25', y: 2 },
    ]);

    const config = {
        data,
        xField: 'x',
        yField: 'y',
        xAxis: {
            label: null,
            range: [0, 1],
        },
        yAxis: {
            label: null,
            //坐标网格线
            grid: null, 
        },
        line: {
            style: {
                stroke: 'purple',
            },
        },
        smooth: true, // 设置为 true，表示使用平滑曲线
    };
    return (
        <div style={{ width: 200, height: 50 }}>
            <Area {...config} />
        </div>
    );
};

const DemoArea2 = () => {
    const [data,] = useState([
        { x: '2023-12-19', y: 1 },
        { x: '2023-12-20', y: 6 },
        { x: '2023-12-21', y: 4 },
        { x: '2023-12-22', y: 8 },
        { x: '2023-12-23', y: 3 },
        { x: '2023-12-24', y: 7 },
        { x: '2023-12-25', y: 2 },
    ]);

    const config = {
        data,
        xField: 'x',
        yField: 'y',
        xAxis: {
            label: null,
            range: [0, 1],
        },
        yAxis: {
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
    
    return (
        <div style={{ width: 200, height: 50 }}>
            <Area {...config} />
        </div>
    );
};

const columns = [
    {
        title: '排名',
        dataIndex: 'ranking',
    },
    {
        title: '搜索关键词',
        dataIndex: 'search',
        render: (text) => (
            <a href={`https://www.baidu.com`} target="_blank" rel="noopener noreferrer">
                {text}
            </a>
        ),
    },
    {
        title: '用户数',
        dataIndex: 'users',
        sorter:(a,b)=>a.users - b.users
    },
    {

        title: '周涨幅',
        dataIndex: 'price',
        sorter: (a, b) => a.price - b.price, 
        render: (text) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>{`${Math.abs(text)}%`}</div>
                {text >= 0 ? (
                    <CaretUpOutlined style={{ color: 'red', marginLeft: '5px' }} />
                ) : (
                    <CaretDownOutlined style={{ color: 'green', marginLeft: '5px' }} />
                )}
            </div>
        ),
    },
];

//TODO:  使用 Lodash 的方法实现
const RandomData = () => {
    const data = [];

    _.times(50, (i) => {
        const randomUsers = _.random(1, 1000);  //这个比原生的好在直接就是整数，不需要做取整的操作.toFixed(2);
        const randomPrice = _.round(_.random(0, 100, true) * (_.random() > 0.5 ? 1 : -1),2) 

        data.push({
            key: `${i + 1}`,
            ranking: `${i + 1}`,
            search: `搜索关键词-${i + 1}`,
            users: randomUsers,
            price: randomPrice,
        });
    });

    return data;
};
const data = RandomData();

const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

const SearchCard=()=>{

    return (
    <div>
        <Card className='search'>
            <div style={{fontWeight:'bold',fontSize:'16px'}}>
                线上热门搜索
                <Divider/>

                <Dropdown menu={{
                    items,
                }}>
                <EllipsisOutlined style={{ position: 'absolute', top: '30px', right: '50px' }} />
                </Dropdown>
                
            </div>
            <div style={{
                marginTop: '20px',
                marginLeft: '8px',
                }}>
                搜索用户数
                <Dropdown
                    style={{
                        backgroundColor: 'black',
                        color: "white"
                    }}
                    overlay={
                        <Menu  >
                            <Menu.Item key="instructions">指标说明</Menu.Item>
                        </Menu>
                    }
                    placement="top"
                    arrow
                >
                    <InfoCircleOutlined style={{ marginLeft: '5px' }} />
                </Dropdown>
            </div>

            <div style={{
                marginTop: '-20px',
                marginLeft: '310px',
            }}>
                人均搜索次数
                <Dropdown
                    style={{
                        backgroundColor: 'black',
                        color: "white"
                    }}
                    overlay={
                        <Menu  >
                            <Menu.Item key="instructions">指标说明</Menu.Item>
                        </Menu>
                    }
                    placement="top"
                    arrow
                >
                    <InfoCircleOutlined style={{ marginLeft: '5px' }} />
                </Dropdown>
            </div>
            <DemoArea1 />
                <div style={{
                    marginTop: '-50px',
                    marginLeft: '310px',
                }}>
                    <DemoArea2 />
            </div>
                <Table columns={columns} dataSource={data} onChange={onChange} pagination={{ pageSize: 5 }} />                    
        </Card>
    </div>
    )
}

export default SearchCard

