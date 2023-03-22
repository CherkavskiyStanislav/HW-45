import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Posts from "../components/Posts.js";

test('Posts has title', () => {
  render(<Posts />);
  const titleElement = screen.getByText(/posts/i);
  expect(titleElement).toBeInTheDocument(); 
});
