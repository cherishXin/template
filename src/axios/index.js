import qs from 'query-string';
import axios from 'axios';

const get = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.get(url, {params}).then(res => {
        if (res && res.data) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
    });
  });
};

const post = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(params)).then(res => {
        if (res && res.data) {
          resolve(res.data);
        } else {
          reject(res);
        }
    });
  });
};

export {
    get,
    post
};
