import { Column } from '@ant-design/plots';
const DemoColumn = () => {
    const data = [
        {
            type: '1',
            sales: 7,
        },
        {
            type: '2',
            sales: 5,
        },
        {
            type: '3',
            sales: 4,
        },
        {
            type: '4',
            sales: 2,
        },
        {
            type: '5',
            sales: 4,
        },
        {
            type: '6',
            sales: 7,
        },
        {
            type: '7',
            sales: 5,
        },
        {
            type: '8',
            sales: 6,
        },
        {
            type: '9',
            sales: 5,
        },
        {
            type: '10',
            sales: 9,
        },
        {
            type: '11',
            sales: 6,
        },
        {
            type: '12',
            sales: 3,
        },
        {
            type: '13',
            sales: 1,
        },
        {
            type: '14',
            sales: 5,
        },
        {
            type: '15',
            sales: 3,
        },
        {
            type: '16',
            sales: 6,
        },
        {
            type: '17',
            sales: 5,
        },

    ];
    const config = {
        data,
        xField: 'type',
        yField: 'sales',
        label: {
            // 可手动配置 label 数据标签位置
            position: 'middle',
            content: null,//内容： 隐藏柱状柱子上的数据
            style: {
                fill: '#FFFFFF',//填充色
                opacity: 0.7,//不透明度
            },
        },
        xAxis: {
            label:null
        },
        yAxis:{
            label:null,
            grid: null,
        },
        //取一个别名
        meta: {
            type: {
                alias: '类别',
            },
            sales: {
                alias: 'y',
            },
        },
    };
    return <Column {...config} height={35} width={50} />;
};

export default DemoColumn;