
import ajax from './myAxios'
import { LIMIT,ORDER } from "../config/index";

//获取歌手列表
export const reqArtistList = (cat,initial) => ajax.get(`/artist/list?cat=${cat}&initial=${initial}`)
//获取碟片信息
export const reqAlbumList = () =>ajax.get(`/top/playlist?limit=${LIMIT}&order=${ORDER}`)

//请求轮播图的歌曲
export const reqMVlist = () => ajax.get('personalized/mv');

//获取热门歌曲分类
export const reqHotCategory = () => ajax.get('/playlist/hot');

//获取热门推荐
export const reqRecommend = () => ajax.get('/top/playlist?limit=8&order=hot');

//获取新碟上架

export const reqNewList = () => ajax.get('/album/newest');


//获取云音乐飙升榜
export const reqRiseList =() => ajax.get('/top/list?idx=3');

//获取云音乐新歌榜
export const reqNewSongs =() => ajax.get('/top/list?idx=0');

//获取网易原创歌曲榜
export const reqOriginalList =() => ajax.get('/top/list?idx=2');

//获取入驻歌手

export const reqSingerList =() => ajax.get('/artist/list?cat=5001');
