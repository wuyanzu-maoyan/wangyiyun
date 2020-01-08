import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './css/singerHeader.less'
export default class SingerHeader extends Component{
  componentDidMount(){
    console.log(this.props)
  }
  render(){
    const {title,isMore} = this.props
    if(isMore){
      return(
        <div className="zxSingerHeader">
          <h3>{title}</h3>
          <NavLink to="/singer/signed">更多 > </NavLink>
        </div>
      )
    }else{
      return(
        <div className="zxSingerHeader">
          <h3>{title}</h3>
        </div>
      )
    }
    
  }
}