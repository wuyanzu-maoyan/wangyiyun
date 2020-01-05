import React,{Component} from 'react'
import {Route,Switch,} from 'react-router-dom'
import Disc from './containers/disc/disc'
export default class App extends Component{
  render(){
    return (
      <div className="app">
        <Switch>
          <Route path="/Disc" component={Disc}/>
        </Switch>
      </div>
    )
  }
}