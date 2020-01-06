import React,{Component} from 'react'
import './css/header.less';
export default class MyComponent extends Component{
  render(){
    return (
    <div className="top">
      <div className="top-bar w clearfix">
        <div className="logo"></div>
          <ul className="center-bar">
              <li id="light"><a href="#11">发现音乐</a></li>
              <li><a href="#111">我的音乐</a></li>
              <li><a href="#11">朋友</a></li>
              <li><a href="#11">商城</a></li>
              <li><a href="#11">音乐人</a></li>
              <li><a href="#11">下载客户端</a></li>
          </ul>
          <div className="denglu"><i className="iconfont icon-ln_jiantouxia"></i>
              <a href="#1">登录</a>
              <div className="down1">
                  <div className="sanjiao"></div>
                  <ul>
                      <li><i className="iconfont icon-shouji"></i><a href="#1">手机号登录</a></li>
                      <li><i className="iconfont icon-weixin"></i><a href="#1">微信登录</a></li>
                      <li><i className="iconfont icon-qq"></i><a href="#1">QQ登录</a></li>
                      <li><i className="iconfont icon-xinlang"></i><a href="#1">新浪微博登录</a></li>
                      <li><i className="iconfont icon-airudiantubiaohuizhi-zhuanqu_yiwutong"></i><a href="#1">网易邮箱账号登录</a></li>
                  </ul>
              </div>
          </div>
          <div className="chuangzuozhe"><a href="#1">创作者中心</a></div>
          <div className="search">
              <form action="#1">
                  <i className="iconfont icon-sousuo"></i>
                  <input type="text" placeholder="音乐/视频/电台/用户"/>
              </form>
          </div>
      </div>
      <nav className="nav-all clearfix">
          <div className="nav-red w">
              <span className="sanjiao2"></span>
              <ul>
                  <li><a className="tuijian" href="#1">推荐</a></li>
                  <li><a href="#1">排行榜</a></li>
                  <li><a href="#1">歌单</a></li>
                  <li><a href="#1">主播电台</a></li>
                  <li><a href="#1">歌手</a></li>
                  <li><a href="#1">新碟上架</a></li>
              </ul>
          </div>
      </nav>
  </div>
    )
  }
}