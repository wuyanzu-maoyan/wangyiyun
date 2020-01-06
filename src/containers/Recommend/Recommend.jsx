import React,{Component} from 'react'
import ReactSwiper from 'reactjs-swiper';
import './css/recommend.less';

  const items = [{
    image: 'http://p1.music.126.net/PvPaeBY5XDWGc26OelLkXg==/109951164608076954.jpg?imageView&quality=89',
    title: '老友记',
    link: 'http://jd.com'
  }, {
    image: 'http://p1.music.126.net/Z_8_TXc-2f3Lg6ri_MZrRQ==/109951164607999001.jpg?imageView&quality=89',
    title: '羡慕',
  }, {
    image: 'http://p1.music.126.net/2IBjQZ8tjaZklwLEGtpw7A==/109951164607129325.jpg?imageView&quality=89',
    title: 'yung',
    link: 'http://jd.com'
  }, {
    image: 'http://p1.music.126.net/A6Pl5Z6SR5CWTmKzUUl2lg==/109951164607168108.jpg?imageView&quality=89',
    title: '赤脚追光',
  }];
 
  const swiperOptions = {
    preloadImages: true,
    autoplay: 4000,
    autoplayDisableOnInteraction: false
  };

export default class Recommend extends Component{
  componentDidMount(){

  }
  render(){
    return (
      <div className='RecommendContainer'>
        <ReactSwiper swiperOptions={swiperOptions}  items={items}
                 className="swiper-wrapper" className="recommendMV"/>
                 
        <div className='wrapper'>
          <ReactSwiper swiperOptions={swiperOptions} showPagination items={items}
                className="swiper-small" />
          <div className="download">
          
          </div>
        </div>
        
      </div>
    )
  }
}