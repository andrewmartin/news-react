import React, { createRef, Component } from 'react';
import { Form, Button, Tooltip } from 'reactstrap';

import SearchDropdown from './components/SearchDropdown';

import styles from './Search.module.scss';

export default class Search extends Component {
  constructor(props) {
    super(props);

    const {
      query: { q },
    } = props;

    this.state = {
      q,
      sortBy: '',
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
    const { q, sortBy } = this.state;

    if (onSubmit && q) {
      onSubmit({ q, sortBy });
    }
  };

  render() {
    const { q } = this.state;

    return (
      <>
        {this.search.current && !q && (
          <Tooltip isOpen={!q} placement="bottom" target={this.search.current}>
            Please enter a search term.
          </Tooltip>
        )}
        <Form className={styles.form} onSubmit={this.submit}>
          <input
            ref={this.search}
            className={styles.input}
            defaultValue={q}
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
