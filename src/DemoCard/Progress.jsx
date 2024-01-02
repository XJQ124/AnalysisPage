import React from 'react';
import { Progress } from 'antd';

//渐变的实现部分
const twoColors = {
    '0%': '#108ee9',
    '100%': '#87d068',
};
const DemoProgress = () => (
    <div
        style={{
            width: 170,
        }}
    >
        {/* status是那个动画效果 */}
        <Progress percent={78} size="small" status="active" strokeColor={twoColors} />
    </div>
);
export default DemoProgress;