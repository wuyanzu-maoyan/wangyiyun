import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.less';

import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Recommend from './containers/Recommend/Recommend';
export default class App extends Component{
  render(){
    return (
      <div className="kjcAppContainer">
        <Header/>
        <div className="kjcContent">
          <Switch>
            <Route path='/recommend' component={Recommend}/>
          </Switch>
        </div>
        <Footer/>
      </div>
    )
  }
}