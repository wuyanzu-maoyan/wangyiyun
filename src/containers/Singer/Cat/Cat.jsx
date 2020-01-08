import React,{Component} from 'react'

export default class Cat extends Component{
  componentDidMount(){
    console.log(this.props)
  }
  render(){
    return(
      <div>
        Cat
      </div>
    )
  }
}