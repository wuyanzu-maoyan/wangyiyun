import React,{Component} from 'react'
import {NavLink,Switch,Route,Redirect} from 'react-router-dom'
import Artist from './Artist/Artist.jsx'
import Signed from './Signed/Signed.jsx'
import Cat from './Cat/Cat.jsx'
import './css/Singer.less'


export default class Singer extends Component{
  render(){
    return(
      <div className="zxSingerContainer">
        <div className="zxSinger clearfix">
          <div className="zxLeftNavContainer">
            <div className="zxLeftNav">
              <div className="zxLeftNavList">
                <p>推荐</p>
                <ul>
                  <li className="active">
                    <NavLink to="/singer/artist">推荐歌手</NavLink>
                  </li>
                  <li>
                    <NavLink to="/singer/signed">入驻歌手</NavLink>
                  </li>
                </ul>
                <p className="line"></p>
              </div>
              <div className="zxLeftNavList">
                <p>华语</p>
                <ul>
                  <li>
                    <NavLink to="/singer/cat">华语男歌手</NavLink>
                  </li>
                  <li>
                    <NavLink to="/singer/cat">华语女歌手</NavLink>
                  </li>
                  <li>
                    <NavLink to="/singer/cat">华语组合/乐队</NavLink>
                  </li>
                </ul>
                <p className="line"></p>
              </div>
              <div className="zxLeftNavList">
                <p>欧美</p>
                <ul>
                  <li>
                    <NavLink to="/singer/cat">欧美男歌手</NavLink>
                  </li>
                  <li>
                    <NavLink to="/singer/cat">欧美女歌手</NavLink>
                  </li>
                  <li>
                    <NavLink to="/singer/cat">欧美组合/乐队</NavLink>
                  </li>
                </ul>
                <p className="line"></p>
              </div>
              <div className="zxLeftNavList">
                <p>日本</p>
                <ul>
                  <li>
                    <NavLink to="/singer/cat">日本男歌手</NavLink>
                  </li>
                  <li>
                    <NavLink to="/singer/cat">日本女歌手</NavLink>
                  </li>
                  <li>
                    <NavLink to="/singer/cat">日本组合/乐队</NavLink>
                  </li>
                </ul>
                <p className="line"></p>
              </div>
              <div className="zxLeftNavList">
                <p>韩国</p>
                <ul>
                  <li>
                    <NavLink to="/singer/cat">韩国男歌手</NavLink>
                  </li>
                  <li>
                    <NavLink to="/singer/cat">韩国女歌手</NavLink>
                  </li>
                  <li>
                    <NavLink to="/singer/cat">韩国组合/乐队</NavLink>
                  </li>
                </ul>
                <p className="line"></p>
              </div>
              <div className="zxLeftNavList">
                <p>其他</p>
                <ul>
                  <li>
                    <NavLink to="/singer/cat">其他男歌手</NavLink>
                  </li>
                  <li>
                    <NavLink to="/singer/cat">其他女歌手</NavLink>
                  </li>
                  <li>
                    <NavLink to="/singer/cat">其他组合/乐队</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="zxRightContainer">
            <Switch>
              <Route path="/singer/artist" component={Artist}/>
              <Route path="/singer/signed" component={Signed}/>
              <Route path="/singer/cat" component={Cat}/>
              <Redirect to="/singer/artist"/>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}