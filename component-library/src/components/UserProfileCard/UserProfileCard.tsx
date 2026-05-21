import React from 'react';
import { UserProfileCardProps } from '../types';

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children
}) => {
  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '1rem',
        borderRadius: '8px'
      }}
    >
      {user.avatarUrl && (
        <img
          src={user.avatarUrl}
          alt={user.name}
          width="100"
        />
      )}

      <h2>{user.name}</h2>

      {showEmail && <p>{user.email}</p>}

      {showRole && <p>{user.role}</p>}

      {onEdit && (
        <button onClick={() => onEdit(user.id)}>
          Edit Profile
        </button>
      )}

      {children}
    </div>
  );
};