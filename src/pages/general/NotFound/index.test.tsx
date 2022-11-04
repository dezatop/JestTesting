import { render, screen } from '@testing-library/react';
import NotFoundPage from 'pages/general/NotFound';

test('renders learn react link', () => {
  render(<NotFoundPage />);
  const linkElement = screen.getByText(/Page not found/i);
  expect(linkElement).toBeInTheDocument();
});
