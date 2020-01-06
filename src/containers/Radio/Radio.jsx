import React,{Component} from 'react'

import './radio.less'
import img1 from './images/1.jpg'

export default class MyComponent extends Component{
  render(){
    return (
      <div id='radioContainer'>
        <div className="radioBg">
          <div className="radioWrap">
            <div className="radioTypes">
              {/* 电台分类 */}
              <div className="typeBoxes">
                <ul className="pageOne">
                  <li>
                    <div className="img" style={{backgroundImage: 'url(https://p3.music.126.net/cCogGBNagepu5uAd-OuCKQ==/19119407695444318.jpg)'}}></div>
                    <span>创作|翻唱</span>
                  </li>
                  <li>
                    <div className="img" style={{backgroundImage: 'url(https://p3.music.126.net/BVIacbDdjw90QjU4z7mZIw==/3389794351757648.jpg)'}}></div>
                    <span>3D|电子</span>
                  </li>
                  <li>
                    <div className="img" style={{backgroundImage: 'url(https://p3.music.126.net/RuluBZUC94KRYjx0eF7aHQ==/3223768093383533.jpg)'}}></div>
                    <span>情感调频</span>
                  </li>
                  <li>
                    <div className="img" style={{backgroundImage: 'url(https://p4.music.126.net/fNsFzMtgDByvOnpA0Kfehg==/3242459791054876.jpg)'}}></div>
                    <span>音乐故事</span>
                  </li>
                  <li>
                    <div className="img" style={{backgroundImage: 'url(https://p3.music.126.net/2jEyq6KuPUv0GgFOeDB0rA==/7731765766567381.jpg)'}}></div>
                    <span>二次元</span>
                  </li>
                  <li>
                    <div className="img" style={{backgroundImage: 'url(https://p4.music.126.net/jQo83vj8D0r3g0ydL1ujag==/18555358232264878.jpg)'}}></div>
                    <span>有声书</span>
                  </li>
                  <li>
                    <div className="img" style={{backgroundImage: 'url(https://p4.music.126.net/OQ-1zApxCjSxieFf63irwA==/19212866183939953.jpg)'}}></div>
                    <span>知识技能</span>
                  </li>
                  <li>
                    <div className="img" style={{backgroundImage: 'url(https://p3.music.126.net/27_UywB9VT7qTicVaUL2Ww==/19052337486286044.jpg)'}}></div>
                    <span>商业财经</span>
                  </li>
                  <li>
                    <div className="img" style={{backgroundImage: 'url(https://p4.music.126.net/fxNHDWCNVvRFa_3KAsBw6w==/3242459791054879.jpg)'}}></div>
                    <span>人文历史</span>
                  </li>
                  <li>
                    <div className="img" style={{backgroundImage: 'url(https://p3.music.126.net/tNg9R3kjzSAvYRU439sV-A==/18996262393228947.jpg)'}}></div>
                    <span>外语世界</span>
                  </li>
                  <li>
                    <div className="img" style={{backgroundImage: 'url(https://p3.music.126.net/WtEmxKotqvrOx02c7RwbdQ==/19167786207164648.jpg)'}}></div>
                    <span>亲子宝贝</span>
                  </li>
                  <li>
                    <div className="img" style={{backgroundImage: 'url(https://p3.music.126.net/DZV3wnLcYoc32YLnxoVCOg==/3240260767799323.jpg)'}}></div>
                    <span>相声曲艺</span>
                  </li>
                  <li>
                    <div className="img" style={{backgroundImage: 'url(https://p3.music.126.net/svlzt2aNhbHcAVRG1ae9nw==/19199672044369951.jpg)'}}></div>
                    <span>美文读物</span>
                  </li>
                  <li>
                    <div className="img" style={{backgroundImage: 'url(https://p4.music.126.net/QdPlGPCPc-QDdaIKuVq3RQ==/3236962232922745.jpg)'}}></div>
                    <span>脱口秀</span>
                  </li>
                  <li>
                    <div className="img" style={{backgroundImage: 'url(https://p4.music.126.net/MkrVCkXoJ7v29QXLBluUkw==/19167786207164651.jpg)'}}></div>
                    <span>广播剧</span>
                  </li>
                  <li>
                    <div className="img" style={{backgroundImage: 'url(https://p4.music.126.net/Jnx0K_M3Nc0Uk5YBXPifqw==/3249056860670081.jpg)'}}></div>
                    <span>明星做主播</span>
                  </li>
                  <li>
                    <div className="img" style={{backgroundImage: 'url(https://p3.music.126.net/8yoy33lYuvviDbcg1AOLUw==/3242459791054877.jpg)'}}></div>
                    <span>娱乐|影视</span>
                  </li>
                  <li>
                    <div className="img" style={{backgroundImage: 'url(https://p3.music.126.net/RLir9qUUGNolaxtMz-mPNA==/18896206835140215.jpg)'}}></div>
                    <span>科技科学</span>
                  </li>
                </ul>
              </div>
              {/* 导航小圆点 */}
              <div className="dots">
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              {/* 左右翻页 */}
              <div> ＜ </div>
              <div> ＞ </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}