import { FC } from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => (
  <div className="h2 text-center m-5">{message}</div>
);

export default ErrorMessage;
