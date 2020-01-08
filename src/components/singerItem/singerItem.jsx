import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './css/singerItem.less'
export default class SingerItem extends Component{

  render(){
    const {img1v1Url,name,accountId} = this.props
    if(accountId){
      return (
        <div className="zxSingerItem">
          <img src={img1v1Url} alt=""/>
          <p><NavLink to="/singer/signed">{name}</NavLink></p>
          <div className="img"></div>
        </div>
      )
    }else{
      return (
        <div className="zxSingerItem">
          <img src={img1v1Url} alt=""/>
          <p><NavLink to="/singer/signed">{name}</NavLink>
          </p>
        </div>
      )
    }
      
  }
}