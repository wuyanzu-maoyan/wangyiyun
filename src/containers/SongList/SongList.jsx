import React,{Component} from "react"
import './SongList.less'

export default class SongList extends Component{
  render(){
    return(
      <div id="wjContainer">
        <div className="wjBody">
          <div className="wjTitle">
            <h3>
              <span>全部</span>
              <a href="javascript:;">
                <i>选择分类</i>
              </a>
            </h3>
            <div className="wjBtn"><a href="#">热门</a></div>
          </div>
          <div className="wjBox">
            <div className="wjHd">
              <i></i>
            </div>
            <div className="wjBd">
              <h3><a href="#">全部风格</a></h3>
              <dl>
                <dt><i className="icon1"></i>语种</dt>
                <dd>
                  <a href="#">华语</a>
                  <span>|</span>
                  <a href="#">欧美</a>
                  <span>|</span>
                  <a href="#">日语</a>
                  <span>|</span>
                  <a href="#">韩语</a>
                  <span>|</span>
                  <a href="#">粤语</a>
                  <span>|</span>
                </dd>
              </dl>
              <dl>
                <dt><i className="icon2"></i>风格</dt>
                <dd>
                  <a href="#">流行</a>
                  <span>|</span>
                  <a href="#">摇滚</a>
                  <span>|</span>
                  <a href="#">民谣</a>
                  <span>|</span>
                  <a href="#">电子</a>
                  <span>|</span>
                  <a href="#">舞曲</a>
                  <span>|</span>
                  <a href="#">舞曲</a>
                  <span>|</span>
                  <a href="#">舞曲</a>
                  <span>|</span>
                  <a href="#">舞曲</a>
                  <span>|</span>
                  <a href="#">舞曲</a>
                  <span>|</span>
                  <a href="#">舞曲</a>
                  <span>|</span>
                  <a href="#">舞曲</a>
                  <span>|</span>
                  <a href="#">舞曲</a>
                  <span>|</span>
                  <a href="#">舞曲</a>
                  <span>|</span>
                  <a href="#">舞曲</a>
                  <span>|</span>
                  <a href="#">舞曲</a>
                  <span>|</span>
                  <a href="#">舞曲</a>
                  <span>|</span>
                  <a href="#">舞曲</a>
                  <span>|</span>
                  <a href="#">舞曲</a>
                  <span>|</span>
                  <a href="#">舞曲</a>
                  <span>|</span>
                  <a href="#">舞曲</a>
                  <span>|</span>
                  <a href="#">舞曲</a>
                  <span>|</span>
                  <a href="#">舞曲</a>
                  <span>|</span>
                  <a href="#">舞曲</a>
                  <span>|</span>
                </dd>
              </dl>
              <dl>
                <dt><i className="icon3"></i>场景</dt>
                <dd>
                  <a href="#">华语</a>
                  <span>|</span>
                  <a href="#">欧美</a>
                  <span>|</span>
                  <a href="#">日语</a>
                  <span>|</span>
                  <a href="#">韩语</a>
                  <span>|</span>
                  <a href="#">粤语</a>
                  <span>|</span>
                  <a href="#">舞曲</a>
                  <span>|</span>
                  <a href="#">舞曲</a>
                  <span>|</span>
                  <a href="#">舞曲</a>
                  <span>|</span>
                  <a href="#">舞曲</a>
                  <span>|</span>
                  <a href="#">舞曲</a>
                  <span>|</span>
                  <a href="#">舞曲</a>
                  <span>|</span>
                  <a href="#">舞曲</a>
                  <span>|</span>
                </dd>
              </dl>
              <dl>
                <dt><i className="icon4"></i>情感</dt>
                <dd>
                  <a href="#">华语</a>
                  <span>|</span>
                  <a href="#">欧美</a>
                  <span>|</span>
                  <a href="#">日语</a>
                  <span>|</span>
                  <a href="#">韩语</a>
                  <span>|</span>
                  <a href="#">粤语</a>
                  <span>|</span>
                  <a href="#">粤语</a>
                  <span>|</span>
                  <a href="#">粤语</a>
                  <span>|</span>
                  <a href="#">粤语</a>
                  <span>|</span>
                  <a href="#">粤语</a>
                  <span>|</span>
                  <a href="#">粤语</a>
                  <span>|</span>
                  <a href="#">粤语</a>
                  <span>|</span>
                  <a href="#">粤语</a>
                  <span>|</span>
                </dd>
              </dl>
              <dl>
                <dt><i className="icon5"></i>主题</dt>
                <dd className="last">
                  <a href="#">华语</a>
                  <span>|</span>
                  <a href="#">欧美</a>
                  <span>|</span>
                  <a href="#">日语</a>
                  <span>|</span>
                  <a href="#">韩语</a>
                  <span>|</span>
                  <a href="#">粤语</a>
                  <span>|</span>
                  <a href="#">粤语</a>
                  <span>|</span>
                  <a href="#">粤语</a>
                  <span>|</span>
                  <a href="#">粤语</a>
                  <span>|</span>
                  <a href="#">粤语</a>
                  <span>|</span>
                  <a href="#">粤语</a>
                  <span>|</span>
                  <a href="#">粤语</a>
                  <span>|</span>
                  <a href="#">粤语</a>
                  <span>|</span>
                  <a href="#">粤语</a>
                  <span>|</span>
                  <a href="#">粤语</a>
                  <span>|</span>
                  <a href="#">粤语</a>
                  <span>|</span>
                  <a href="#">粤语</a>
                  <span>|</span>
                  <a href="#">粤语</a>
                  <span>|</span>
                </dd>
              </dl>
            </div>
            <div className="wjFt"></div>
          </div>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    )
  }
}