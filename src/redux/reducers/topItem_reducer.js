import {SET_TOP_ITEM} from '../action_types';
let initState={}
export default function setTopItem(oldState=initState,action){
  const {type,data} = action
  let newState = oldState;
  switch(type){
    case SET_TOP_ITEM:
      newState = {...data}
     return newState
    default:
      return oldState 
  }
}