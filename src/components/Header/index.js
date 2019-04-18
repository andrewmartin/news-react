import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import { SearchForm } from 'components/Forms';

import styles from './Header.module.scss';

export default class Header extends Component {
  render() {
    const { onSearch } = this.props;

    return (
      <header className={styles.header}>
        <Container>
          <Row>
            <Col className={styles.container} sm="12">
              <h1 className={styles.logo}>News</h1>
              <SearchForm onSubmit={onSearch} />
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}
