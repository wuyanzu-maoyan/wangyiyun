import React,{Component} from 'react'
import './css/rightContent.less'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import dayjs from 'dayjs'
import PubSub from 'pubsub-js'
import {reqCommentList,reqCommentPage,reqSongUrl} from '../../../api'
import {createGetCommentListAction} from '../../../redux/action_creator/topList_action'
import { Pagination } from 'antd';

@connect(state=>({
  topItem:state.topItem,
  topList:state.topList,
  playList: state.topItem.tracks || [],
  total:state.commentObj.total,
  commentList: state.commentObj.commentList || [],
  comments:state.commentObj.comments || []
}),{
  setComments:createGetCommentListAction
})
@withRouter
class RightContent extends Component{
  state={
    currentIndex:0,
    songListId:19723756,
    musicUrl:'',
    isPlay:false,//是否播放
    id:0, //歌曲的id
  }
  componentWillUnmount(){
    PubSub.unsubscribe('getIndex')
  }
  componentDidMount(){

    PubSub.subscribe('getIndex',async(a,{index,id})=>{
      this.setState({songListId:id})
      this.setState({currentIndex:index*1})
      let result = await reqCommentList({id})
      const {code,hotComments,comments,total} = result;
      if(code === 200){
        this.props.setComments({hotComments,comments,total})
      }
    })
  }
  itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return <a> 上一页 </a>;
    }
    if (type === 'next') {
      return <a> 下一页 </a>;
    }
    return originalElement;
  }

  openMusic = async(id=1412242872)=>{
   
    let result = await reqSongUrl(id)
    const {code,data} = result;
    console.log(data[0].url)
    if(code === 200){
      this.setState({musicUrl:data[0].url},()=>{
        this.refs.audio.src = this.state.musicUrl
        this.setState({id})
       if(id === this.state.id){
        this.refs.audio.pause()
       }else {
        this.refs.audio.play()
       }       
      })
    }
  }

  onChange = async(page,pageSize)=>{
    console.log(page,pageSize)
    let {songListId} = this.state
    let result = await reqCommentPage({id:songListId,limit:pageSize,offset:((page-1)*pageSize)})
    const {code,hotComments,comments,total} = result;
    if(code === 200){
    this.props.setComments({hotComments,comments,total})
    }
  } 

  render(){
    let {currentIndex,musicUrl} = this.state;
    let {topItem,topList,playList,total,commentList,comments} = this.props;
    return(
      <div className="kjcRightContent">
      <audio ref="audio" src="">
        
      </audio>
      <div className="kjcContentHeader">
        <div className="kjcImgWrap">
         <img src={topItem.coverImgUrl} alt=""/>
        </div>
        <div className="kjcContentMain">
          <h2>{topItem.name}</h2>
          <div className="kjcContentUser">
            <i className="kjcIcon"></i>
    <span className="kjcUpdateTime">最近更新：{dayjs(topItem.updateTime).format('MM月DD日')}</span>
           <span className="kjcUpdateCount">{topList[currentIndex]?topList[currentIndex].updateFrequency:''}</span>
          </div>
          <div className="kjcBtns">
            <div className="kjcPlay">
              <span onClick={()=>{this.openMusic()}}>
                <em className="ply"></em>
                播放
              </span>
            </div>
            <div className="kjcAdd"></div>
            <div className="kjcCollection"><span>({topItem.subscribedCount})</span></div>
            <div className="kjcShare"><span>({topItem.shareCount})</span></div>
            <div className="kjcDownload"><span>下载</span></div>
            <div className="kjcComment"><span>({topItem.commentCount})</span></div>
          </div>
        </div>
      </div>
      <div className="kjcSongList">
        <div className="kjcTitleWrap">
          <h2 className="kjcTitleName">歌曲列表</h2>
          <span className="kjcOne">{topItem.trackCount}首歌</span>
          <span className="kjcPlayCount">
            播放：
          <span className="kjcCount">{topItem.playCount}</span>
            次
          </span>
        </div>
        <div className="kjcListContent">
          <div className="kjcTableHeader">
            <div className="kjcTemp"><div></div></div>
            <div className="kjcNameTitle"><div>标题</div></div>
            <div className="kjcHowLong"><div>时长</div></div>
            <div className="kjcSinger"><div>歌手</div></div>
          </div>
          <ul className="kjcSongListContent">
            {
               playList.map((item,index)=>{
               if(index<3){
                return (
                  <li className="kjcSongItem" key={item.id}>
                    <div className="kjcNumAndRank">
                <div className="kjcSongNum">{index+1}</div>
                      <div className="kjcSongRank">7</div>
                    </div>
                    <div className="kjcSongContent">
                      <img src={item.al.picUrl} alt=""/>
                      <span className="kjcOpen" onClick={()=>{this.openMusic(item.id,index)}}>&nbsp;&nbsp;</span>
                      <div className="kjcSingerContent">
                          {item.name}&nbsp;
                      </div>
                      {
                      item.alia.map((alia,index)=>{
                        return <span className="kjcOriginSinger" key={index}> - ({alia})</span>
                      })
                      }
                      {
                       item.mv?<div className="kjcMV"></div>:''
                     }
                    </div>
                    <div className="kjcSongTime">
                <span>{`0${parseInt(item.dt/1000/60)}:${(item.dt/1000/60+'').slice(2,4)}`}</span>
                    </div>
                    <div className="kjcSinger">
                      <span>
                      {item.ar[0].name}
                      </span>
                    </div>
                  </li> 
                      )
               }else if(index <= 100){
                return(
                  <li className="kjcSongItem kjcAfter" key={item.id}> 
                  <div className="kjcNumAndRank">
                  <div className="kjcSongNum">{index+1}</div>
                    <div className="kjcSongRank new"></div>
                  </div>
                  <div className="kjcSongContent">
                    <span className="kjcOpen" onClick={()=>{this.openMusic(item.id,index)}}>&nbsp;</span>
                    <div className="kjcSingerContent">
                    {item.name}&nbsp;
                    </div>
                    
                      {
                      item.alia.map((alia,index)=>{
                        return <span className="kjcOriginSinger" key={index}> - ({alia})</span>
                      })
                      }
                      {
                       item.mv?<div className="kjcMV"></div>:''
                     }
                  </div>
                  <div className="kjcSongTime">
                    <span>{`0${parseInt(item.dt/1000/60)}:${(item.dt/1000/60+'').slice(2,4)}`}</span>
                  </div>
                  <div className="kjcSinger">
                    <span>
                    {item.ar[0].name}
                    </span>
                  </div>
                </li>
                    )
               }else{
                 return
               }
              })
            }
          </ul>
        </div>
      </div>
      <div className="kjcCommendContainer">
          <div className="kjcCommendWrap">
            <h2 className="kjcCommendName">评论</h2>
          <span className="kjcCommendCount">共{total}条评论</span>
          </div>
          <div className="kjcCommendContent">
            <div className="kjcWriteCommend">
              <img src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50" alt=""/>
              <div className="kjcCommendBox">
                <textarea className="kjcUserContent" placeholder="评论"></textarea>
                <i className="kjcArrow"></i>
                <div className="kjcUserBtns">
                  <i className="kjcAt"></i>
                  <i className="kjcExp"></i>
                  <span className="kjcWord">140</span>
                  <div className="kjcCommendBtn">评论</div>
                </div>
              </div>
            </div>
            <div className="kjcStarCommend">
              <div className="kjcStarTitle" style={{display:commentList.length?'block':'none'}}>精彩评论</div>
              <ul className="kjcStarList">
                {
                 commentList.map((item,index)=>{
                      return (
                <li className="kjcStarItem" key={item.commentId}>
                  <img src={item.user?item.user.avatarUrl:''} alt=""/>
                  <div className="kjcStarItemContent">
                      <div className="kjcStarTop">
                        <span className="kjcUserName">{item.user.nickname} </span>
                      :<span className="kjcUserContent">{item.content}</span>
                      </div>
                      <div className="kjcStarBtns">
                      <span className="kjcStarTime">{dayjs(item.time).format('HH:mm')}</span>
                        <span className="kjcStarGood">
                          <i></i>
                          <span className="kjcStarCount">({item.likedCount || 0})</span>
                        </span>
                        <i className="kjcTH">|</i>
                        <span className="kjcResponse">回复</span>
                      </div>
                  </div>
                </li> 
                      )
                  })
                }
              </ul>
              <div className="kjcNewTitle" style={{display:comments.length?'block':'none'}}>最新评论 ({total})</div>

              <ul className="kjcStarList">
                {
                  comments.map((item,index)=>{
                      return(
                        <li className="kjcStarItem" key={item.commentId}>
                        <img src={item.user?item.user.avatarUrl:''}  alt=""/>
                        <div className="kjcStarItemContent">
                            <div className="kjcStarTop">
                      <span className="kjcUserName">{item.user.nickname}</span>
                              :<span className="kjcUserContent">{item.content}</span>
                            </div>
                            <div className="kjcStarBtns">
                      <span className="kjcStarTime">{dayjs(item.time).format('HH:mm')}</span>
                              <span className="kjcStarGood">
                                <i></i>
                                <span className="kjcStarCount">({item.likedCount || 0})</span>
                              </span>
                              <i className="kjcTH">|</i>
                              <span className="kjcResponse">回复</span>
                            </div>
                        </div>
                      </li> 
                      )
                   
                  })
                }
              </ul>
              
            </div>
            <Pagination onChange={this.onChange} pageSize={20} size='middle' style={{marginLeft:'130px'}} total={total} itemRender={this.itemRender} />

          </div>
     
      </div>
     
    </div>
    )
  }
}

export default RightContent