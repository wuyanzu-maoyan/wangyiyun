
import ajax from './myAxios'
import { LIMIT,ORDER } from "../config/index";

//获取歌手列表
export const reqArtistList = (cat,initial) => ajax.get(`/artist/list?cat=${cat}&initial=${initial}`)
//获取碟片信息
export const reqAlbumList = () =>ajax.get(`/top/playlist?limit=${LIMIT}&order=${ORDER}`)