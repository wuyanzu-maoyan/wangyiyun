import {SET_TOP_LIST} from '../action_types';
let initState = [];
export default function setTopList (oldState=initState,action) {
  const {type,data} = action;
  let newState = oldState;
  switch(type){
    case SET_TOP_LIST:
      newState = [...data]
      return newState
    default:
      return oldState
  }
}