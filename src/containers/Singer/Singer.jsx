import React,{Component} from 'react'
import {NavLink,Switch,Route,Redirect} from 'react-router-dom'
import Artist from './Artist/Artist.jsx'
import Signed from './Signed/Signed.jsx'
import Cat from './Cat/Cat.jsx'
import LeftList from './LeftList/LeftList.jsx'
import './css/Singer.less'


export default class Singer extends Component{
  render(){
    return(
      <div className="zxSingerContainer">
        <div className="zxSinger clearfix">
          <div className="zxLeftNavContainer">
            <div className="zxLeftNav">
              
              <LeftList></LeftList>
              
            </div> 
          </div>
          <div className="zxRightContainer ">
            <Switch>
              <Route path="/singer/artist" component={Artist}/>
              <Route path="/singer/signed" component={Signed}/>
              <Route path="/singer/cat/:key" component={Cat}/> 
              <Redirect to="/singer/artist"/>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}