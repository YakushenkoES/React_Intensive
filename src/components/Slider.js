import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styled from 'styled-components'

import Slide_1 from '../img/slide-1.jpg'
import Slide_2 from '../img/slide-2.jpg'
import Slide_3 from '../img/slide-3.jpg'
import Slide_4 from '../img/slide-4.jpg'

class Slider extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      slides: [
        {
          eachSlide: `url(${Slide_1})`
        },
        {
          eachSlide: `url(${Slide_2})`
        },
        {
          eachSlide: `url(${Slide_3})`
        },
        {
          eachSlide: `url(${Slide_4})`
        }
      ],

      autoplay: false,
      active: 0,
      max: 0
    }

    this.state.max = this.state.slides.length;
    this.intervalBetweenSlides = this.intervalBetweenSlides.bind(this);
    this.toggleAutoplay = this.toggleAutoplay.bind(this);
    this.nextOne = this.nextOne.bind(this);
    this.prevOne = this.prevOne.bind(this);
  }

  componentDidMount(){
    this.interval = setInterval(() => intervalBetweenSlides(), 3000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  intervalBetweenSlides(){
    if(this.state.autoplay === true){
      if(this.state.active === this.state.max-1){
        this.state.active=0;
      }
      else{
        this.active++;
      }
      this.setState({active: this.state.active
      })
    }
  }

  toggleAutoplay(){
    this.setState({
      autoplay: !this.state.autoplay
    })
  }
  nextOne(){
    (this.state.active < this.state.max -1)?
    this.state.setState({active: this.state.active + 1}):
    this.state.setState({active: 0})
  }
  prevOne(){
    (this.state.active > 0)?
    this.state.setState({active: this.state.active - 1}):
    this.state.setState({active: this.state.max - 1})
  }

  dots(index, event){
    this.setState({
      active: index
    })
  }

  isActive(value){
    if(this.state.active === value){
      return 'active';
    }
  }

  render(){
    return()
  }
}