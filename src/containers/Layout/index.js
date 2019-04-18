import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { push } from 'connected-react-router';
import qs from 'qs';
import { connect } from 'react-redux';

import { actions as articleActions } from 'reducers/article';
import Header from 'components/Header';

class Layout extends Component {
  componentDidMount() {
    const {
      location: { search },
    } = this.props;

    if (search) {
      this.fetchData();
    }
  }

  componentDidUpdate(prevProps) {
    const {
      location: { search },
    } = this.props;

    if (search !== prevProps.location.search) {
      this.fetchData();
    }
  }

  fetchData = () => {
    const {
      actions: { getArticles },
      location: { search },
    } = this.props;

    const query = qs.parse(search, { ignoreQueryPrefix: true });
    getArticles(query);
  };

  render() {
    const {
      children,
      goToSearch,
      location: { search },
    } = this.props;
    const query = qs.parse(search, { ignoreQueryPrefix: true });

    return (
      <>
        <Header onSearch={goToSearch} query={query} />
        {children}
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  goToSearch: query => dispatch(push(`/?${qs.stringify(query)}`)),
  actions: bindActionCreators(
    {
      ...articleActions,
    },
    dispatch
  ),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Layout)
);
