import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './css/singerHeader.less'
export default class Artist extends Component{
  componentDidMount(){
    console.log(this.props)
  }
  render(){
    return(
      <div className="zxSingerHeader">
        <h3>{this.props.title}</h3>
        <NavLink to="/singer/signed">更多 > </NavLink>
      </div>
    )
  }
}