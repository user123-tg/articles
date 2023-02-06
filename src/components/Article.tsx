import React from 'react';
import { articleInfo } from '../utils/helper';

interface article {
    article: articleInfo;
}

const Article = ({ article }: article) => {
    const { title, content, created_at, bg_color, id } = article;

    return (
        <article style={{ backgroundColor: bg_color }} className="article" data-testid={`${id}-article`}>
            <p data-testid={`${id}-created`}>{created_at}</p>
            <h1 data-testid={`${id}-title`} className="article-title">
                {title}
            </h1>
            <p data-testid={`${id}-content`} className="article-content font-line-style">
                {content}
            </p>
            <button className="btn" title="Read more">
                Read More
            </button>
        </article>
    );
};

export default Article;
