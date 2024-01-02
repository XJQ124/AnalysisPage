import { Card, Divider, Dropdown, Segmented} from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { Pie } from '@ant-design/plots';
import { useState } from "react";

const items = [
    {
        // key: '1',
        label: (
            <>
                操作一
            </>
        ),
    },
    {
        // key: '2',
        label: (
            <>
                操作二
            </>
        ),
    },
];

const Sales = () => {
    const [Channel, setChannel] = useState('全部渠道');//默认展示全部渠道的内容
    const dataMappings = {
        '全部渠道': [
            { type: '其他', value: 1231 },
            { type: '母婴产品', value: 1231 },
            { type: '服饰箱包', value: 2341 },
            { type: '个户健康', value: 3113 },
            { type: '食品酒水', value: 3321 },
            { type: '家用电器', value: 4544 },
        ],
        '线上': [
            { type: '其他', value: 111 },
            { type: '母婴产品', value: 121},
            { type: '服饰箱包', value: 41 },
            { type: '个户健康', value: 311 },
            { type: '食品酒水', value: 321 },
            { type: '家用电器', value: 244 },
        ],
        '门店': [
            { type: '其他', value: 65 },
            { type: '母婴产品', value: 255 },
            { type: '服饰箱包', value: 344 },
            { type: '个户健康', value: 188 },
            { type: '食品酒水', value: 99 },
            { type: '家用电器', value: 65 },
        ],
    };

    const handleChange = (channel) => {
        setChannel(channel);
    };

    const DemoPie = () => {
        const config = {
            data: dataMappings[Channel],
            angleField: 'value', // 指定数值字段，用于确定扇形角度
            colorField: 'type',// 指定颜色字段，用于区分不同分类
            radius: 0.6,//圆环大小
            innerRadius: 0.7,//圆环的宽度
            label: {
                type: 'outer', // 在外部显示标签
                content: '{name}:\n{value}', // 显示名称和百分比
                line: {
                    length: 50, // 设置标签线的长度
                },
            },
            legend: false, // 设置图例为 false，即隐藏图例
        };
        return <Pie {...config} />;
    };


    return (
        <div>
            <Card style={{
                height: 670,
                width: 650,
                left:'700px',
                marginTop: '-670px',
                marginLeft: '30px',
                marginRight: '30px',
            }}>
                <div style={{ fontWeight: 'bold', fontSize: '16px' }}>
                    销售额类别占比
                    <Segmented options={['全部渠道', '线上', '门店']} size="middle" style={{ position: 'absolute', top: '20px', right: '90px' }} onChange={handleChange} />
                    <Divider/>

                    <Dropdown menu={{
                        items,
                    }}>
                        <EllipsisOutlined style={{ position: 'absolute', top: '30px', right: '50px' }} />
                    </Dropdown>
                </div>

                <div>销售额</div>
                <div>
                    <DemoPie />
                </div>
            </Card>
        </div>
    )

}
export default Sales