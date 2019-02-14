import React, { Suspense, PureComponent } from 'react';
import { LocaleProvider, Spin, Icon } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { renderRoutes } from 'react-router-config';
import configRoutes from '@/routes';

class Page extends PureComponent {
  constructor(props) {
	  super(props);
    this.state = {};
	}

  render() {
    return (
      <LocaleProvider locale={zh_CN}>
        <Suspense fallback={<Spin indicator={<Icon type="Loading" style={{ fontSize: 24 }} spin />} />}>
          {renderRoutes(configRoutes)}
        </Suspense>
      </LocaleProvider>
    );
  }
}

export default Page;
