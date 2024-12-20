import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import NavigationBar from './NavigationBar';
import { Page } from '../App';

const allPages: Page[] = ['Home', 'About', 'Projects', 'Contact'] as const;

describe('NavigationBar', () => {
  it('renders all navigation buttons', () => {
    const setPage = jest.fn();
    render(<NavigationBar setPage={setPage} allPages={allPages} />);

    allPages.forEach((page) => {
      expect(screen.getByText(page)).toBeInTheDocument();
    });
  });

  it('calls setPage with the correct argument when a button is clicked', () => {
    const setPage = jest.fn();
    render(<NavigationBar setPage={setPage} allPages={allPages} />);

    allPages.forEach((page) => {
      const button = screen.getByText(page);
      fireEvent.click(button);
      expect(setPage).toHaveBeenCalledWith(page);
    });
  });
});