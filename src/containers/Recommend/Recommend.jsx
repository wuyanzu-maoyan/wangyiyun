import React, { Component } from 'react'
import Swiper from 'swiper';
import {Icon} from 'antd';
import _ from 'lodash';
import "swiper/css/swiper.min.css"
import './css/recommend.less';
import { 
  reqMVlist ,
  reqHotCategory,
  reqRecommend,
  reqRiseList,
  reqNewSongs,
  reqOriginalList,
  reqSingerList,
  reqNewList,
} 
from '../../api/index';



export default class Recommend extends Component {
  getMVlist = async () => {
    const data = await reqMVlist();

    const { code, result } = data;

    if (code === 200) {

      this.setState({ mvList: result },() => {
        var mySwiper = new Swiper ('.swiper-container', {
          loop: true, // 循环模式选项
          
        
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        
          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        })
      })

    }
  }
  getCategory = async() => {
    const result = await reqHotCategory();
    const {code,tags} = result;
    if(code===200){
      this.setState({hotCategory:tags.slice(0,5)})
      
    }
  }
  getRecommend = async() => {
    const result = await reqRecommend();
    const {code,playlists} = result;
    if(code===200){
      this.setState({hotRRecommend:playlists})
      
    }
  }
  getSingerList = async() => {
    const result = await reqSingerList();
    const {code,artists} = result;
    
    //console.log(arr);
    if(code===200){
      this.setState({singerList:artists.splice(0,5)});
    }
  }
  getNewLists = async() => {
    const result = await reqNewList();
    const {code,albums} = result;
    if(code===200){
      const arr = _.chunk(albums.splice(0,10),5)
      this.setState({newLists:arr},() => {
        console.log('---');
        new Swiper ('.new-swiper-container', {
          loop: true,  //循环
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          
        })
      })
    }
  }
  getRiseList =  async() => {
    const result = await reqRiseList();
    const {code,playlist} = result;
    if(code===200){
      this.setState({rise:playlist})
      
    }
  }
  getNewSongs =  async() => {
    const result = await reqNewSongs();
    const {code,playlist} = result;
    if(code===200){
      this.setState({new:playlist})
    }
  }
  
  getOriginalList =  async() => {
    const result = await reqOriginalList();
    const {code,playlist} = result;
    if(code===200){
      this.setState({original:playlist})
    }
  }
  
  
  state = {
    mvList: [],
    hotCategory:[],
    hotRRecommend:[],
    rise:{},
    new:{},
    original:{},
    singerList:[],
    newLists:[]
  }
  
  componentDidMount() {
    //获取轮播图数据
    this.getMVlist();
    //分类
    this.getCategory();
    //分类下的内容（热门推荐）
    this.getRecommend();
    //获取入驻歌手
    this.getSingerList();
    //获取新碟上架
    this.getNewLists();
    //获取榜单的三个
    this.getRiseList();
    this.getNewSongs();
    this.getOriginalList();
    
  }
  

