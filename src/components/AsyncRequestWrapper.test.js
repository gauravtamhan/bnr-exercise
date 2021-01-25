import { render, screen } from '@testing-library/react';
import AsyncRequestWrapper from './AsyncRequestWrapper';

describe('AsyncRequestWrapper', () => {
    it('renders a spinner when loading', () => {
        render(
            <AsyncRequestWrapper loading>
                <div />
            </AsyncRequestWrapper>
        );

        expect(screen.getByText(/Loading/)).toBeInTheDocument();
    });
    it('renders an empty box icon when data is empty', () => {
        render(
            <AsyncRequestWrapper empty>
                <div />
            </AsyncRequestWrapper>
        );

        expect(screen.getByText(/No blog posts to show/)).toBeInTheDocument();
    });
    it('renders the error message in an alert box', () => {
        const err = 'Unable to load blog posts';

        render(
            <AsyncRequestWrapper error={err}>
                <div />
            </AsyncRequestWrapper>
        );

        expect(screen.getByText(err)).toBeInTheDocument();
    });
});
