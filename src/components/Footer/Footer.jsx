import React,{Component} from 'react';
import './css/footer.less';
import PubSub from 'pubsub-js'

export default class Footer extends Component{
    state={
        isShow:false,
        songData:{},
        songCount:0,
        songUrl:'',
        isPlay:false,
        time:0
    }
    show=(type)=>{
       if(type){
           this.setState({isShow:false})
       }else{
        this.setState({isShow:true})
       }
    }
    play=()=>{
        let {isPlay,songData} = this.state
        this.setState({isPlay:!isPlay},()=>{
            PubSub.publish('playOrPause',!isPlay)
        })
        if(isPlay){
            this.refs.playLine.style.width = '493px';
            this.refs.playLine.style.transition = songData.dt/1000 + 's';
            this.refs.point.style.left =  '486px'
            this.refs.point.style.transition = songData.dt/1000 + 's';
            this.timer = setInterval(()=>{
                if(this.state.time >= songData.dt){
                    clearInterval(this.timer)
                }
                this.setState({
                    time:this.state.time+1000
                })
            },1000)
            
        }else{
            this.refs.playLine.style.transition = '0s';
            this.refs.playLine.style.width = '0px';
            this.refs.point.style.transition = '0s';
            this.refs.point.style.left = '-8px'
            clearInterval(this.timer)
        }
       
    }
    componentDidMount(){
        PubSub.subscribe('getSong',(name,{url,song})=>{
            
           
            if(url !== this.state.songUrl){
                this.setState({
                    songCount:this.state.songCount+1
                })
            }
            this.setState({
                isShow:true,
                songUrl:url,
                songData:song,
                isPlay:true
            })
            this.refs.playLine.style.width = '493px';
            this.refs.playLine.style.transition = song.dt/1000 + 's';
            this.refs.point.style.left = '486px'
            this.refs.point.style.transition = song.dt/1000 + 's';
           
         
           
        })
    }
  render(){
      let {isShow,songData,songCount,isPlay,time} = this.state
    return (
    <div className="footer">
      <div className="footer-wrap w1 clearfix">
          <div className="copy">
              <p className="fuwutiaokuan">
                  <a href="#1">服务条款</a><i>|</i><a href="#1">隐私政策</a><i>|</i><a href="#1">版权投诉指引</a><i>|</i><a href="#1">意见反馈</a><i>|</i>
              </p>
              <p className="wangyi">
                  <span>网易公司版权所有&copy;1997-2019</span>
                  <span>杭州乐读科技有限公司运营：</span><a href="#1">浙网文[2018]3506-263号</a>
              </p>

              <p className="jubao">
                  <span>违法和不良信息举报电话：0571-89853516</span><span>举报邮箱：</span><a href="#1">ncm5990@163.com</a>
              </p>


          </div>
          <ul className="yonghurenzheng">
              <li id="yonghu"><i></i><span></span></li>
              <li id="duli"><i></i><span></span></li>
              <li id="zanshang"><i></i><span></span></li>
              <li id="shipin"><i></i><span></span></li>
          </ul>

      </div>
        <div  className={`kjcPlaye ${isShow?'':"hidden"}`} onMouseEnter={()=>{this.show(false)}} onMouseLeave={()=>{this.show(true)}}>
            <div className="w">
                <div className="kjcFooterBtns">
                    <span className="kjcPreSong"></span>
                    <span  className={`kjcPlay ${isPlay?'active':''}`} onClick={this.play}></span>
                    <span className="kjcNextSong"></span>
                </div>
                <div className="kjcMusicImg">
                    <span></span>
                    <img src={(songData.al && songData.al.picUrl) || 'http://s4.music.126.net/style/web2/img/default/default_album.jpg'} alt=""/>
                </div>
                <div className="kjcPlayLine">
                    <div className="kjcPlayTemp">
                 <span className="kjcSingerName">{songData.name}</span>
                        {
                            songData.ar && songData.ar.map((al,i)=>{
                                return (
                                <span key={i} className="kjcSongName">{al.name} </span>
                                )
                            })
                        }
                    </div>
                    <span className="kjcPL" ref='playLine'></span>
                    <span className={`kjcLine ${isPlay?'active':''}`}>
                        
                    </span>
                    <span className="kjcPoint" ref='point'></span>
                    <span className="kjcPlayTime">
                        <span>{`0${parseInt(time/1000/60)}:${(time/1000/60+'').slice(2,4)}` || '00:00'}</span> / {`0${parseInt(songData.dt/1000/60)}:${(songData.dt/1000/60+'').slice(2,4)}` || '00:00'}
                    </span>
                </div>
                <div className="kjcOper">
                    <span className="kjcOper1"></span>
                    <span className="kjcOper2"></span>
                </div>
                <div className="kjcPlayControl">
                    <div className="kjcVoice"></div>
                    <div className="kjcLoop"></div>
                    <div className="kjcList">
                    <span>{songCount}</span>
                    </div>
                </div>
            </div>

            <div className={`kjcLeftIcon ${isShow?'':"hidden"}`}>
                <span  className={`kjcPlayIcon ${isShow?'':"hidden"}`}></span>
            </div>
        </div>
           
        
  </div>
    )
  }
}