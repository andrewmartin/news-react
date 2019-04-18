import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions as articleActions } from 'reducers/article';
import Header from 'components/Header';

class Layout extends Component {
  onSearch = query => {
    const {
      actions: { getArticles },
    } = this.props;
    getArticles(query);
  };

  render() {
    const { children } = this.props;
    return (
      <>
        <Header onSearch={this.onSearch} />
        {children}
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...articleActions,
    },
    dispatch
  ),
});

export default connect(
  null,
  mapDispatchToProps
)(Layout);
