import React from "react";
import { Card, Divider, Dropdown, Col, Row, } from 'antd';
import { InfoCircleOutlined, CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import DemoArea from "./DemoCard/Area";
import DemoColumn from "./DemoCard/Column";
import DemoProgress from "./DemoCard/Progress";
import './index.css'

const items = [
    {
        label: (
            <div>
                指示说明
            </div>
        ),
    }];

const CardBox = () => (

    <Row
        gutter={{
            xs: 1,
            sm: 1,
            md: 1,
            lg: 1,
        }}
    >

        <Col className="gutter-row" span={6}>

            <Card className="topCard">

                <div className="box">
                    总销售额
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement="top"
                        arrow
                    >
                        <InfoCircleOutlined style={{ marginLeft: '160px' }} />
                    </Dropdown>
                </div>
                <div style={{ fontSize: 25, }}>¥126,560 </div>

                <p>周同比 12% <CaretUpOutlined style={{ color: 'red' }} />&nbsp;&nbsp;&nbsp;日同比 11% <CaretDownOutlined style={{ color: 'lime' }} /> </p>
                <Divider />
                <>日销售额&nbsp; &nbsp;¥12,423 </>
            </Card>
        </Col>

        <Col className="gutter-row" span={6}>
            <Card className="topCard">
                <div className="box">
                    访问量
                    <Dropdown
                        style={{
                            backgroundColor: 'black',
                            color: "white"
                        }}
                        menu={{
                            items,
                        }}
                        placement="top"
                        arrow
                    >
                        <InfoCircleOutlined style={{ marginLeft: '160px' }} />
                    </Dropdown>
                </div>
                <div style={{ fontSize: 25, }}>8,846 </div>

                <DemoArea />

                <Divider />
                <div>日访问量&nbsp;&nbsp;1,234</div>
            </Card>
        </Col>

        <Col className="gutter-row" span={6}>
            <Card className="topCard">
                <div className="box">
                    支付笔数
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement="top"
                        arrow
                    >
                        <InfoCircleOutlined style={{ marginLeft: '160px' }} />
                    </Dropdown>
                </div>
                <div style={{ fontSize: 25, }}>6,560 </div>

                <DemoColumn />
                <Divider />
                <div>转换率&nbsp;&nbsp;60%</div>
            </Card>
        </Col>

        <Col className="gutter-row" span={6}>

            <Card className="topCard">
                <div className="box">
                    运营活动效果
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement="top"
                        arrow
                    >
                        <InfoCircleOutlined style={{ position: 'absolute', top: '28px', right: '35px' }} />
                    </Dropdown>
                </div>
                <div style={{ fontSize: 25, }}>78% </div>
                <DemoProgress />
                <Divider />
                <p>周同比 12% <CaretUpOutlined style={{ color: 'red' }} /> &nbsp;&nbsp;&nbsp;日同比 11% <CaretDownOutlined style={{ color: 'lime' }} /> </p>
            </Card>
        </Col>
    </Row>
);
export default CardBox;