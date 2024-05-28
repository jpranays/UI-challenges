import { createStore, combineReducers } from "redux";
import { toasterReducer } from "./Toaster/reducer";

export const rootReducer = combineReducers({
	toastsData: toasterReducer,
});
export const store = createStore(rootReducer);
