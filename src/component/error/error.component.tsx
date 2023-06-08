import { ReactNode } from "react";

const ErrorMessage = (message: ReactNode) => {
  return (
    <div>
      <div className="bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 border border-gray-100">
        {message}
      </div>
    </div>
  );
};

export default ErrorMessage;
