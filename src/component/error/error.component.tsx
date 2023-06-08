import { ErrorProps } from "../../types/types";
import ErrorIcon from "@mui/icons-material/Error";

const ErrorMessage: React.FC<ErrorProps> = ({ errorMessage }) => {
  return (
    <div className="text-2xl text-center p-20 w-auto">
      <div className="flex gap-3 justify-center bg-white-300 p-20 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 border border-gray-100">
        <span className="flex gap-2 items-center">
          <ErrorIcon color="error" />
          Error message:{" "}
        </span>
        <span className="font-bold text-3xl text-red-700">{errorMessage}</span>
      </div>
    </div>
  );
};

export default ErrorMessage;
