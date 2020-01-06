import React,{Component} from 'react'
import './css/header.less';
export default class MyComponent extends Component{
  render(){
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
              <ul>
                  <li className="active">推荐</li>
                  <li>排行榜</li>
                  <li>歌单<i className="kjcR"></i></li>
                  <li>主播电台</li>
                  <li>歌手</li>
                  <li>新碟上架</li>
                  
              </ul>
          </div>
      </nav>
  </div>
    )
  }
}