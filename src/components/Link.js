import React, { Component } from 'react';
import styled from 'styled-components'

const StyledLink = styled.a`
  padding-right:33px;
  
  color: ${props => props.active ? 'pink':'#ffffff'};
  border-right: dotted 1px #fff;
  
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;

  &:hover{
    color: #8d8d8d;
    text-decoration: none;
  }
  &:last-child{
    border-right:none;
  }
`;
class Link extends React.Component{
  render(){
    return(
      <StyledLink href={this.props.link}> {this.props.text} </StyledLink>
    
    );
  }
}

export default Link