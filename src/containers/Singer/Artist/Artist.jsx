import React,{Component} from 'react'
import {NavLink,Switch,Route,Redirect} from 'react-router-dom'

import SingerHeader from '../../../components/singerHeader/singerHeader.jsx'
import SingerItem from '../../../components/singerItem/singerItem.jsx'
import SingerHotItem from '../../../components/singerHotItem/singerHotItem.jsx'
import {reqArtistList,reqHotList} from '../../../api'
import './Artist.less'
export default class Artist extends Component{
  state = {
    singedList: [], //入驻歌手
    hotList: [], //热门歌手
    hotNameList: []
  }
  componentDidMount(){
    this.getSingedList()
    this.getHotList()
    this.getHotNameList()
  }
  getSingedList = async () =>{
    const result = await reqArtistList('5001','0','1')
    // console.log(result)
    if(result.code == 200){
      const singedList = result.artists.slice(0,10)
      // console.log(singedList)
      this.setState({
        singedList 
      })

    }
    
  }
  getHotList = async () =>{
    const result = await reqHotList('0','10')
    // console.log(result)
    if(result.code == 200){
      this.setState({
        hotList: result.artists
      })
    }
  }
  getHotNameList = async () =>{
    const result = await reqHotList('10','180')
    console.log(result)
    if(result.code == 200){
      this.setState({
        hotNameList: result.artists
      })
    }
  }
  render(){
    const {singedList,hotList,hotNameList} = this.state
    return(
      //入驻歌手
      <div className="zxRight">
        <div className="zxSigned">
          <SingerHeader title="入驻歌手" isMore='1'></SingerHeader>
          <div className="zxSingerInner">
            {
              singedList.map(item =>{
                return <SingerItem key={item.id} {...item}></SingerItem>
              })
            }
          </div> 
        </div>
        
        <div className="zxSigned">
          <SingerHeader title="热门歌手"></SingerHeader>
          <div className="zxSingerInner">
            {
              hotList.map(item =>{
                return <SingerItem key={item.id} {...item}></SingerItem>
              })
            }
          </div>
        </div>

        <div className="zxHotSingerWap clearfix">
            {
              hotNameList.map(item =>{
                return <SingerHotItem key={item.id} {...item}></SingerHotItem>
              })
            }
        </div>
      </div>
    )
  }
}