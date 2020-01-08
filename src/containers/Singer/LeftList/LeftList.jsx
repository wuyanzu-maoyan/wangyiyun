import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import PubSub from 'pubsub-js';
import menu from './menu_config'
import './css/LeftList.less'
export default class LeftList extends Component {

  getCat = (id)=>{
    PubSub.publish('getId',id)
  }

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
    return item.map(i =>{
      return(
        <li key={i.key} onClick={()=>{this.getCat(i.key)}}>
          <NavLink to={`/singer/cat/${i.key}`}>{i.title}</NavLink>
        </li>
      )
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







