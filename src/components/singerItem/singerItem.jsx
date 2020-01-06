import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import img from './11.jpg'
import './css/singerItem.less'
export default class Artist extends Component{
  render(){
    return(
      <div className="zxSingerItem">
        <img src={img} alt=""/>
        <p><NavLink to="/singer/signed">张惠妹</NavLink>
        <span>111</span>
        </p>
      </div>
    )
  }
}