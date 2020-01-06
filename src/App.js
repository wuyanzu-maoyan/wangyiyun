import React,{Component} from 'react';
import {Switch} from 'react-router-dom'
import './App.less';

import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
export default class App extends Component{
  render(){
    return (
      <div className="kjcAppContainer">
        <Header/>
        <div className="kjcContent">
          <Switch>

          </Switch>
        </div>
        <Footer/>
      </div>
    )
  }
}