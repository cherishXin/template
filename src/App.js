import React, { Suspense, PureComponent } from 'react';
import { LocaleProvider, Spin, Icon } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { renderRoutes } from 'react-router-config';
import configRoutes from '@/routes';
import { Switch } from 'react-router-dom';
import "@/style/index.scss";

class Page extends PureComponent {
  constructor(props) {
	  super(props);
    this.state = {};
	}

  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <Suspense fallback={<Spin indicator={<Icon type="Loading" style={{ fontSize: 24 }} spin />} />}>
          <Switch>{renderRoutes(configRoutes)}</Switch>
        </Suspense>
      </LocaleProvider>
    );
  }
}

export default Page;
