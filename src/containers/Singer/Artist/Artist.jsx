import React,{Component} from 'react'
import {NavLink,Switch,Route,Redirect} from 'react-router-dom'

import SingerHeader from '../../../components/singerHeader/singerHeader.jsx'
import SingerItem from '../../../components/singerItem/singerItem.jsx'
import {reqArtistList,reqHotList} from '../../../api'
import './Artist.less'
export default class Artist extends Component{
  state = {
    singedList: [], //入驻歌手
    hotList: [] //热门歌手
  }
  componentDidMount(){
    this.getSingedList()
    this.getHotList()
    
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
    console.log(result)
    if(result.code == 200){
      this.setState({
        hotList: result.artists
      })
    }
  }
  render(){
    const {singedList,hotList} = this.state
    return(
      <div className="zxRight">
        <div className="zxSigned">
          <SingerHeader title="入驻歌手"></SingerHeader>
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
      </div>
    )
  }
}