//模块化redux 使所有的reducer结合

import {combineReducers} from 'redux'
import setTopList from './topList_reducer'
import setTopItem from './topItem_reducer'
import setCommentList from './commentList_reducer'
export default combineReducers({
  topList:setTopList,
  topItem:setTopItem,
  commentObj:setCommentList
})

