import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import { selectArticles } from 'selectors/article';
import { actions as articleActions } from 'reducers/article';
import { ArticleIndex } from 'components/Article';

import styles from './Home.module.scss';

class Home extends Component {
  render() {
    const { articles } = this.props;
    console.log('this.props', this.props);

    return (
      <div className={styles.home}>
        <Container>
          <Row>
            <Col>
              <Row>
                {articles.length ? (
                  articles.map(article => (
                    <Col key={article.title} md={6}>
                      <ArticleIndex {...article} />
                    </Col>
                  ))
                ) : (
                  <Col>
                    <p>No items found. Please search for articles above or try a different query.</p>
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: selectArticles(state),
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
