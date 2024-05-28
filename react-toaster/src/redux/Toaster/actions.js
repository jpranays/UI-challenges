import { ADD_TOAST, CLEAR_ALL_TOAST, REMOVE_TOAST } from "./types";

export const addToast = (payload) => {
	return {
		type: ADD_TOAST,
		payload,
	};
};
export const removeToast = (payload) => {
    return {
        type: REMOVE_TOAST,
        payload,
    };
}
export const clearAllToast = () => {
    return {
        type: CLEAR_ALL_TOAST,
    };
}
