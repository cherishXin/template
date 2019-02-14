import React, { PureComponent } from 'react';
import { Header } from '@/components';
import './index.scss';

class Page extends PureComponent {
  constructor(props) {
	  super(props);
    this.state = {};
	}

  render() {
    return (
      <div className="home">
        <Header />
      </div>
    );
  }
}

export default Page;
