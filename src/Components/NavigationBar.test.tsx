import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import NavigationBar from './NavigationBar';
import { Page } from '../App';

const navPages: Page[] = ['About', 'Projects', 'Contact'] as const;

describe('NavigationBar', () => {
  it('renders all navigation buttons', () => {
    const setPage = jest.fn();
    const { getByText } = render(<NavigationBar setPage={setPage} allPages={['Home', ...navPages]} />);

    navPages.forEach((page) => {
      expect(getByText(page)).toBeInTheDocument();
    });

    expect(getByText('Michael Kellar')).toBeInTheDocument();
  });

  it('calls setPage with the correct argument when a button is clicked', () => {
    const setPage = jest.fn();
    const { getByText } = render(<NavigationBar setPage={setPage} allPages={['Home', ...navPages]} />);

    navPages.forEach((page) => {
      const button = getByText(page);
      button.click();
      expect(setPage).toHaveBeenCalledWith(page);
    });

    const homeLink = getByText('Michael Kellar');
    homeLink.click();
    expect(setPage).toHaveBeenCalledWith('Home');
  });
});