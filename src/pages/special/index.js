import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './store';

class Page extends Component {
  constructor(props) {
	  super(props);
    this.state = {};
	}

  componentDidMount() {
  }

  render() {
    return (
      <ul>
        {
          this.props.getDataTableByItemRed.map(item => <li key={item.comicId}>{item.author}</li>)
        }
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  getDataTableByItemRed: state.get('getDataTableByItemRed')
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Page);
