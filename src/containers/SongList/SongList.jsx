import React,{Component} from "react"
import './SongList.less'
import { reqClassList } from '../../api'

export default class SongList extends Component{
  state={
    isShow:false,
    classList:[],
    classItem:[]
  }
  componentDidMount(){
    this.getclassList()
  }
  getclassList = async()=>{
    let data = await reqClassList()
    console.log(data)
    const { code, categories,sub } = data
    console.log(categories)
      if (code===200) {
        this.setState({ classList: categories })
        this.setState({ classItem:sub })
        console.log(this.state)
      }
  }
  show=()=>{
    let isShow=!this.state.isShow
    this.setState({isShow})

  }
  render(){
    let {isShow,classList}=this.state
    let arr=[]
    // console.log(JSON.parse(classList))
    for (const i in classList) {
      arr.push(classList[i])
    }
    return(
      <div id="wjContainer">
        <div className="wjBody">
          <div className="wjTitle">
            <h3>
              <span>全部</span>
              <a href="javascript:;" onClick={this.show}>
                <i>选择分类</i>
              </a>
            </h3>
            <div className="wjBtn"><a href="#">热门</a></div>
          </div>
          <div className="wjBox" style={{display:isShow?'block':'none'}}>
            <div className="wjHd">
              <i></i>
            </div>
            <div className="wjBd">
              <h3><a href="#">全部风格</a></h3>
              {
                arr.map((item,index) => {
                  return(
                    <dl>
                      <dt><i className="icon1">{item}</i></dt>
                        <dd>
                      {this.state.classItem.map((item,index)=>{
                        return(
                          
                            <a href="#">{item.name}</a>
                            // <span>|</span>
                          )
                      })
                    }
                      </dd>
                    </dl>
                    )
                })
              }
            </div>
            <div className="wjFt"></div>
          </div>
          <ul>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>       
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>       
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>       
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            <li>
              <div className="wjCover">
                <img src={require('./images/test.jpg')}/>
                <a className="h" href=""></a>
                <div className="wjBottom">
                  <i></i>
                  <span>34795</span>
                  <a href=""></a>
                </div>
              </div>
              <p className="wjName">
                <a href="">献给异地恋：想拥有一双翅膀 为你逆风飞翔</a>
              </p>
              <p className="wjAuthor">
                <span>by</span>
                <a>网易云音乐</a>
                <i></i>
              </p>
            </li>
            </ul>
        </div>
      </div>
    )
  }
}