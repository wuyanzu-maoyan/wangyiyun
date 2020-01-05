import {createStore,applyMiddleware} from 'redux';
//引入reducer
import reducer from './reducers'
//引入redux-thunk
import thunk from 'redux-thunk';
//引入redux-devtools-extension 支持redux开发者工具运行
import {composeWithDevTools} from 'redux-devtools-extension'
//暴露store对象
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));