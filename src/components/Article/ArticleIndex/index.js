import React, { Component } from 'react';
import { Button, Badge } from 'reactstrap';

import styles from './ArticleIndex.module.scss';

export default class ArticleIndex extends Component {
  render() {
    const { title, urlToImage, content, url, publishedAt } = this.props;

    const background = {
      backgroundImage: `url(${urlToImage})`,
    };

    const date = new Date(publishedAt);
    const formattedDate = `${date.getMonth()}/${date.getFullYear()}`;

    return (
      <article className={styles.item}>
        <figure className={styles.image} style={background}>
          <Badge className={styles.date}>{formattedDate}</Badge>
        </figure>
        <div className={styles.content}>
          <h3 className={styles.heading}>{title}</h3>
          <p>{content}</p>
          <Button href={url} target="_blank">
            Read More
          </Button>
        </div>
      </article>
    );
  }
}
