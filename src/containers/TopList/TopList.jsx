import React,{Component} from 'react';
import './css/TopList.less';
import LeftNav from './LeftNav/LeftNav'
import RightContent from './RightContent/RightContent'
import {reqTopList,reqTopItem,reqCommentList} from '../../api'
import {connect} from 'react-redux'
import {createGetTopListAction,createGetTopItemAction,createGetCommentListAction} from '../../redux/action_creator/topList_action'
import {Switch,Route,Redirect} from 'react-router-dom'

@connect(state=>({}),{
  setTopList:createGetTopListAction,
  setTopItem:createGetTopItemAction,
  setCommentList:createGetCommentListAction
})
class TopList extends Component{
   getTopList = async() =>{
    let result = await reqTopList()
    const {code,list} = result;
    if(code === 200){
      this.props.setTopList(list)
    }
   }
   initTopItem = async()=>{
       let result = await reqTopItem('3')
       const {code,playlist} = result;
       if(code === 200){
        this.props.setTopItem(playlist)
       }
   }
   getCommentList = async()=>{
      let result = await reqCommentList({id:19723756})
      const {code,hotComments,total,comments} = result;
      if(code === 200){
        this.props.setCommentList({hotComments,total,comments})
      }
   }
   componentDidMount(){
     this.getTopList()
     this.initTopItem()
     this.getCommentList()
   }
   render(){
     return(
       <div className="kjcTopListContainer kjcW">
         <LeftNav></LeftNav>
        <Switch>
          <Route path="/toplist/rc/:name" component={RightContent}></Route>
 
        </Switch>
      </div>
     )
   }
 }
export default TopList