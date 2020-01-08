import React,{Component} from 'react'
import PubSub from 'pubsub-js';
import SingerHeader from '../../../components/singerHeader/singerHeader.jsx'
import SingerItem from '../../../components/singerItem/singerItem.jsx'
import SingerHotItem from '../../../components/singerHotItem/singerHotItem.jsx'
import {reqArtistList} from '../../../api'
import './Cat.less'
export default class Cat extends Component{
  componentDidMount(){
    PubSub.subscribe('getId',(msg,id)=>{
      this.setState({
        id 
      })
    })
    this.getSingedList()
  }
  state = {
    topList:[
      {name:'热门',key:''},
      {name:'A',key:"a"},
      {name:'B',key:'b'},
      {name:'C',key:'c'},
      {name:'D',key:'d'},
      {name:'E',key:'e'},
      {name:'F',key:'f'},
      {name:'G',key:'g'},
      {name:'H',key:'h'},
      {name:'I',key:'i'},
      {name:'J',key:'j'},
      {name:'K',key:'k'},
      {name:'L',key:'l'},
      {name:'M',key:'m'},
      {name:'N',key:'n'},
      {name:'O',key:'o'},
      {name:'P',key:'p'},
      {name:'Q',key:'q'},
      {name:'R',key:'r'},
      {name:'S',key:'s'},
      {name:'T',key:'t'},
      {name:'U',key:'u'},
      {name:'V',key:'v'},
      {name:'W',key:'w'},
      {name:'X',key:'x'},
      {name:'Y',key:'y'},
      {name:'Z',key:'z'},
      {name:'其他',key:''},
    ],
    singedList: [],
    id:'',
    key:'',
    moreSingedList:[]
  }
  getTopList = ()=>{
    const {topList} = this.state
    return topList.map(item =>{
      return(
      <li key={item.name} onClick={()=>{this.getKey(item.key)}}>
        <div>{item.name}</div>
      </li>
      )
    })
  }
  getKey = (key)=>{
    console.log(key)
    this.setState({
      key
    })
  }
  getSingedList = async () =>{
    const {id,key} = this.state
    const result = await reqArtistList('1001','0','100')
    console.log(result)
    if(result.code == 200){
      const moreSingedList = result.artists
      const singedList = result.artists.slice(0,10)
      console.log(singedList)
      this.setState({
        singedList,
        moreSingedList 
      })

    }
    
  }

  render(){
    const {singedList,moreSingedList} = this.state
    return(
      <div className="zxCat">
        <SingerHeader title="入驻歌手"></SingerHeader>
        <div className="zxTopList">
          <ul>
            {this.getTopList()}
          </ul>
        </div>
        <div className="zxCatWap ">
          <div className="zxCatInner">
            {
              singedList.map(item =>{
                return <SingerItem key={item.id} {...item}></SingerItem>
              })
            }
          </div>
          <div className="zxCatWap">
            {
              moreSingedList.map(item =>{
                return <SingerHotItem key={item.id} {...item}></SingerHotItem>
              })
            }
          </div>
        </div>
      </div>
    )
  }
}