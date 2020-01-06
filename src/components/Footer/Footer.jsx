import React,{Component} from 'react';
import './css/footer.less'

export default class Footer extends Component{
  render(){
    return (
    <div className="footer">
      <div className="footer-wrap w1 clearfix">
          <div className="copy">
              <p className="fuwutiaokuan">
                  <a href="#1">服务条款</a><i>|</i><a href="#1">隐私政策</a><i>|</i><a href="#1">版权投诉指引</a><i>|</i><a href="#1">意见反馈</a><i>|</i>
              </p>
              <p className="wangyi">
                  <span>网易公司版权所有&copy;1997-2019</span>
                  <span>杭州乐读科技有限公司运营：</span><a href="#1">浙网文[2018]3506-263号</a>
              </p>

              <p className="jubao">
                  <span>违法和不良信息举报电话：0571-89853516</span><span>举报邮箱：</span><a href="#1">ncm5990@163.com</a>
              </p>


          </div>
          <ul className="yonghurenzheng">
              <li id="yonghu"><i></i><span></span></li>
              <li id="duli"><i></i><span></span></li>
              <li id="zanshang"><i></i><span></span></li>
              <li id="shipin"><i></i><span></span></li>
          </ul>

      </div>
  </div>
    )
  }
}