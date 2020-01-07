import {SET_COMMENT_LIST} from '../action_types';

let initState = {}
export default function setCommentList(oldState=initState,action){
  const {type,data} = action
  let newState = oldState;
  switch(type){
    case SET_COMMENT_LIST:
      let {hotComments,total,comments} = data
      newState = {commentList:hotComments,total,comments}
      return newState;
    default:
      return newState
  }
}