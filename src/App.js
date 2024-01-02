import React from "react";
import CardBox from "./CardBox";
import HandOver from "./Tabs";
import SearchCard from "./Search";
import Sales from "./Sales";
import zhCN from 'antd/locale/zh_CN';
import { ConfigProvider, Row, Col } from 'antd';
import Transformation from "./Transformation";


const App = () => {
  return (
    <div>
      {/* ConfigProvider是来进行全局设置的 */}
      <ConfigProvider locale={zhCN}>
        <Row>
          <Col className="gutter-row" span={24}>
            <CardBox />
          </Col>
          <Col className="gutter-row" span={24}>
            <HandOver />
          </Col>
          <Col className="gutter-row" span={24}>
            <SearchCard />
            <Sales />
          </Col>
          <Col className="gutter-row" span={24}>
            <Transformation />
          </Col>
        </Row>

      </ConfigProvider>

    </div>
  )
}
export default App;