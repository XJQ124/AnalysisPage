    import React from "react";
    import { Card, Tabs, Progress } from "antd";
    import { Line } from '@ant-design/plots';
    import { useState,useEffect } from "react";

    //折线部分
    const DemoLine = () => {
        const [data, setData] = useState([]);
        useEffect(() => {
            asyncFetch();
        }, []);
        //异步获取数据  
        const asyncFetch = () => {
            // 从本地加载数据
            import('./Data.json')
                .then((json) => setData(json.default))
                .catch((error) => {
                    console.log('导入失败', error);
                });
        };
        
        const config = {
            data,
            xField: 'time', 
            yField: 'number',
            seriesField: 'distinction',//区分不同的折线
            xAxis: {
                //X轴上的刻度数量
                tickCount: 20,
            },
            //折线图下面的滑块
            slider: {
                start: 0,
                end: 1,
            },
            legend: {
                position: 'top', // 设置图例位置为顶部
            },
        };

        return <Line {...config} />;
    };

    const Transformation = () => {
        return (
            <div>
                <Card style={{
                    width: 'auto',
                    height: 'auto',
                    marginTop: '20px',
                    marginLeft: '30px',
                    marginRight: '30px',
                }}>
                    <Tabs
                        // 默认展示的标签页
                        defaultActiveKey="0"
                        style={{
                            height: 220,
                            marginBottom: '-60px', // 调整 Tabs 底部间距
                        
                        }}
                    >
                        {new Array(10).fill(null).map((_, i) => {
                            const id = String(i);//声明id，将i转换为字符串
                            const progressPercent = Math.floor(Math.random() * 100); // 随机值【0，100）不包含100
                          
                            return (
                                <div
                                    key={String(i)}
                                    tab={
                                        <div>
                                            Stores {id}
                                            <div style={{ marginTop: '6px',marginRight:'40px'}}>
                                                <div>
                                                    转化率
                                                </div>
                                                <Progress type="circle" percent={progressPercent} showInfo={false} width={60} style={{ marginLeft: '70px' }} strokeWidth={10} strokeColor="#91d5ff" />
                                            </div>
                                        </div>
                                    }
                                >
                                </div>
                            );
                        })}
                    </Tabs>
                    <DemoLine />
                </Card>
            </div>
        )
    }


    export default Transformation