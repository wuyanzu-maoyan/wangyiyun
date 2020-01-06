import React,{Component} from 'react'
import './css/header.less';
import logo from '../../static/img/topbar.png'
export default class MyComponent extends Component{
  render(){
    return (
    <div className="kjcTop">
      <div className="kjcTopBar w clearfix">
        <div class="kjcLogo">
            <div class="kjcLogoImg"></div>
            <div class="kjcTitle">网易云音乐</div>
        </div>
          <ul className="kjcCenterBar">
              <li id="light"><a href="#11">发现音乐</a></li>
              <li>我的音乐</li>
              <li>朋友</li>
              <li>商城</li>
              <li>音乐人</li>
              <li>下载客户端</li>
          </ul>
          <div className="kjcLogin">
              <i className="iconfont icon-ln_jiantouxia"></i>
              <span class="kjcLoginBtn">登录</span>
          </div>
          <div className="kjcCenter">创作者中心</div>
          <div className="kjcSearch">
                  <i className="iconfont icon-sousuo"></i>
                  <input type="text" placeholder="音乐/视频/电台/用户"/>
          </div>
      </div>
      <nav className="kjcNav clearfix">
          <div className="kjcNavRed w">
              <span className="arrow"></span>
              <ul>
                  <li>推荐</li>
                  <li>排行榜</li>
                  <li>歌单</li>
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