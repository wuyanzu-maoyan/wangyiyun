import React,{Component} from 'react'
import './css/header.less';
import {NavLink} from 'react-router-dom'
export default class Header extends Component{
  state={
    routeList:[
     {
      name:'推荐',
      path:'/recommend'
      }, 
     {
       name:'排行榜',
       path:'/toplist'
     },
     {
       name:'歌单',
       path:'/songlist'
     },
     {
       name:'主播电台',
       path:'/radio'
     },
     {
       name:'歌手',
       path:'/singer'
     },
     {
       name:'新碟上架',
       path:'/new'
     }
    ]
    
  }
  checkActive(event){
    console.log(event)
  }
  render(){
    let {routeList} = this.state
    return (
    <div className="kjcTop">
      <div className="kjcTopBar w">
        <div className="kjcW">
        <div className="kjcLogo">
            <div className="kjcTitle">网易云音乐</div>
        </div>
          <ul className="kjcCenterBar">
              <li className="active">发现音乐</li>
              <li>我的音乐</li>
              <li>朋友</li>
              <li>商城</li>
              <li>音乐人</li>
              <li>下载客户端</li>
              <div className="kjcHot"></div>
              <div className="kjcArrow"></div>
          </ul> 
          <div className="kjcSearch">
                  <i className="iconfont icon-sousuo"></i>
                  <input type="text" placeholder="音乐/视频/电台/用户"/>
          </div>
          <div className="kjcCenter">创作者中心</div>
          <div className="kjcLogin">
              登录
          </div>
        </div>
      </div>
      <nav className="kjcNav  clearfix">
          <div className="kjcNavRed w">
          {/* <i className="kjcR"></i> */}
              <ul>
                {
                    routeList.map((item,index)=>{
                    if(index===2){
                      return <NavLink key={index} to={item.path}><li  onClick={this.checkActive}>{item.name}<i className="kjcR"></i></li></NavLink>
                     }else{
                      return <NavLink key={index}  to={item.path}> <li onClick={this.checkActive}>{item.name}</li></NavLink>
                      }
                    })
                }
              </ul>
          </div>
      </nav>
  </div>
    )
  }
}