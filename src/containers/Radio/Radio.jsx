import React,{Component} from 'react'
import {Icon} from 'antd'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import {
  reqRadioCategories,
  reqRadioRecommends,
  reqRadioPlayList,
  reqRadioHot
} from '../../api'

import './radio.less'



export default class Radio extends Component{
  state = {
    categories1:[],  //电台分类第1页
    categories2:[],  //电台分类第2页
    recommends:[],  //推荐电台
    playList: [],  //节目排行榜
    music: [],  //音乐故事 电台
    meiwen: [],  //美文读物 电台
    tuokouxiu: [],  //脱口秀 电台
    qinggan: [],  //情感调频 电台
    chuangzuo: [],  //创作翻唱 电台
    renwen: [],  //人文历史 电台
    activeIndex: -1,  //电台分类选中的index
  }

   //获取 电台分类
  getRadioCategories = async ()=>{
    let result = await reqRadioCategories()
    // console.log(result);
    if (result.code===200) {
      const categories1 = result.categories.slice(0,18)
      const categories2 = result.categories.slice(18,20)
      this.setState({
        categories1,
        categories2
      })
    }
  }
  //获取 电台推荐
  getRadioRecommends = async ()=>{
    let result = await reqRadioRecommends()
    // console.log(result);
    if (result.code===200) {
      this.setState({
        recommends: result.djRadios
      })
    }
  }
  //获取 节目排行榜
  getRadioPlayList = async()=>{
    let result = await reqRadioPlayList(10)
    // console.log(result);
    if(result.code === 200){
      const playList = result.toplist
      this.setState({
        playList
      })
    }
  }
  //获取 类别热门电台
  getRadioHot = async()=>{
    //请求音乐故事 电台
    let musicResult = await reqRadioHot(2,1) //请求回来6条数据
    // console.log(musicResult);
    if(musicResult.code === 200){
      const music = musicResult.djRadios.slice(0,4)
      this.setState({
        music
      })
    }
    //请求美文读物 电台
    let meiwenResult = await reqRadioHot(6,1) //请求回来6条数据
    // console.log(meiwenResult);
    if(meiwenResult.code === 200){
      const meiwen = meiwenResult.djRadios.slice(0,4)
      this.setState({
        meiwen
      })
    }
    //请求脱口秀 电台
    let tuokouxiuResult = await reqRadioHot(5,1) //请求回来5条数据
    // console.log(tuokouxiuResult);
    if(tuokouxiuResult.code === 200){
      const tuokouxiu = tuokouxiuResult.djRadios.slice(0,4)
      this.setState({
        tuokouxiu
      })
    }
    //请求情感调频 电台
    let qingganResult = await reqRadioHot(3,1) //请求回来8条数据
    // console.log(qingganResult);
    if(qingganResult.code === 200){
      const qinggan = qingganResult.djRadios.slice(0,4)
      this.setState({
        qinggan
      })
    }
    //请求创作|翻唱 电台
    let chuangzuoResult = await reqRadioHot(2001,1) //请求回来6条数据
    // console.log(chuangzuoResult);
    if(chuangzuoResult.code === 200){
      const chuangzuo = chuangzuoResult.djRadios.slice(0,4)
      this.setState({
        chuangzuo
      })
    }
    //请求人文历史 电台
    let renwenResult = await reqRadioHot(11,1) //请求回来5条数据
    // console.log(renwenResult);
    if(renwenResult.code === 200){
      const renwen = renwenResult.djRadios.slice(0,4)
      this.setState({
        renwen
      })
    }
  }
  
  componentDidMount(){
    //轮播图
    new Swiper('.swiper-container',{
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      //前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      observer:true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents:true,//修改swiper的父元素时，自动初始化swiper
    })

    //请求radio
    this.getRadioCategories()  //请求电台分类
    this.getRadioRecommends()  //请求热门电台
    this.getRadioPlayList() //请求节目排行榜
    this.getRadioHot() //根据id请求类别热门电台
  }
  
  //切换分类高亮状态
  toggleActiveType(index,id){
    console.log(111);
    console.log('id',id);
    console.log(222);
    this.setState({
      activeIndex: index
    })
    window.location.href=`https://music.163.com/#/discover/djradio/category?id=${id}`  //在当前窗口跳转
    // window.open('about:blank').location.href=`https://music.163.com/#/discover/djradio/category?id=${id}` //打开新窗口
  }
  
