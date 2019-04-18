import React, { Component } from 'react';

import styles from './SearchDropdown.module.scss';

export default class SearchDropdown extends Component {
  state = {
    options: [
      {
        value: 'publishedAt',
        label: 'Published At',
      },
      {
        value: 'relevancy',
        label: 'Relevancy',
      },
      {
        value: 'popularity',
        label: 'Popularity',
      },
    ],
  };

  onChange = e => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(e);
    }
  };

  render() {
    const { options } = this.state;

    return (
      <select className={styles.select} onChange={this.onChange}>
        <option disabled>Sort Articles</option>
        <option value="">None</option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    );
  }
}
