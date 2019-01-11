import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <HelloWord productName="React.js"/>
        <SayFullName name="Evgeny" surname="Yakushenko" link="vk.com"/>
      </div>
    );
  }
}




function SayFullName(props){
  return (
    <div>
      <h2> Моё имя {props.name}, фамилия - {props.surname}</h2>
      <a href={props.link}> Ссылка на мой профиль</a>
    </div>
  )
}

function HelloWord(props){
  return(
    <h1>Hellow {props.productName} word!</h1>
  )
}


export default App;
