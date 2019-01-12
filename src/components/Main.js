import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styled from 'styled-components'

const Repair =styled.div`

color: #ffffff;
font-weight: 700;
line-height: 50px;
font-size: 40px;

span{
  font-size: 24px;
  display: block;
  v
}
`
const LightText = styled.div`
  margin-top:54px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  margin-bottom: 32px;
`

const CallBtn=styled.button`
  
  background-color: #ffa14b;
  border-radius:32px;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  height:64px;
  width: 245px;
  border:none;
`
class Main extends React.Component{
  render(){
    return(
      <Row>
        <Col lg={5}>
          <Repair>
            Качественный ремонт
            <span>iphone за 35 минут и гарантия 1 год</span>
          </Repair>
          <LightText>Оставьте заявку на бесплатную диагностику без очереди,
                      и получите защитное стекло, стоимостью 1000 рублей,
                      с установкой в подарок!</LightText>
            <CallBtn>Отправить заявку!</CallBtn>
        </Col>

        <Col lg={6} lgOffset={1}>
          
        </Col>
      </Row>
    )
  }
}

export default Main;