import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import NavigationBar from './NavigationBar';
import { MemoryRouter } from 'react-router-dom';

const navPages = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
] as const;

describe('NavigationBar', () => {
  it('renders all navigation buttons', () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavigationBar allPages={[{ name: 'Home', path: '/' }, ...navPages]} />
      </MemoryRouter>,
    );

    navPages.forEach((page) => {
      expect(getByText(page.name)).toBeInTheDocument();
    });

    expect(getByText('Michael Kellar')).toBeInTheDocument();
  });

  it('renders navigation links with expected route targets', () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavigationBar allPages={[{ name: 'Home', path: '/' }, ...navPages]} />
      </MemoryRouter>,
    );

    navPages.forEach((page) => {
      const link = getByText(page.name).closest('a');
      expect(link).toHaveAttribute('href', page.path);
    });

    const homeLink = getByText('Michael Kellar').closest('a');
    expect(homeLink).toHaveAttribute('href', '/');
  });
});