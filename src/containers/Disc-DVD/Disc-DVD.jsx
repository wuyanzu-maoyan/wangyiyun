import React,{Component} from 'react'
import './Disc-DVD.less'
import { Route ,NavLink,Redirect} from "react-router-dom";
import Quanbu from './Disc-DVD.1/quanbu.jsx'
import Hanguo from './Disc-DVD.1/hanguo'
import Huayu from './Disc-DVD.1/huayu'
import Riben from './Disc-DVD.1/riben'
import Oumei from './Disc-DVD.1/oumei'
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
              <NavLink to='/disc/quanbu'>全部</NavLink>
              <span>|</span>
              <NavLink to='/disc/huayu'>华语</NavLink> 
              <span>|</span>
              <NavLink to='/disc/oumei'>欧美</NavLink>
              <span>|</span>
              <NavLink to='/disc/hanguo'>韩国</NavLink>
              <span>|</span>
              <NavLink to='/disc/riben'>日本</NavLink>
            </div>
          </div>
          <Redirect to='/disc/quanbu'></Redirect>
          <Route path='/disc/quanbu' component={Quanbu}></Route>
          <Route path='/disc/oumei' component={Oumei}></Route>
          <Route path='/disc/huayu' component={Huayu}></Route>
          <Route path='/disc/riben' component={Riben}></Route>
          <Route path='/disc/hanguo' component={Hanguo}></Route>
        </div>
       
      </div>
    )
  }
}
export default DiscDVD