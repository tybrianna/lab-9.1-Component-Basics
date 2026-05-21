import React from 'react';

type AlertBoxProps = {
  type: 'success' | 'error' | 'info';
  message: string;
  onClose?: () => void;
};

export const AlertBox: React.FC<AlertBoxProps> = ({
  type,
  message,
  onClose
}) => {
  return (
    <div>
      <p>{message}</p>

      {onClose && (
        <button onClick={onClose}>×</button>
      )}
    </div>
  );
};