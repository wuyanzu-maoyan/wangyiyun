import React,{Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.less';

import Header from './components/Header/Header.jsx'
import Radio from './containers/Radio/Radio'
import SongList from './containers/SongList/SongList'
import Footer from './components/Footer/Footer.jsx'
import Recommend from './containers/Recommend/Recommend';
export default class App extends Component{
  render(){
    return (
      <div className="kjcAppContainer">
        <Header/>
        <div className="kjcContent">
          <Switch>
            <Route path="/radio" component={Radio}/>
            <Route path="/songlist" component={SongList}></Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    )
  }
}