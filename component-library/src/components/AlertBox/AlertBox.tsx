type AlertBoxProps = {
  type: 'success' | 'error' | 'info';
  message: string;
  onClose?: () => void;
};

export const AlertBox = ({
  type,
  message,
  onClose
}: AlertBoxProps) => {
  return (
    <div className={`alert alert-${type}`}>
      <p>{message}</p>

      {onClose && (
        <button onClick={onClose}>x</button>
      )}
    </div>
  );
};