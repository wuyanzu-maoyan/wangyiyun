
import ajax from './myAxios'


//获取歌手列表
export const reqArtistList = (cat,initial) => ajax.get(`/artist/list?cat=${cat}&initial=${initial}`)
//获取排行榜列表
export const reqTopList = () => ajax.get('/toplist')
//根据idx的值获取某个排行榜
export const reqTopItem = (idx)=> ajax.get(`/top/list?idx=${idx}`);
//根据id与type值获取当前歌单的评论列表
export const reqCommentList = ({id})=> ajax.get(`/comment/playlist?id=${id}`)
