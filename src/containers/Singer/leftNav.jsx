import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Menu, Icon} from 'antd';
import artistMenu from '../../config/artistMenuConfig';
const {SubMenu,Item} = Menu;

export default class LeftNav extends Component {
  //用于创建菜单的函数
  createMenu = (target)=>{
    return target.map((item)=>{
      if(!item.children){
        return (
          <Item key={item.key} onClick={()=>{this.props.saveTitle(item.title)}}>
            <Link to={item.path}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </Link>
          </Item>
        )
      }else{
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon}/>
                <span>{item.title}</span>
              </span>
            }
          >
            {this.createMenu(item.children)}
          </SubMenu>
        )
      }
    })
  }

  render(){
    return(
      <div>
        {
          this.createMenu(artistMenu)
        }
      </div>
    )
  }
}