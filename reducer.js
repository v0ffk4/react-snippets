import { ACTIONS } from "./context";

export default function reducer(state, action) {
	switch (action.type) {
		case ACTIONS.ACTION_LABEL:
			return { ...state, stateValue: action.payload };
		default:
			return state;
	}
}
