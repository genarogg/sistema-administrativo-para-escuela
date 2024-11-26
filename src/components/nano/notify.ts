import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

interface ToastProps {
  type: "success" | "error" | "warning";
  message: string;
}

const notify = ({ type, message }: ToastProps) => {
  switch (type) {
    case "success":
      toast.success(message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Bounce,
      });
      break;
    case "error":
      toast.error(message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Bounce,
      });
      break;
    case "warning":
      toast.warning(message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Bounce,
      });
      break;
    default:
      break;
  }
};

export default notify;
