import React,{Component} from 'react'
import SingerHeader from '../../../components/singerHeader/singerHeader.jsx'
import SingerItem from '../../../components/singerItem/singerItem.jsx'
import {reqArtistList} from '../../../api'
import './Signed.less'
export default class Singed extends Component{

  state={
    singedList:[]
  }
  componentDidMount(){
    this.getSingedList()
  }
  getSingedList = async () =>{
    const result = await reqArtistList('5001','0','100')
    console.log(result)
    if(result.code == 200){
      const singedList = result.artists
      console.log(singedList)
      this.setState({
        singedList
      })

    }
    
  }


  render(){
    const {singedList} = this.state
    return(
      <div className="zxSinedContainer ">
        <SingerHeader title="入驻歌手"></SingerHeader>
        <div className="zxSinedInner clearfix">
            {
              singedList.map(item =>{
                return <SingerItem key={item.id} {...item}></SingerItem>
              })
            }
          </div>
      </div>
    )
  }
}