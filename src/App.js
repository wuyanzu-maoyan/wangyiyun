import React,{Component} from 'react';
import './app.less';

import Header from './components/Header/Header.jsx'
import Radio from './containers/Radio/Radio'
export default class App extends Component{
  render(){
    return (
      <div className="kjcAppContainer">
        {/* <Header/> */}
        <Radio/>
      </div>
    )
  }
}