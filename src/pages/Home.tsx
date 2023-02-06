import React, { useEffect, useState } from 'react';
import articleData from '../utils/articlesData.json'; //article data
import '../assets/styles/home.css';
import { articleInfo } from '../utils/helper';
import Article from '../components/Article';

const Home = () => {
    const [inputValue, setInputValue] = useState('3');
    const [articles, setArticles] = useState(articleData[0].articles); //initial state from articleData.json

    useEffect(() => {
        let numberValue = Number(inputValue);
        let totalArticles = articleData[0].articles;

        //conditions to validate inputValue on change and render tiles.
        if (!numberValue) {
            return;
        } else if (numberValue > totalArticles.length) {
            alert(`Enter between 1 and ${totalArticles.length}`);

            return;
        } else {
            let filteredArticles: articleInfo[] = [];

            totalArticles.forEach((item, index) => {
                if (numberValue === index || index > numberValue) {
                    return;
                } else {
                    filteredArticles.push(item);
                }
            });

            setArticles(filteredArticles);
        }
    }, [inputValue]);

    return (
        <section>
            {articleData.length &&
                articleData.map((item, index) => (
                    <div key={item.id} className="article-container" data-testid={'article-container'}>
                        <h1 className="article-container-heading" data-testid={'heading'}>
                            {item.heading}
                        </h1>
                        <p className="article-container-description font-line-style" data-testid="main-description">
                            {item.description}
                        </p>
                        <div className="article-list" data-testid="article-list">
                            {articles.map((article: articleInfo) => (
                                <Article article={article} key={article.id} />
                            ))}
                        </div>
                        <div className="article-container-footer">
                            <button className="btn secondary-btn" title="Read more">
                                Read More
                            </button>
                            <input className="input" type={'number'} data-testid="read-input" value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value)} />
                        </div>
                    </div>
                ))}
        </section>
    );
};

export default Home;
