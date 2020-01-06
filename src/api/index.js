
import ajax from './myAxios'


//获取歌手列表
export const reqArtistList = (cat,initial) => ajax.get(`/artist/list?cat=${cat}&initial=${initial}`)