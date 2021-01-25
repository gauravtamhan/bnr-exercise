import { render, screen, waitFor, act } from '@testing-library/react';
import { fetchPosts } from './api/fetchPosts';
import App from './App';

jest.mock('./api/fetchPosts');

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
        title: 'Second Post',
        body: 'sample body text',
    },
];

describe('App', () => {
    it('displays loading text while fetching blog posts', async () => {
        fetchPosts.mockResolvedValueOnce(blogPosts);
        render(<App />);
        expect(screen.getByText(/Loading/)).toBeInTheDocument();
        expect(fetchPosts).toHaveBeenCalledTimes(1);
    });

    it('displays blog posts after successful fetch', async () => {
        fetchPosts.mockResolvedValueOnce(blogPosts);
        await act(async () => render(<App />));
        expect(fetchPosts).toHaveBeenCalledTimes(1);

        await waitFor(() => {
            blogPosts.forEach(post =>
                expect(screen.getByText(post.title)).toBeInTheDocument()
            );
        });
    });

    it('displays error message after failed fetch', async () => {
        fetchPosts.mockRejectedValueOnce(new Error('Unable to load posts'));
        await act(async () => render(<App />));
        expect(fetchPosts).toHaveBeenCalledTimes(1);

        await waitFor(() => {
            expect(
                screen.getByText(/Unable to load posts/)
            ).toBeInTheDocument();
        });
    });

    it('displays empty content after successful fetch returns no data', async () => {
        fetchPosts.mockResolvedValueOnce([]);
        await act(async () => render(<App />));
        expect(fetchPosts).toHaveBeenCalledTimes(1);

        await waitFor(() => {
            expect(
                screen.getByText(/No blog posts to show/)
            ).toBeInTheDocument();
        });
    });
});
