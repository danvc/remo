import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders project title', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/MOTORCYCLE RECOGNITIONt/i);
    expect(linkElement).toBeInTheDocument();
});
