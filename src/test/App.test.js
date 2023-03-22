import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App.js';
import '@testing-library/jest-dom/extend-expect';

test('App links work', async () => {
    render(<App />);
  
    const mainLink = screen.getByRole('link', { name: /main/i });
    userEvent.click(mainLink);
    await screen.findByRole('heading', { name: /main/i });
  
    const postsLink = screen.getByRole('link', { name: /posts/i });
    userEvent.click(postsLink);
    await screen.findByRole('heading', { name: /posts/i });
  
    const loginLink = screen.getByRole('link', { name: /login/i });
    userEvent.click(loginLink);
    await screen.findByRole('heading', { name: /login/i });
  });
  
