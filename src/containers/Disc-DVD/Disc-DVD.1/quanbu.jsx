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
  getAlbumList = async()=>{
    let data = await reqNewList1()
    console.log(data)
    const { code, albums } = data
  if (code===200) {
    this.setState({ albumList: albums })
  }
  const qetAlbumsData=(page=1,pageSize=35 ,albumList=[])=>{
    const {length } = albumList
    const albumsData ={
      data:[],
      page,
      pageSize,
      length
    };
    if (pageSize >= length) {
      albumsData.data = albumList;
      albumsData.page = 1;
    }else{
      const num = pageSize*(page-1)
      if (num<length) {
        const startIndex = num;
        const endIndex = num + pageSize - 1;
        albumsData.data = albumList.filter((_, index) => index >= startIndex && index <= endIndex);
      }else{
        const size = parseInt(length / pageSize); //取商
        const rest = length % pageSize;
        if (rest>0) {
          albumsData.page = size + 1
          albumsData.data = albumList.filter((_, index) => index >= (pageSize * size) && index <= length);
        }else if (rest===0) {
          albumsData.page = size
          albumsData.data = albumList.filter((_, index) => index >= (pageSize * (size - 1)) && index <= length);

        }
      }
    }
    return albumsData
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
          <Pagination defaultCurrent={6} total={150} />
      </div>
    )
  }
}
export default Quanbu