import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Article from './Article';

afterEach(cleanup);

const article = {
    id: 1,
    title: 'Lorem Ipsum',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    created_at: '01/01/2022',
    bg_color: '#f2f2f2'
};

describe('Article component', () => {
    it('renders the title, content, and created_at correctly', () => {
        render(<Article article={article} />);
        const created = screen.getByTestId('1-created');
        const title = screen.getByTestId('1-title');
        const content = screen.getByTestId('1-content');

        expect(title).toBeInTheDocument();
        expect(created).toBeInTheDocument();
        expect(content).toBeInTheDocument();

        expect(title).toHaveTextContent(article.title);
        expect(created).toHaveTextContent(article.created_at);
        expect(content).toHaveTextContent(article.content);
    });

    it('renders the correct background color', () => {
        render(<Article article={article} />);

        const articleContainer = screen.getByTestId('1-article');
        expect(articleContainer).toHaveStyle(`background-color: ${article.bg_color}`);
    });

    it('renders the "Read More" button', () => {
        render(<Article article={article} />);

        expect(screen.getByText('Read More')).toBeInTheDocument();
    });
});
