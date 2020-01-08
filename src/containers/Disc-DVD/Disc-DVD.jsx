import React,{Component} from 'react'
import './Disc-DVD.less'
import { Route ,NavLink,Redirect,Switch} from "react-router-dom";
import SongList from './Disc-DVD.1/SongList.jsx'

// import { reqAlbumList } from "../../api/index";
import { reqNewList } from "../../api/index";
 class DiscDVD extends Component{
  state={
    albumList:[]
  }
  componentDidMount(){
    this.getAlbumList()
  }
  getAlbumList = async()=>{
    let data = await reqNewList()
    console.log(data)
    const { code, albums } = data
  if (code===200) {
    const albumss= albums.slice(0,[10])
    console.log(albumss)
    this.setState({ albumList: albumss })
  }
 

  }
  render(){
    return (
      <div>
        <div className="content">
          <div className="title">
            <h3>
              <span>新碟上架</span>
            </h3>
          </div>
          <ul className="cvrlst" >
          {
         
            this.state.albumList.map((item,index) => {
              return(
              <li key={item.id}>
                <div className="cover"><img src={item.picUrl}></img>
                <a href="/album?id=84698311" className="msk" title="Yummy"></a>
                <a href="#" className="icon-play f-alpha f-fr" title="播放" data-res-type="19" data-res-id="84698311" data-res-action="play"></a>
                </div>
                <p className="dec"><a>{item.name}</a></p>
              <p className="thide"><span><a>{item.artist.name}</a></span></p>
              </li>
               )
                
                })
              }
          
          </ul>
          <div className="title1">
            <h3>
              <span>全部新碟</span>
            </h3>
          
            <div className="areaList">
              <NavLink to='/disc/songlist/ALL'>全部</NavLink>
              <span>|</span>
              <NavLink to='/disc/songlist/ZH'>华语</NavLink> 
              <span>|</span>
              <NavLink to='/disc/songlist/EA'>欧美</NavLink>
              <span>|</span>
              <NavLink to='/disc/songlist/KR'>韩国</NavLink>
              <span>|</span>
              <NavLink to='/disc/songlist/JP'>日本</NavLink>
            </div>
          </div>
          <Switch>
            <Route path='/disc/songlist/:category' component={SongList}></Route>
            <Redirect to='/disc/songlist/ALL'></Redirect>
          </Switch>
        </div>
       
      </div>
    )
  }
}
export default DiscDVD