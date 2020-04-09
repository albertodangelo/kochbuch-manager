import React, { useState } from 'react';
import { UsersContainer } from './UsersContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ParametersContainer } from './ParametersContainer';
import { KochbuchContainer } from './KochbuchContainer';
import { MenuContainer } from './MenuContainer'
import './App.css';



// ant design

import { Row, Col, Divider } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

export const App: React.FC = () => {

  return (
    <>
      <Row>
        <Col span={24}><Title>Kochbuch Manager</Title></Col>
      </Row>
      <Row>
        <Col style={{padding:"15px"}} xs={24} sm={24} md={5} lg={5} xl={5}>
          <MenuContainer />
        </Col>
        <Col  xs={24} sm={24} md={19} lg={19} xl={19}>
          <BrowserRouter>
            <div className="App" >
              <Switch>
                <Route path="/users" component={UsersContainer} />
                <Route path="/" exact={true} component={KochbuchContainer} />
                <Route path="/kochbuch" exact={true} component={KochbuchContainer} />
                <Route path='/parameters/:id' component={ParametersContainer} />
              </Switch>
            </div>
          </BrowserRouter>
        </Col>
      </Row>
     

    </>
  )


}
