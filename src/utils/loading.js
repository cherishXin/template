import React from 'react';
import ReactDOM from 'react-dom';
import { ActivityIndicator } from 'antd';

const loading = () => {
  let loadingCount = 0;
  let dom = null;
  const create = () => {
    const el = document.createElement('div');
    document.querySelector('body').appendChild(el);

    return el;
  };
  // 显示loading
  const show = () => {
    if (loadingCount === 0) {
      dom = create();
      ReactDOM.render(<ActivityIndicator toast text="Loading" />, dom);
    }
    loadingCount++;
  };

  // 销毁loading
  const hide = () => {
    if (loadingCount === 1) {
      ReactDOM.unmountComponentAtNode(dom);
      document.querySelector('body').removeChild(dom);
    }
    loadingCount--;
  };

  return {
    show,
    hide,
    loadingCount,
  };
};

export default loading();
