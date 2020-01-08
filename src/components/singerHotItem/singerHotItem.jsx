import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './css/singerHotItem.less'
export default class SingerHotItem extends Component{

  render(){
    const {name,accountId} = this.props
    if(accountId){
      return (
        <div className="zxHotSinger">
          <p><NavLink to="/singer/signed">{name}</NavLink></p>
          <div className="img"></div>
        </div>
      )
    }else{
      return (
        <div className="zxHotSinger">
          <p><NavLink to="/singer/signed">{name}</NavLink></p>
        </div>)
    }
      
  }
}