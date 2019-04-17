import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as articleActions } from 'reducers/article';

import styles from './Home.module.scss';

class Home extends Component {
  componentDidMount() {
    const {
      actions: { getArticles },
    } = this.props;

    getArticles();
  }

  render() {
    return (
      <div className={styles.home}>
        <h2>Home</h2>
      </div>
    );
  }
}

const mapStateToProps = ({ article }) => ({
  article,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...articleActions,
    },
    dispatch
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
