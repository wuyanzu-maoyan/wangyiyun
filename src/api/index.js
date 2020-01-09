
import ajax from './myAxios'

//获取歌手列表
export const reqArtistList = (cat,offset,limit,initial) => {
  //console.log(cat,offset,limit,initial)
  return ajax.get(`/artist/list?cat=${cat}&offset=${offset}&limit =${limit}&initial=${initial}`)
}
//获取热门歌手
export const reqHotList = (offset,limit) => ajax.get(`/top/artists?offset=${offset}&limit=${limit}`)

//获取主播电台
export const reqRadioCategories = ()=> ajax.get('/dj/catelist') //请求电台分类
export const reqRadioRecommends = ()=> ajax.get('/dj/recommend') //请求推荐节目
export const reqRadioPlayList = (limit) => ajax.get(`/dj/program/toplist?limit=${limit}`)  //请求节目排行榜
export const reqRadioHot = (cateId,limit) => ajax.get(`/dj/radio/hot?cateId=${cateId}&limit=${limit}`)  //根据id请求类别热门电台


//获取排行榜列表
export const reqTopList = () => ajax.get('/toplist')
//根据idx的值获取某个排行榜
export const reqTopItem = (idx)=> ajax.get(`/top/list?idx=${idx}`);
//根据id与type值获取当前歌单的评论列表
export const reqCommentList = ({id})=> ajax.get(`/comment/playlist?id=${id}`)
//获取碟片信息
export const reqAlbumList = () =>ajax.get('/top/album?order=new&limit=10&')

//请求轮播图的歌曲
export const reqMVlist = () => ajax.get('personalized/mv');

//获取歌曲分类
export const reqClassList = () => ajax.get('/playlist/catlist');
//获取热门歌曲分类
export const reqHotCategory = () => ajax.get('/playlist/hot');

//获取热门推荐
export const reqRecommend = () => ajax.get('/top/playlist?limit=8&order=hot');

//获取新碟上架
export const reqNewList = (area) => ajax.get('/album/newest',{params:{area}});

//获取不同分类列表
export const reqSongList = (area,offset) => ajax.get('/top/album',{params:{area,limit:1000,offset}});
// export const reqNewList1 = () => ajax.get('/top/album?area=new&limit=1000&offset=15');
// export const reqNewList2 = () => ajax.get('/top/album?area=zh&limit=1000&offset=40');
// export const reqNewList3 = () => ajax.get('/top/album?area=EA&limit=1000&offset=150');
// export const reqNewList4 = () => ajax.get('/top/album?area=kr&limit=1000&offset=105');
// export const reqNewList5 = () => ajax.get('/top/album?area=JP&limit=1000&offset=200');


//获取云音乐飙升榜
export const reqRiseList =() => ajax.get('/top/list?idx=3');

//获取云音乐新歌榜
export const reqNewSongs =() => ajax.get('/top/list?idx=0');

//获取网易原创歌曲榜
export const reqOriginalList =() => ajax.get('/top/list?idx=2');

//获取入驻歌手

export const reqSingerList =() => ajax.get('/artist/list?cat=5001');

//带分页的评论
export const reqCommentPage = ({id,limit,offset})=>ajax.get(`/comment/playlist?id=${id}&limit=${limit}&offset=${offset}`)

//获取歌曲url
export const reqSongUrl = (id) => ajax.get(`/song/url?id=${id}`)