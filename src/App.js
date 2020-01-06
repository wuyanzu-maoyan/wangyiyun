import React,{Component} from 'react';
import './app.less';

import Header from './components/Header/Header.jsx'
export default class App extends Component{
  render(){
    return (
      <div className="kjcAppContainer">
        <Header/>
      </div>
    )
  }
}