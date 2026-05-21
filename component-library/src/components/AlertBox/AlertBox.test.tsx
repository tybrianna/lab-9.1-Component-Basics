import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { AlertBox } from './AlertBox';
import '@testing-library/jest-dom';

describe('AlertBox', () => {
  test('renders message correctly', () => {
    render(
      <AlertBox type="success" message="Success message" />
    );

    expect(screen.getByText('Success message')).toBeInTheDocument();
  });

  test('calls onClose when button clicked', () => {
    const mockClose = vi.fn();

    render(
      <AlertBox
        type="error"
        message="Error occurred"
        onClose={mockClose}
      />
    );

    fireEvent.click(screen.getByRole('button'));

    expect(mockClose).toHaveBeenCalledTimes(1);
  });
});