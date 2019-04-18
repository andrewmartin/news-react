import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import { SearchForm } from 'components/Forms';

import styles from './Header.module.scss';

export default class Header extends Component {
  render() {
    const { onSearch, query } = this.props;

    return (
      <header className={styles.header}>
        <Container>
          <Row>
            <Col className={styles.container} sm="12">
              <h1 className={styles.logo}>News</h1>
              <SearchForm onSubmit={onSearch} query={query} />
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}
