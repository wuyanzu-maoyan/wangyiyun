import {SET_TOP_LIST,SET_TOP_ITEM,SET_COMMENT_LIST} from '../action_types';

export const createGetTopListAction = (value)=>{
  return {type:SET_TOP_LIST,data:value}
}
export const createGetTopItemAction = (value)=>{
  return {type:SET_TOP_ITEM,data:value}
}
export const createGetCommentListAction = (value)=>{
  return {type:SET_COMMENT_LIST,data:value}
}
