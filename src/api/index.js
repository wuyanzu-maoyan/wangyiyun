
import ajax from './myAxios'


//获取歌手列表
export const reqArtistList = (cat,initial) => ajax.get(`/artist/list?cat=${cat}&initial=${initial}`)

//获取主播电台
export const reqRadioCategories = ()=> ajax.get('/dj/catelist') //请求电台分类
export const reqRadioRecommends = ()=> ajax.get('/dj/recommend') //请求推荐节目
export const reqRadioPlayList = (limit) => ajax.get(`/dj/program/toplist?limit=${limit}`)  //请求节目排行榜
export const reqRadioHot = (cateId,limit) => ajax.get(`/dj/radio/hot?cateId=${cateId}&limit=${limit}`)  //根据id请求类别热门电台


