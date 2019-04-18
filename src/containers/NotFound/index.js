import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import styles from './NotFound.module.scss';

export default class NotFound extends Component {
  render() {
    return (
      <div className={styles.home}>
        <Container>
          <Row>
            <Col>
              <h2>404</h2>
              <p>We cannot find what you were looking for.</p>
              <p>
                <Link to="/">Return home</Link>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
