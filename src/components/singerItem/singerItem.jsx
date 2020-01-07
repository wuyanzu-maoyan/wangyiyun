import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import img from './11.jpg'
import './css/singerItem.less'
export default class Artist extends Component{

  render(){
    const {img1v1Url,name} = this.props
      return (
        <div className="zxSingerItem">
          <img src={img1v1Url} alt=""/>
          <p><NavLink to="/singer/signed">{name}</NavLink>
          <span>111</span>
          </p>
        </div>
      )
  }
}