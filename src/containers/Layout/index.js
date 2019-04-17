import React, { Component } from 'react';
import Header from 'components/Header';

export default class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <>
        <Header />
        {children}
      </>
    );
  }
}