  render(){
    let {categories1,categories2,recommends,playList,music,meiwen,tuokouxiu,qinggan,chuangzuo,renwen} = this.state
    return (
      <div id='radioContainer'>
        <div className="radioBg">
          <div className="radioWrap">
            <div className="swiper-container radioTypes">
              {/* 电台分类 */}
              <div className="swiper-wrapper typeBoxes">
                <ul className="swiper-slide page pageOne">
                  {
                    categories1.map((category,index) => {
                      return <li key={index} onClick={() => this.toggleActiveType(index,category.id)} className={index === this.state.activeIndex ? "activeType" : ""}>
                        <div className="img">
                          <img src={category.picWebUrl} alt=""/>
                        </div>
                        <span>{category.name}</span>
                      </li>
                    })
                  }
                </ul>
                <ul className="swiper-slide page pageTwo" style={{marginLeft:'6px'}}>
                  {
                    categories2.map((category,index) => {
                      return <li key={index} onClick={() => this.toggleActiveType(index,category.id)} className={index === this.state.activeIndex ? "activeType" : ""}>
                        <div className="img">
                          <img src={category.picWebUrl} alt=""/>
                        </div>
                        <span>{category.name}</span>
                      </li>
                    })
                  }
                  <li onClick={()=> window.location.href='https://music.163.com/#/topic?id=18652232'}>
                    <div className="img">
                      <Icon type="exception" style={{fontSize:'30px', lineHeight:'48px'}}/>
                    </div>
                    <span>常见问题</span>
                  </li>
                  <li style={{color: '#6ABCE9'}}>
                    <div className="img">
                      <Icon type="question-circle" style={{fontSize:'30px', lineHeight:'48px'}}/>
                    </div>
                    <span>我要做主播</span>
                  </li>
                </ul>
              </div>
              {/* <!-- 如果需要分页器 --> */}
              <div className="dots swiper-pagination"></div>

              {/* <!-- 如果需要导航按钮 --> */}
              <div className="turn swiper-button-prev"></div>
              <div className="turn swiper-button-next"></div>
            </div>
            <div className="radioPlay">
              {/* 推荐节目 */}
              <div className="play recommend">
                <div className="title">
                  <h3>推荐节目</h3>
                  <span>更多 > </span>
                </div>
                <ul className="list">
                  {
                    recommends.map((recommend,index)=>{
                      return <li key={index}>
                        <img src={recommend.picUrl} alt=""/>
                        <div className="middle">
                          <h3>{recommend.name}</h3>
                          <p>{recommend.rcmdtext}</p>
                        </div>
                        <div className="btn">{recommend.category}</div>
                      </li>
                    })
                  }
                </ul>
              </div>
              {/* 节目排行榜 */}
              <div className="play playList">
                <div className="title">
                  <h3>节目排行榜</h3>
                  <span>更多 > </span>
                </div>
                <ul className="list">
                  {
                    playList.map((play,index) =>{
                      return <li key={index}>
                        <div className="rank">
                          <p>{play.rank}</p>
                          <span>- 0</span>
                        </div>
                        <img src={play.program.coverUrl} alt="图片"/>
                        <div className="middle">
                          <h3>{play.program.name}</h3>
                          <p>{play.program.radio.name}</p>
                        </div>
                        <div className="len">
                          <i style={{width: `${(play.score)/300000*100}%`}}></i>
                        </div>
                      </li>
                    })
                  }
                </ul>
              </div>
            </div>
            {/* 音乐故事 电台 */}
            <div className="radio musicStory">
              <div className="title">
                <h3>音乐故事 . 电台</h3>
                <span>更多></span>
              </div>
              <ul className="radioList musicList">
                {
                  music.map((music,index)=>{
                    return <li key={index}>
                      <img src={music.picUrl} alt=""/>
                      <div className="radioInfo">
                        <h3>{music.name}</h3>
                        <p>{music.rcmdtext}</p>
                      </div>
                    </li>
                  })
                }
              </ul>
            </div>
            {/* 美文读物 电台 */}
            <div className="radio meiwen">
              <div className="title">
                <h3>美文读物 . 电台</h3>
                <span>更多></span>
              </div>
              <ul className="radioList meiwenList">
                {
                  meiwen.map((meiwen,index)=>{
                    return <li key={index}>
                      <img src={meiwen.picUrl} alt=""/>
                      <div className="radioInfo">
                        <h3>{meiwen.name}</h3>
                        <p>{meiwen.rcmdtext}</p>
                      </div>
                    </li>
                  })
                }
              </ul>
            </div>
            {/* 脱口秀 电台 */}
            <div className="radio tuokouxiu">
              <div className="title">
                <h3>脱口秀 . 电台</h3>
                <span>更多></span>
              </div>
              <ul className="radioList tuokouxiuList">
                {
                  tuokouxiu.map((tuokouxiu,index)=>{
                    return <li key={index}>
                      <img src={tuokouxiu.picUrl} alt=""/>
                      <div className="radioInfo">
                        <h3>{tuokouxiu.name}</h3>
                        <p>{tuokouxiu.rcmdtext}</p>
                      </div>
                    </li>
                  })
                }
              </ul>
            </div>
            {/* 情感调频 电台 */}
            <div className="radio qinggan">
              <div className="title">
                <h3>情感调频 . 电台</h3>
                <span>更多></span>
              </div>
              <ul className="radioList qingganList">
                {
                  qinggan.map((qinggan,index)=>{
                    return <li key={index}>
                      <img src={qinggan.picUrl} alt=""/>
                      <div className="radioInfo">
                        <h3>{qinggan.name}</h3>
                        <p>{qinggan.rcmdtext}</p>
                      </div>
                    </li>
                  })
                }
              </ul>
            </div>
            {/* 创作翻唱 电台 */}
            <div className="radio chuangzuo">
              <div className="title">
                <h3>创作|翻唱 . 电台</h3>
                <span>更多></span>
              </div>
              <ul className="radioList chuangzuoList">
                {
                  chuangzuo.map((chuangzuo,index)=>{
                    return <li key={index}>
                      <img src={chuangzuo.picUrl} alt=""/>
                      <div className="radioInfo">
                        <h3>{chuangzuo.name}</h3>
                        <p>{chuangzuo.rcmdtext}</p>
                      </div>
                    </li>
                  })
                }
              </ul>
            </div>
            {/* 人文历史 电台 */}
            <div className="radio renwen">
              <div className="title">
                <h3>人文历史 . 电台</h3>
                <span>更多></span>
              </div>
              <ul className="radioList renwenList">
                {
                  renwen.map((renwen,index)=>{
                    return <li key={index}>
                      <img src={renwen.picUrl} alt=""/>
                      <div className="radioInfo">
                        <h3>{renwen.name}</h3>
                        <p>{renwen.rcmdtext}</p>
                      </div>
                    </li>
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
// export default Radio