import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Home from './Home';
import articleData from '../utils/articlesData.json';

describe('Home component', () => {
    test('renders the correct number of articles', () => {
        render(<Home />);
        const articleList = screen.getByTestId('article-list');
        expect(articleList.childNodes.length).toBe(articleData[0].articles.length);
    });

    test('renders the correct heading for article container', () => {
        render(<Home />);
        const heading = screen.getByTestId('heading');
        expect(heading).toHaveTextContent('Related Articles');
    });

    test('renders the correct description for article container', () => {
        render(<Home />);
        const mainDescription = screen.getByTestId('main-description');
        expect(mainDescription).toBeInTheDocument();
    });

    test('the input should change the value', () => {
        render(<Home />);
        const input = screen.getByTestId('read-input') as HTMLInputElement;
        fireEvent.change(input as HTMLInputElement, {
            target: {
                value: '1'
            }
        });
        expect(input.value).toBe('1');
    });

    test('the input number should match the number of tiles', () => {
        render(<Home />);
        const input = screen.getByTestId('read-input') as HTMLInputElement;
        fireEvent.change(input as HTMLInputElement, {
            target: {
                value: '2'
            }
        });

        const articleList = screen.getByTestId('article-list');
        expect(articleList.childNodes.length).toBe(2);
    });
});
