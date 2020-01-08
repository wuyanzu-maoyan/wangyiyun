import React,{Component} from 'react'
import './css.less'
import { reqSongList } from "../../../api/index";


class Quanbu extends Component{
  state={
    albumList:[],
    index:0
  }
  
  componentDidMount(){
    console.log('----');
    this.getSongList() 
  }
  
  getSongList = async() => {
    const result = await reqSongList(this.props.match.params.category,this.state.index++);
    const {code,albums} = result;
    if(code===200){
      console.log(albums);
      this.setState({albumList:albums});
    }
    
  }
  
 
  render(){
    return (
      <div >
          <ul className="cvrlst">
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
          <div className="page">
            <a className="zbtn znrv">上一页</a>
            <a className="zpgi">1</a>
            <a className="zpgi">2</a>
            <a className="zpgi">3</a>
            <a className="zpgi">4</a>
            <a className="zbtn znxt">下一页</a>
          </div>
      </div>
    )
  }
}
export default Quanbu