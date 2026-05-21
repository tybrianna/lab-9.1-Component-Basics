import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { UserProfileCard } from './UserProfileCard';

const mockUser = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'Developer'
};

describe('UserProfileCard', () => {
  test('renders user information', () => {
    render(
      <UserProfileCard user={mockUser} />
    );

    expect(
      screen.getByText('John Doe')
    ).toBeInTheDocument();
  });

  test('calls onEdit when button clicked', () => {
    const mockEdit = vi.fn();

    render(
      <UserProfileCard
        user={mockUser}
        onEdit={mockEdit}
      />
    );

    fireEvent.click(
      screen.getByText('Edit Profile')
    );

    expect(mockEdit).toHaveBeenCalledWith('1');
  });
});