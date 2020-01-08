import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import PubSub from 'pubsub-js';
import menu from './menu_config'
import './css/LeftList.less'
export default class LeftList extends Component {

  // getCat = (event)=>{
  //   console.log(event)
  // }

  // 用于创建菜单的函数
  createMenu = (target)=>{
    return target.map((item)=>{
      return (
        <div className="zxLeftNavList" key={item.key} >
          <p>{item.title}</p>
          <ul>
            {
              this.createList(item.children)
            }
            
          </ul>
          <p className="line"></p>
        </div>
      )
    })
  }
  
  
  createList = (item)=>{
    return item.map((i,index) =>{
      if(i.key === '0001'){
        return(
          // <li key={i.key} onClick={()=>{this.getCat(i.key)}}>
          <li key={i.key}>
            <div className="zxSpot"></div>
            <NavLink to='/singer/artist'>{i.title}</NavLink>
          </li>
        )
      }else if(i.key === '0002'){
        return(
          // <li key={i.key} onClick={()=>{this.getCat(i.key)}}>
          <li key={i.key} className={this.index === index?'active':'noactive'}>
            <div className="zxSpot"></div>
            <NavLink to='/singer/signed'>{i.title}</NavLink>
          </li>
        )
      }else{
        return(
          // <li key={i.key} onClick={()=>{this.getCat(i.key)}}>
          <li key={i.key} className={this.index === index?'active':'noactive'}>
            <div className="zxSpot"></div>
            <NavLink to={`/singer/cat/${i.key}`}>{i.title}</NavLink>
          </li>
        )
      }
      
    })
  }


  render() {
    return(
      <div>
        {this.createMenu(menu)}
      </div>
    )
  }
}







