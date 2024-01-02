import { useState } from 'react';
import React from 'react';
import { Tabs, Card, DatePicker, Button } from 'antd';
import { Column } from '@ant-design/plots';
import './index.css'
import _ from 'lodash';
import dayjs from 'dayjs';

const items = [

    {
        key: '1',
        label: '销售额',
    },
    {
        key: '2',
        label: '访问量',
    },
]

const DemoColumn = () => {
    const data = [
        {
            type: '1月',
            sales: 932,
        },
        {
            type: '2月',
            sales: 284,
        },
        {
            type: '3月',
            sales: 980,
        },
        {
            type: '4月',
            sales: 1084,
        },
        {
            type: '5月',
            sales: 253,
        },
        {
            type: '6月',
            sales: 560,
        },
        {
            type: '7月',
            sales: 1079,
        },
        {
            type: '8月',
            sales: 653,
        },
        {
            type: '9月',
            sales: 217,
        },
        {
            type: '10月',
            sales: 685,
        },
        {
            type: '11月',
            sales: 473,
        },
        {
            type: '12月',
            sales: 369,
        },
    ];

    const config = {
        data,
        xField: 'type',
        yField: 'sales',
        label: {
            position: 'middle',
            // 'top', 'bottom', 'middle',
            //消除柱状图里的数据
            content: null,
            style: {
                fill: '#FFFFFF',
                opacity: 0.6,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                //标签文本自动旋转（过长时使用）
                autoRotate: false,
            },
        },
        yAxis: {
            label: {
                autoHide: true,
                grid: null,
            },
        },

        meta: {
            type: {
                alias: '类别',
            },
            sales: {
                alias: '销售量',
            },
        },
    };
    return <Column {...config} />;
};

const shopData = [];

for (let rank = 1; rank <= 7; rank++) {
    const shop = {
        rank,
        name: `工专路 ${rank - 1} 号店`,
        sales: '323,234',
    };
    shopData.push(shop);
}

const renderShopData = () => {
    return _.map(shopData, (shop, index) => (
        <div key={index} style={{ display: 'flex', marginTop: '18px' }}>

            <div className={index < 3 ? 'num' : 'numGray'}>
                {shop.rank}
            </div>

            <div style={{ marginLeft: '15px', marginRight: '200px' }}>
                {`${shop.name} `}
            </div>

            <div>
                {`${shop.sales}`}
            </div>
        </div>

    ));
};


const { RangePicker } = DatePicker;
const HandOver = () => {
    const [dateRange, setDateRange] = useState();

    const onChange = (key) => {
        console.log(key);
        switch (key) {
            case '1':
                setDateRange([dayjs().startOf('day'), dayjs().endOf('day')]);
                break;
            case '2':
                setDateRange([dayjs().startOf('week'), dayjs().endOf('week')]);
                break;
            case '3':
                setDateRange([dayjs().startOf('month'), dayjs().endOf('month')]);
                break;
            case '4':
                setDateRange([dayjs().startOf('year'), dayjs().endOf('year')]);
                break;
            default:
                setDateRange(null);
        }
    };

    return (
        <Card style={{
            width: 'auto',
            marginTop: '20px',
            marginLeft: '30px',
            marginRight: '30px',
        }}

        ><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <Tabs defaultActiveKey="1" items={items} />

                <div>
                    <Button type="link" className="custom-button" onClick={() => onChange('1')}>
                        今日
                    </Button>
                    <Button type="link" className="custom-button" onClick={() => onChange('2')}>
                        本周
                    </Button>
                    <Button type="link" className="custom-button" onClick={() => onChange('3')}>
                        本月
                    </Button>
                    <Button type="link" className="custom-button" onClick={() => onChange('4')}>
                        本年
                    </Button>

                    <RangePicker value={dateRange} />
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 100 }}>
                <div style={{ flex: '1', marginTop: 20, height: 300 }} >
                    <DemoColumn />
                </div >

                <div style={{ width: 300, flex: 0.5 }}>

                    <div style={{ marginTop: 10 }}>
                        门店销售额排名
                    </div>

                    <div style={{ marginTop: 25 }}>
                        {renderShopData()}
                    </div>

                </div>



            </div>
        </Card>
    )
}
export default HandOver;