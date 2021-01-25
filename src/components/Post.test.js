import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Post from './Post';

const postData = {
    userId: 1,
    title: 'First Post',
    body: 'sample body text',
};

describe('Post', () => {
    it('renders Post component', () => {
        render(<Post {...postData} />);
        expect(screen.getByText(/First Post/)).toBeInTheDocument();
        expect(screen.getByText(/sample body text/)).toBeInTheDocument();
        expect(screen.getByText(/User 1/)).toBeInTheDocument();
    });

    it('post cards should be clickable ', async () => {
        const onClick = jest.fn();
        render(<Post {...postData} onClick={onClick} />);
        await userEvent.click(screen.getByText(/First Post/));
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
