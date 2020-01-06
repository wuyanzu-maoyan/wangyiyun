import React,{Component} from 'react'
import {NavLink,Switch,Route,Redirect} from 'react-router-dom'

import SingerHeader from '../../../components/singerHeader/singerHeader.jsx'
import SingerItem from '../../../components/singerItem/singerItem.jsx'
import './Artist.less'
export default class Artist extends Component{
  render(){
    return(
      <div className="zxRight">
        <div className="zxSigned">
          {/* <div className="zxSingerHeader">
            <h3>入驻歌手</h3>
            <NavLink to="/singer/signed">更多 > </NavLink>
          </div> */}
          <SingerHeader></SingerHeader>
          <div className="zxSingerInner">
            {/* <div className="zxSingerItem">
              <img src={img} alt=""/>
              <p><NavLink to="/singer/signed">张惠妹</NavLink>
              <span>111</span>
              </p>
            </div> */}
            <SingerItem></SingerItem>
            <SingerItem></SingerItem>
            <SingerItem></SingerItem>
            <SingerItem></SingerItem>
            <SingerItem></SingerItem>
            <SingerItem></SingerItem>
            <SingerItem></SingerItem>
            <SingerItem></SingerItem>
            <SingerItem></SingerItem>
            <SingerItem></SingerItem>
          </div>
          
        </div>
      </div>
    )
  }
}