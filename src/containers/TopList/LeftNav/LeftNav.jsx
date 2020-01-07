import React,{Component} from 'react';
import {connect} from 'react-redux'
import './css/leftNav.less'
import {NavLink} from 'react-router-dom'
import {reqTopItem} from '../../../api'
import {createGetTopItemAction} from '../../../redux/action_creator/topList_action'
import PubSub from 'pubsub-js';

@connect(
  state => ({topList:state.topList}),{
    setTopItem:createGetTopItemAction
  }
)
class LeftNav extends Component{
  state={
    topListArr:[ //根据下标发请求
  "云音乐新歌榜",

  "云音乐热歌榜",
  
  "网易原创歌曲榜",
  
  "云音乐飙升榜",
  
  "云音乐电音榜",
  
  "UK排行榜周榜",
  
  "美国Billboard周榜",
  
  "KTV嗨榜",
  
  "iTunes榜",
  
  "Hit FM Top榜",
  
  "日本Oricon周榜",
  
  "韩国Melon排行榜周榜",
  
  "韩国Mnet排行榜周榜",
  
  "韩国Melon原声周榜",
  
  "中国TOP排行榜(港台榜)",
  
  "中国TOP排行榜(内地榜)",
  
  "香港电台中文歌曲龙虎榜",
  
  "华语金曲榜",
  
  "中国嘻哈榜",
  
  "法国 NRJ EuroHot 30周榜",
  
  "台湾Hito排行榜",
  
  "Beatport全球电子舞曲榜",
  
  "云音乐ACG音乐榜",
  
  "云音乐说唱榜",
  
  "云音乐古典音乐榜",
  
  "云音乐电音榜",
  
  "抖音排行榜",
  
  "新声榜",
  
  "云音乐韩语榜",
  
  "英国Q杂志中文版周榜",
  
  "电竞音乐榜",
  
  "云音乐欧美热歌榜",
  
  "云音乐欧美新歌榜",
  
  "说唱TOP榜",  
    ],
    currentIndex:'' //显示的下标
  }
  getTopItem=async(name,index1,id)=>{
    let topListArr = [...this.state.topListArr]
   let idx = ''
   idx = topListArr.findIndex((item,index)=>{
      return item === name
    })
    console.log(idx)
    if(idx !== -1){
     let result = await reqTopItem(idx)
     const {code,playlist} = result;
     if(code === 200){
       console.log(playlist)
      this.props.setTopItem(playlist)
      PubSub.publish('getIndex',{index:index1,id})
     }
    }
  }
  componentDidMount(){
   
  }
  render(){
    let {topList} = this.props
    return(
    <div className="kjcLeftNav">
      <div className="kjcFeatureList">
        <h2>云音乐特色榜</h2>
        <ul>
          {
            topList.map((item,index)=>{
            if(index<4){
         return  (
          <NavLink key={item.id} to={`/toplist/rc/${item.name}`} onClick={()=>{this.getTopItem(item.name,index,item.id)}} >
            <li>
          <img src={item.coverImgUrl} alt=""/>
          <div className="kjcFeatureItem">
              <div className="kjcFeatureTitle">{item.name}</div>
              <div className="kjcFeatureUpdate">{item.updateFrequency}</div>
          </div>
        </li>
          </NavLink>
         )}})     
        }
        </ul>
      </div>
      <div className="kjcGlobalList">
        <h2>全球媒体榜</h2>
        <ul>
          {
            topList.map((item,index)=>{
              if(index >= 4){
                return (
             <NavLink  key={item.id} to={`/toplist/rc/${item.name}`} onClick={()=>{this.getTopItem(item.name,index)}}>
                <li>
                <img src={item.coverImgUrl} alt=""/>
                <div className="kjcGlobalItem">
                <div className="kjcGlobalTitle">{item.name}</div>
                  <div className="kjcGlobalUpdate">{item.updateFrequency}</div>
                </div>
              </li> 
             </NavLink>
                )
              }
            })
          }
        </ul>
      </div>
    </div>
    
    )
  }
}

export default LeftNav