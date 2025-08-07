import { Bounce, toast } from "react-toastify";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const toasterAlert = (obj) => {
    switch (obj.type) {
        case "success": toast(obj.message, {
            position: "top-right",
            autoClose: 5000,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
            break;
        case "error": toast(obj.message, {
            position: "top-right",
            autoClose: 5000,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }
}






export default BASE_URL;