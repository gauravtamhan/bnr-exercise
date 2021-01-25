import { render, screen, act, waitFor } from '@testing-library/react';
import App from './App';

import { fetchPosts } from './fetchPosts';

jest.mock('./fetchPosts');

const blogPosts = [
    {
        userId: 1,
        id: 1,
        title: 'First Post',
        body: 'sample body text',
    },
    {
        userId: 1,
        id: 2,
        title: 'sample title text',
        body: 'sample body text',
    },
];

describe('App', () => {
    it('fetches blog posts and displays them', async () => {
        fetchPosts.mockResolvedValueOnce(blogPosts);
        render(<App />);
        expect(screen.getByText(/Loading/)).toBeInTheDocument();
        expect(fetchPosts).toHaveBeenCalledTimes(1);

        screen.debug();

        await waitFor(() => {
            blogPosts.forEach(post =>
                expect(screen.getByText(post.title)).toBeInTheDocument()
            );
        });

        screen.debug();
    });
});
