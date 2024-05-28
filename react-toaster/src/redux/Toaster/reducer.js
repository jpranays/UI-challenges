import { ADD_TOAST, CLEAR_ALL_TOAST, REMOVE_TOAST } from "./types";
const initialState = {
	toastsList: [],
};

export function toasterReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TOAST:
			return {
				...state,
				toastsList: [...state.toastsList, action.payload],
			};
		case REMOVE_TOAST:
			return {
				...state,
				toastsList: state.toastsList.filter(
					(toast) => toast.id !== action.payload.id
				),
			};
		case CLEAR_ALL_TOAST:
			return {
				...state,
				toastsList: [],
			};
		default:
			return state;
	}
}
