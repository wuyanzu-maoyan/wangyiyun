import React,{Component} from 'react'

import './radio.less'

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
              <div className="turn prev"> ＜ </div>
              <div className="turn next"> ＞ </div>
            </div>
            <div className="radioPlay">
              <div className="play recomment">
                <div className="title">
                  <h3>推荐节目</h3>
                  <span>更多 > </span>
                </div>
                <ul className="list">
                  <li>
                    <img src="http://p1.music.126.net/_ljpNzU6rSE04fpWqdU2YQ==/109951164598716309.jpg?param=40x40" alt=""/>
                    <div className="middle">
                      <h3>【发刊词】致抑郁者的一束光</h3>
                      <p>7招快速改善抑郁</p>
                    </div>
                    <div className="btn">
                      情感调频
                    </div>
                  </li>
                  <li>
                    <img src="http://p1.music.126.net/ifGfNFwTg3IC8jnpNeUzxQ==/109951164553787294.jpg?param=40x40" alt=""/>
                    <div className="middle">
                      <h3>《幻昼》</h3>
                      <p>艺起教育-米可的钢琴电台</p>
                    </div>
                    <div className="btn">
                    知识技能
                    </div>
                  </li>
                  <li>
                    <img src="http://p1.music.126.net/mi2sqiLNFtD8vtgofzLoVw==/109951164582482090.jpg?param=40x40" alt=""/>
                    <div className="middle">
                      <h3>Space Disco Vol.3 - Blueman Xmas Live at Dada Shanghai'19</h3>
                      <p>太空迪厅 (Space Disco)</p>
                    </div>
                    <div className="btn">
                    3D|电子
                    </div>
                  </li>
                  <li>
                    <img src="http://p1.music.126.net/Y-1GZ2wd2js2P7yaG5xVNQ==/109951164574772631.jpg?param=40x40" alt=""/>
                    <div className="middle">
                      <h3>JFF02 | 电音的发展也许没你想得那么健康</h3>
                      <p>「动刺电报」</p>
                    </div>
                    <div className="btn">
                    3D|电子
                    </div>
                  </li>
                  <li>
                    <img src="http://p1.music.126.net/QsgX9QcnKSo9Z0CMIG6H7A==/109951164564835442.jpg?param=40x40" alt=""/>
                    <div className="middle">
                      <h3>【019】对话落日飞车：我们不常把挣扎赤裸地放在艺术创作里</h3>
                      <p>GQ Talk</p>
                    </div>
                    <div className="btn">
                    脱口秀
                    </div>
                  </li>
                  <li>
                    <img src="http://p1.music.126.net/08eAjw3-V11rFxnDJQ8y1g==/109951164549160704.jpg?param=40x40" alt=""/>
                    <div className="middle">
                      <h3>Jay Hardway - Inspire Radio Ep. 71</h3>
                      <p>Jay Hardway Inspire Radio</p>
                    </div>
                    <div className="btn">
                    3D|电子
                    </div>
                  </li>
                  <li>
                    <img src="http://p1.music.126.net/vyA9GOQXjDLBh9em-S8uXQ==/109951164553802605.jpg?param=40x40" alt=""/>
                    <div className="middle">
                      <h3>《天空之城》</h3>
                      <p>艺起教育-米可的钢琴电台</p>
                    </div>
                    <div className="btn">
                    知识技能
                    </div>
                  </li>
                  <li>
                    <img src="http://p1.music.126.net/9lQpA0agI8AChIzygo9OFQ==/109951164039413188.jpg?param=40x40" alt=""/>
                    <div className="middle">
                      <h3>初见</h3>
                      <p>一些曲不达意的翻唱</p>
                    </div>
                    <div className="btn">
                      创作|翻唱
                    </div>
                  </li>
                  <li>
                    <img src="http://p1.music.126.net/vMzAXbykbQUDShR9-NTJVw==/109951164531080189.jpg?param=40x40" alt=""/>
                    <div className="middle">
                      <h3>Vol.104 东瀛文化受害者</h3>
                      <p>别的电波</p>
                    </div>
                    <div className="btn">
                      脱口秀
                    </div>
                  </li>
                  <li>
                    <img src="http://p1.music.126.net/050GNi6euC-EIL6rJt5jVw==/109951164517563199.jpg?param=40x40" alt=""/>
                    <div className="middle">
                      <h3>VVIP Session 049:Guest BEAUZ</h3>
                      <p>PurpleBattery's VVIP Session</p>
                    </div>
                    <div className="btn">
                      3D|电子
                    </div>
                  </li>
                </ul>
              </div>
              <div className="play playList">
              <div className="title">
                  <h3>节目排行榜</h3>
                  <span>更多 > </span>
                </div>
                <ul className="list">
                  <li>
                    <div className="rank">
                      <p>01</p>
                      <span>NEW</span>
                    </div>
                    <img src="http://p1.music.126.net/_ljpNzU6rSE04fpWqdU2YQ==/109951164598716309.jpg?param=40x40" alt=""/>
                    <div className="middle">
                      <h3>大眠 王巨星（cover：王心凌）</h3>
                      <p>王巨星的电台</p>
                    </div>
                    <div className="len">
                      <i style={{width: '92%'}}></i>
                    </div>
                  </li>
                  <li>
                    <div className="rank">
                      <p>02</p>
                      <span>⬇1</span>
                    </div>
                    <img src="http://p1.music.126.net/_ljpNzU6rSE04fpWqdU2YQ==/109951164598716309.jpg?param=40x40" alt=""/>
                    <div className="middle">
                      <h3>大眠 王巨星（cover：王心凌）</h3>
                      <p>王巨星的电台</p>
                    </div>
                    <div className="len">
                      <i style={{width: '84%'}}></i>
                    </div>
                  </li>
                  <li>
                    <div className="rank">
                      <p>03</p>
                      <span>-0</span>
                    </div>
                    <img src="http://p1.music.126.net/_ljpNzU6rSE04fpWqdU2YQ==/109951164598716309.jpg?param=40x40" alt=""/>
                    <div className="middle">
                      <h3>大眠 王巨星（cover：王心凌）</h3>
                      <p>王巨星的电台</p>
                    </div>
                    <div className="len">
                      <i style={{width: '80%'}}></i>
                    </div>
                  </li>
                  <li>
                    <div className="rank">
                      <p>04</p>
                      <span>⬇2</span>
                    </div>
                    <img src="http://p1.music.126.net/_ljpNzU6rSE04fpWqdU2YQ==/109951164598716309.jpg?param=40x40" alt=""/>
                    <div className="middle">
                      <h3>大眠 王巨星（cover：王心凌）</h3>
                      <p>王巨星的电台</p>
                    </div>
                    <div className="len">
                      <i style={{width: '65%'}}></i>
                    </div>
                  </li>
                  <li>
                    <div className="rank">
                      <p>05</p>
                      <span>-0</span>
                    </div>
                    <img src="http://p1.music.126.net/_ljpNzU6rSE04fpWqdU2YQ==/109951164598716309.jpg?param=40x40" alt=""/>
                    <div className="middle">
                      <h3>大眠 王巨星（cover：王心凌）</h3>
                      <p>王巨星的电台</p>
                    </div>
                    <div className="len">
                      <i style={{width: '60%'}}></i>
                    </div>
                  </li>
                  <li>
                    <div className="rank">
                      <p>06</p>
                      <span>-0</span>
                    </div>
                    <img src="http://p1.music.126.net/_ljpNzU6rSE04fpWqdU2YQ==/109951164598716309.jpg?param=40x40" alt=""/>
                    <div className="middle">
                      <h3>大眠 王巨星（cover：王心凌）</h3>
                      <p>王巨星的电台</p>
                    </div>
                    <div className="len">
                      <i style={{width: '41%'}}></i>
                    </div>
                  </li>
                  <li>
                    <div className="rank">
                      <p>07</p>
                      <span>⬆4</span>
                    </div>
                    <img src="http://p1.music.126.net/_ljpNzU6rSE04fpWqdU2YQ==/109951164598716309.jpg?param=40x40" alt=""/>
                    <div className="middle">
                      <h3>大眠 王巨星（cover：王心凌）</h3>
                      <p>王巨星的电台</p>
                    </div>
                    <div className="len">
                      <i style={{width: '38%'}}></i>
                    </div>
                  </li>
                  <li>
                    <div className="rank">
                      <p>08</p>
                      <span>-0</span>
                    </div>
                    <img src="http://p1.music.126.net/_ljpNzU6rSE04fpWqdU2YQ==/109951164598716309.jpg?param=40x40" alt=""/>
                    <div className="middle">
                      <h3>大眠 王巨星（cover：王心凌）</h3>
                      <p>王巨星的电台</p>
                    </div>
                    <div className="len">
                      <i style={{width: '34%'}}></i>
                    </div>
                  </li>
                  <li>
                    <div className="rank">
                      <p>09</p>
                      <span>NEW</span>
                    </div>
                    <img src="http://p1.music.126.net/_ljpNzU6rSE04fpWqdU2YQ==/109951164598716309.jpg?param=40x40" alt=""/>
                    <div className="middle">
                      <h3>大眠 王巨星（cover：王心凌）</h3>
                      <p>王巨星的电台</p>
                    </div>
                    <div className="len">
                      <i style={{width: '30%'}}></i>
                    </div>
                  </li>
                  <li>
                    <div className="rank">
                      <p>10</p>
                      <span>↑2</span>
                    </div>
                    <img src="http://p1.music.126.net/_ljpNzU6rSE04fpWqdU2YQ==/109951164598716309.jpg?param=40x40" alt=""/>
                    <div className="middle">
                      <h3>大眠 王巨星（cover：王心凌）</h3>
                      <p>王巨星的电台</p>
                    </div>
                    <div className="len">
                      <i style={{width: '28%'}}></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="radio musicStory">
              <div className="title">
                <h3>音乐故事 . 电台</h3>
                <span>更多></span>
              </div>
              <ul className="radioList musicList">
                <li>
                  <img src="http://p1.music.126.net/FgsSeWWHgrOBbqKdJWXiUQ==/109951164492947783.jpg?param=200y200" alt=""/>
                  <div className="radioInfo">
                    <h3>Dazed Weekend</h3>
                    <p>倾听音乐人的好歌分享</p>
                  </div>
                </li>
                <li>
                  <img src="http://p1.music.126.net/FgsSeWWHgrOBbqKdJWXiUQ==/109951164492947783.jpg?param=200y200" alt=""/>
                  <div className="radioInfo">
                    <h3>Dazed Weekend</h3>
                    <p>倾听音乐人的好歌分享</p>
                  </div>
                </li>
                <li>
                  <img src="http://p1.music.126.net/FgsSeWWHgrOBbqKdJWXiUQ==/109951164492947783.jpg?param=200y200" alt=""/>
                  <div className="radioInfo">
                    <h3>Dazed Weekend</h3>
                    <p>倾听音乐人的好歌分享</p>
                  </div>
                </li>
                <li>
                  <img src="http://p1.music.126.net/FgsSeWWHgrOBbqKdJWXiUQ==/109951164492947783.jpg?param=200y200" alt=""/>
                  <div className="radioInfo">
                    <h3>Dazed Weekend</h3>
                    <p>倾听音乐人的好歌分享</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="radio meiwen">
              <div className="title">
                <h3>美文读物 . 电台</h3>
                <span>更多></span>
              </div>
              <ul className="radioList meiwenList">
                <li>
                  <img src="http://p1.music.126.net/FgsSeWWHgrOBbqKdJWXiUQ==/109951164492947783.jpg?param=200y200" alt=""/>
                  <div className="radioInfo">
                    <h3>Dazed Weekend</h3>
                    <p>倾听音乐人的好歌分享</p>
                  </div>
                </li>
                <li>
                  <img src="http://p1.music.126.net/FgsSeWWHgrOBbqKdJWXiUQ==/109951164492947783.jpg?param=200y200" alt=""/>
                  <div className="radioInfo">
                    <h3>Dazed Weekend</h3>
                    <p>倾听音乐人的好歌分享</p>
                  </div>
                </li>
                <li>
                  <img src="http://p1.music.126.net/FgsSeWWHgrOBbqKdJWXiUQ==/109951164492947783.jpg?param=200y200" alt=""/>
                  <div className="radioInfo">
                    <h3>Dazed Weekend</h3>
                    <p>倾听音乐人的好歌分享</p>
                  </div>
                </li>
                <li>
                  <img src="http://p1.music.126.net/FgsSeWWHgrOBbqKdJWXiUQ==/109951164492947783.jpg?param=200y200" alt=""/>
                  <div className="radioInfo">
                    <h3>Dazed Weekend</h3>
                    <p>倾听音乐人的好歌分享</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="radio tuokouxiu">
              <div className="title">
                <h3>脱口秀 . 电台</h3>
                <span>更多></span>
              </div>
              <ul className="radioList tuokouxiuList">
                <li>
                  <img src="http://p1.music.126.net/FgsSeWWHgrOBbqKdJWXiUQ==/109951164492947783.jpg?param=200y200" alt=""/>
                  <div className="radioInfo">
                    <h3>Dazed Weekend</h3>
                    <p>倾听音乐人的好歌分享</p>
                  </div>
                </li>
                <li>
                  <img src="http://p1.music.126.net/FgsSeWWHgrOBbqKdJWXiUQ==/109951164492947783.jpg?param=200y200" alt=""/>
                  <div className="radioInfo">
                    <h3>Dazed Weekend</h3>
                    <p>倾听音乐人的好歌分享</p>
                  </div>
                </li>
                <li>
                  <img src="http://p1.music.126.net/FgsSeWWHgrOBbqKdJWXiUQ==/109951164492947783.jpg?param=200y200" alt=""/>
                  <div className="radioInfo">
                    <h3>Dazed Weekend</h3>
                    <p>倾听音乐人的好歌分享</p>
                  </div>
                </li>
                <li>
                  <img src="http://p1.music.126.net/FgsSeWWHgrOBbqKdJWXiUQ==/109951164492947783.jpg?param=200y200" alt=""/>
                  <div className="radioInfo">
                    <h3>Dazed Weekend</h3>
                    <p>倾听音乐人的好歌分享</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="radio qinggan">
              <div className="title">
                <h3>情感调频 . 电台</h3>
                <span>更多></span>
              </div>
              <ul className="radioList qingganList">
                <li>
                  <img src="http://p1.music.126.net/FgsSeWWHgrOBbqKdJWXiUQ==/109951164492947783.jpg?param=200y200" alt=""/>
                  <div className="radioInfo">
                    <h3>Dazed Weekend</h3>
                    <p>倾听音乐人的好歌分享</p>
                  </div>
                </li>
                <li>
                  <img src="http://p1.music.126.net/FgsSeWWHgrOBbqKdJWXiUQ==/109951164492947783.jpg?param=200y200" alt=""/>
                  <div className="radioInfo">
                    <h3>Dazed Weekend</h3>
                    <p>倾听音乐人的好歌分享</p>
                  </div>
                </li>
                <li>
                  <img src="http://p1.music.126.net/FgsSeWWHgrOBbqKdJWXiUQ==/109951164492947783.jpg?param=200y200" alt=""/>
                  <div className="radioInfo">
                    <h3>Dazed Weekend</h3>
                    <p>倾听音乐人的好歌分享</p>
                  </div>
                </li>
                <li>
                  <img src="http://p1.music.126.net/FgsSeWWHgrOBbqKdJWXiUQ==/109951164492947783.jpg?param=200y200" alt=""/>
                  <div className="radioInfo">
                    <h3>Dazed Weekend</h3>
                    <p>倾听音乐人的好歌分享</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="radio chuangzuo">
              <div className="title">
                <h3>创作|翻唱 . 电台</h3>
                <span>更多></span>
              </div>
              <ul className="radioList chuangzuoList">
                <li>
                  <img src="http://p1.music.126.net/FgsSeWWHgrOBbqKdJWXiUQ==/109951164492947783.jpg?param=200y200" alt=""/>
                  <div className="radioInfo">
                    <h3>Dazed Weekend</h3>
                    <p>倾听音乐人的好歌分享</p>
                  </div>
                </li>
                <li>
                  <img src="http://p1.music.126.net/FgsSeWWHgrOBbqKdJWXiUQ==/109951164492947783.jpg?param=200y200" alt=""/>
                  <div className="radioInfo">
                    <h3>Dazed Weekend</h3>
                    <p>倾听音乐人的好歌分享</p>
                  </div>
                </li>
                <li>
                  <img src="http://p1.music.126.net/FgsSeWWHgrOBbqKdJWXiUQ==/109951164492947783.jpg?param=200y200" alt=""/>
                  <div className="radioInfo">
                    <h3>Dazed Weekend</h3>
                    <p>倾听音乐人的好歌分享</p>
                  </div>
                </li>
                <li>
                  <img src="http://p1.music.126.net/FgsSeWWHgrOBbqKdJWXiUQ==/109951164492947783.jpg?param=200y200" alt=""/>
                  <div className="radioInfo">
                    <h3>Dazed Weekend</h3>
                    <p>倾听音乐人的好歌分享</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="radio renwen">
              <div className="title">
                <h3>人文历史 . 电台</h3>
                <span>更多></span>
              </div>
              <ul className="radioList renwenList">
                <li>
                  <img src="http://p1.music.126.net/FgsSeWWHgrOBbqKdJWXiUQ==/109951164492947783.jpg?param=200y200" alt=""/>
                  <div className="radioInfo">
                    <h3>Dazed Weekend</h3>
                    <p>倾听音乐人的好歌分享</p>
                  </div>
                </li>
                <li>
                  <img src="http://p1.music.126.net/FgsSeWWHgrOBbqKdJWXiUQ==/109951164492947783.jpg?param=200y200" alt=""/>
                  <div className="radioInfo">
                    <h3>Dazed Weekend</h3>
                    <p>倾听音乐人的好歌分享</p>
                  </div>
                </li>
                <li>
                  <img src="http://p1.music.126.net/FgsSeWWHgrOBbqKdJWXiUQ==/109951164492947783.jpg?param=200y200" alt=""/>
                  <div className="radioInfo">
                    <h3>Dazed Weekend</h3>
                    <p>倾听音乐人的好歌分享</p>
                  </div>
                </li>
                <li>
                  <img src="http://p1.music.126.net/FgsSeWWHgrOBbqKdJWXiUQ==/109951164492947783.jpg?param=200y200" alt=""/>
                  <div className="radioInfo">
                    <h3>Dazed Weekend</h3>
                    <p>倾听音乐人的好歌分享</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}