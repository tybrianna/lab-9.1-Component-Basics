import React from "react";
import { UserProfileCardProps } from "./types";

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children,
}) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm w-full max-w-sm">
      <div className="flex items-center gap-4">
        <img
          src={user.avatarUrl || "https://via.placeholder.com/50"}
          alt={user.name}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold">{user.name}</h3>

          {showEmail && (
            <p className="text-sm text-gray-600">{user.email}</p>
          )}

          {showRole && (
            <p className="text-xs text-gray-500">{user.role}</p>
          )}
        </div>
      </div>

      {/* Children slot */}
      {children && <div className="mt-3">{children}</div>}

      {/* Edit button only if handler exists */}
      {onEdit && (
        <button
          onClick={() => onEdit(user.id)}
          className="mt-3 text-blue-600 text-sm font-medium hover:underline"
        >
          Edit Profile
        </button>
      )}
    </div>
  );
};

export default UserProfileCard;