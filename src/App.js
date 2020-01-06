import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom'
import Singer from './containers/Singer/Singer.jsx'
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
            <Route path="/singer" component={Singer}/>
          </Switch>
        </div>
        <Footer/>
      </div>
    )
  }
}