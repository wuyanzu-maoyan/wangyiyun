import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './css/singerHeader.less'
export default class Artist extends Component{
  render(){
    return(
      <div className="zxSingerHeader">
        <h3>入驻歌手</h3>
        <NavLink to="/singer/signed">更多 > </NavLink>
      </div>
    )
  }
}