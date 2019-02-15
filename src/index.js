import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import { ConnectedRouter } from 'connected-react-router/immutable';
import App from './App';
import configureStore, { history } from './configStore';
import axios from "axios";
import { message } from 'antd';
import loading from '@/utils/loading';

const initialState = Immutable.Map();
const store = configureStore(initialState);


axios.defaults.baseURL = '';
axios.default.timeout = 10000;

let messageName = null;
function messageFun(content) {
  if (!messageName) {
    localStorage.clear();
    messageName = message.fail(content, 3, () => {
      messageName = null;
    });
    history.push('/login');
  }
}

axios.interceptors.request.use(
    config => {
      loading.show();
      var storage = window.localStorage;
      var token = storage.token;
      if (!token) {
          token = "";
      }
      // config.headers["token"] = token;
      // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    res => {
      loading.hide();
      var result = res.data || {};
      if (result instanceof Array && result.length > 0) {
          result = result[0];
      }
      if (result && result.resultInfo && result.resultInfo.code === 401) {
        messageFun(result.message);
        return Promise.reject(res);
      }
      return result;
    },
    err => {
      loading.hide();
      let result = err.response ? err.response.data : {};
      if (result instanceof Array && result.length > 0) {
          result = result[0];
      }
      if (result.code === 401) {
          messageFun(result.message);
          return Promise.reject(err);
      }
      if (!err.response) {
        messageFun('接口超时或者其他错误！');
        return '';
      }
      return Promise.reject(err);
    }
);

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Component/>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
};

render(App);