  render() {
    return (
      <div className='RecommendContainer'>

        <div className='MVWrapper'>

          <div className="swiper-container">
            <div className="swiper-wrapper">
              {
                this.state.mvList.map((item,index) => {
                  return (
                    <div className="swiper-slide" key={item.id}>
                      <img src={item.picUrl} alt="" />
                    </div>
                  )
                })
              }
              {/* <div className="swiper-slide" >
                111
              </div>
              <div className="swiper-slide" >
                222
              </div>
               */}
              
            </div>


            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <div className="download">
              <a href=""></a>
              <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
            </div>
          </div>




        </div>
        <div className="contentWrapper clearfix">
          <div className="leftWrapper">
            <div className="left">
              <div className="hot">
                <div className="hotNav">
                    <div className='hotTitle'>
                      <div className='titleIcon'></div>
                      <h3>热门推荐</h3>
                    </div>
                    <div className='hotCategory'>
                      {
                        this.state.hotCategory.map((item,index) => {
                          return (
                            <a key={index}>
                              {item.name}
                              <span>|</span>
                            </a>
                            
                          )
                        })
                      }
                      
                      
                    </div>
                    <div className="hotMore">
                        <span >更多</span>
                        <span > > </span>
                    </div>

                </div>
                <div className="playListWrapper">
                <ul>
                  {
                    this.state.hotRRecommend.map((item,index) => {
                      return (
                        <li key={index}>
                          <div className='imgBlock'>
                            <img src={item.coverImgUrl} alt=""/>
                            <div className="bottom">
                              <div className="earPhone"></div>
                              <div className="playCount">{item.playCount}</div>
                              <a className="play" title='播放'><Icon type="play-circle" /></a>
                            </div>
                          </div>
                          <a>{item.name}</a>
                          
                        </li>
                      )
                    })
                  }
                </ul>
                </div>
              </div>
              <div className="new">
                <div className="nav">
                      <div className='title'>
                        <div className='titleIcon'></div>
                        <h3>新碟上架</h3>
                      </div>
                      <div className="more">
                          <span >更多</span>
                          <span > > </span>
                      </div>

                </div>
                <div className="newContent">
                  <div className="inner">

                  <div className="new-swiper-container">
                    <div className="swiper-wrapper">
                      {
                        this.state.newLists.map((list,index) => {
                          return (
                            <div className="swiper-slide" key={index}>
                              {
                                list.map((item) => {
                                  return (
                                    <div className='slideItem' key={item.id}>
                                      <div className="imgBlock"><img src={item.blurPicUrl} alt=""/></div>
                                      <p>{item.name}</p>
                                      <p>{item.artist.name}</p>
                                    </div>
                                  )
                                })
                              }
                            </div>
                          )
                        })
                      }
                    </div>
                    
                    
                    
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    
                    
                </div>
                  </div>
                </div>
              </div>
              <div className="topList">
                <div className="nav">
                    <div className='title'>
                      <div className='titleIcon'></div>
                      <h3>榜单</h3>
                    </div>
                    <div className="more">
                        <span >更多</span>
                        <span > > </span>
                    </div>

                </div>
                <div className="topListContent">

                  <div className="riseList">
                    <div className='playListTitle'>
                      <div className='imgBlock'>
                        <img src={this.state.rise.coverImgUrl} alt=""/>
                      </div>
                      <div>
                        <p><a href="">{this.state.rise.name}</a></p>
                        <div className='titleIcons'>
                          <a href='' title='播放'><Icon type="play-circle" className='play'/></a>
                          <a href='' title='收藏'><Icon type="folder-add" className='collect'/></a>
                        </div>
                        
                        
                      </div>
                      
                    </div>
                      <ul>
                        {
                          this.state.rise.tracks?this.state.rise.tracks.splice(0,10).map((item,index) => {
                            return (
                              <li key={index}>
                                <span className='order'>{index+1}</span>
                                <a href="">
                                  {item.name}
                                </a>
                                <div className='iconList'>
                                  <a href="" title='播放'><Icon type="play-circle" className='iconItem'/></a>
                                  <a href="" title='添加到播放列表'><Icon type="plus-circle" className='iconItem'/></a>
                                  <a href="" title='收藏'><Icon type="folder-add" className='iconItem'/></a>
                                </div>
                              </li>    
                            )
                          }):''
                          
                        }
                        <li className='searchBoth'><a href="">查看全部></a></li>
                        
                      </ul>

                  </div>
                  
                  <div className="newSongs">
                    <div className='playListTitle'>
                      <div className='imgBlock'>
                        <img src={this.state.new.coverImgUrl} alt=""/>
                      </div>
                      <div>
                        <p><a href="">{this.state.new.name}</a></p>
                        <div className='titleIcons'>
                          <a href='' title='播放'><Icon type="play-circle" className='play'/></a>
                          <a href='' title='收藏'><Icon type="folder-add" className='collect'/></a>
                        </div>
                        
                        
                      </div>
                      
                    </div>
                      <ul>
                        {
                          this.state.new.tracks?this.state.new.tracks.splice(0,10).map((item,index) => {
                            return (
                              <li key={index}>
                                <span className='order'>{index+1}</span>
                                <a href="">
                                  {item.name}
                                </a>
                                <div className='iconList'>
                                  <a href="" title='播放'><Icon type="play-circle" className='iconItem'/></a>
                                  <a href="" title='添加到播放列表'><Icon type="plus-circle" className='iconItem'/></a>
                                  <a href="" title='收藏'><Icon type="folder-add" className='iconItem'/></a>
                                </div>
                              </li>    
                            )
                          }):''
                          
                        }
                        <li className='searchBoth'><a href="">查看全部></a></li>
                      </ul>
                    </div>
                  
                  <div className="originalList">
                    <div className='playListTitle'>
                      <div className='imgBlock'>
                        <img src={this.state.original.coverImgUrl} alt=""/>
                      </div>
                      <div>
                        <p><a href="">{this.state.original.name}</a></p>
                        <div className='titleIcons'>
                          <a href='' title='播放'><Icon type="play-circle" className='play'/></a>
                          <a href='' title='收藏'><Icon type="folder-add" className='collect'/></a>
                        </div>
                        
                      </div>
                      
                    </div>
                    <ul>
                        {
                          this.state.original.tracks?this.state.original.tracks.splice(0,10).map((item,index) => {
                            return (
                              <li key={index}>
                                <span className='order'>{index+1}</span>
                                <a href="">
                                  {item.name}
                                </a>
                                <div className='iconList'>
                                  <a href="" title='播放'><Icon type="play-circle" className='iconItem'/></a>
                                  <a href="" title='添加到播放列表'><Icon type="plus-circle" className='iconItem'/></a>
                                  <a href="" title='收藏'><Icon type="folder-add" className='iconItem'/></a>
                                </div>
                              </li>    
                            )
                          }):''
                          
                        }
                        <li className='searchBoth'><a href="">查看全部></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rightWrapper">
            <div className="login">
              <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
              <div className="btn">
                用户登录
              </div>
            </div>
            <div className="singer">
              <div className="rightTitle">
                <h3>入驻歌手</h3>
                <a href="">查看全部></a>
              </div>
              <ul className="singerList">
                {
                  this.state.singerList.map((item,index) => {
                    return (<li className='singerItem' key={item.img1v1Id}>
                      <div className="avator">
                        <img src={item.picUrl} alt=""/>
                      </div>
                      <div className="info">
                        <h4>{item.name}</h4>
                        <span>123</span>
                      </div>
                    </li>)
                  })
                }
                
              </ul>
              <div className="apply">
                申请成为网易音乐人
              </div>
            </div>
            <div className="anchor">
              <div className="rightTitle">
                <h3>热门主播</h3>
                
              </div>
              <ul className="singerList">
              {
                  this.state.singerList.map((item,index) => {
                    return (<li className='singerItem' key={item.img1v1Id}>
                      <div className="avator">
                        <img src={item.picUrl} alt=""/>
                      </div>
                      <div className="info">
                        <h4>{item.name}</h4>
                        <span>123</span>
                      </div>
                    </li>)
                  })
                }
                
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}