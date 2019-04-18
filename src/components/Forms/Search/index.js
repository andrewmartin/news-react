import React, { createRef, Component } from 'react';
import { Form, Button, Tooltip } from 'reactstrap';

import SearchDropdown from './components/SearchDropdown';

import styles from './Search.module.scss';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      q: '',
      sortBy: '',
      hasSearched: false, // only show tooltip after we've searched once
    };

    this.search = createRef(); // only needed for <Tooltip /> example
    this.onSearchChange = this.setValue.bind(this, 'sortBy');
    this.onInputChange = this.setValue.bind(this, 'q');
  }

  setValue = (type, e) => {
    const {
      target: { value },
    } = e;

    this.setState({
      [type]: value,
    });
  };

  submit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { q, sortBy, hasSearched } = this.state;

    if (!hasSearched) {
      // this is simply a bonus feature to show the tooltip
      // on the first and any subsequent searches only.
      // we check for its value here beacuse we
      // only want to set the state once, on the first submit.
      this.setState({
        hasSearched: true,
      });
    }

    if (!q) {
      return;
    }

    if (onSubmit) {
      onSubmit({ q, sortBy });
    }
  };

  render() {
    const { q, hasSearched } = this.state;

    return (
      <>
        {this.search.current && !q && hasSearched && (
          <Tooltip isOpen={!q} placement="bottom" target={this.search.current}>
            Please enter a search term.
          </Tooltip>
        )}
        <Form className={styles.form} onSubmit={this.submit}>
          <input
            ref={this.search}
            className={styles.input}
            onChange={this.onInputChange}
            placeholder="Search for articles..."
          />
          <SearchDropdown onChange={this.onSearchChange} />

          <Button color="primary">Submit</Button>
        </Form>
      </>
    );
  }
}
