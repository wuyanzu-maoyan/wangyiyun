import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import './App.less';
import New from './containers/New/New.jsx';
import Radio from './containers/Radio/Radio.jsx';
import Recommend from './containers/Recommend/Recommend.jsx';
import Singer from './containers/Singer/Singer.jsx';
import SongList from './containers/SongList/SongList.jsx';
import TopList from './containers/TopList/TopList.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx'
import Disc from './containers/Disc-DVD/Disc-DVD'

export default class App extends Component{
  render(){
    return (
      <div className="kjcAppContainer">
        <Header/>
        <div className="kjcContent">
          <Switch>
          <Route path="/new" component={New}></Route>
          <Route path="/radio" component={Radio}></Route>
          <Route path="/recommend" component={Recommend}></Route>
          <Route path="/singer" component={Singer}></Route>
          <Route path="/songlist" component={SongList}></Route>
          <Route path="/toplist" component={TopList}></Route>
          <Route path="/disc" component={Disc}/>
          <Redirect to='/toplist'></Redirect>
          </Switch>
        </div>
        <Footer/>
      </div>
    )
  }
}