
import ajax from './myAxios'


//获取歌手列表
export const reqArtistList = (cat,offset,limit,initial) => ajax.get(`/artist/list?cat=${cat}&offset=${offset}&limit =${limit}&initial=${initial}`)
//获取热门歌手
export const reqHotList = (offset,limit) => ajax.get(`/top/artists?offset=${offset}&limit=${limit}`)