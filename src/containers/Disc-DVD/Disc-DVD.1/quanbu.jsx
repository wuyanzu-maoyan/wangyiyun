import React,{Component} from 'react'
import './css.less'
import { Pagination } from 'antd';
import { reqNewList1 } from "../../../api/index";
class Quanbu extends Component{
  
  state={
    albumList:[],
  }
  componentDidMount(){
    this.getAlbumList()
    
  }
   itemRender=(current, type, originalElement)=>{
    if (type === 'prev') {
      return <a></a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  }
  getAlbumList = async()=>{
    let data = await reqNewList1()
    console.log(data)
    const { code, albums } = data
    if (code===200) {
      this.setState({ albumList: albums })
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
          <Pagination total={500} itemRender={this.itemRender} />
      </div>
    )
  }
}
export default Quanbu