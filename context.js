import reducer from "./reducer";

export const Context = createContext();

export const ACTIONS = {
	ACTION_LABEL: "actionLabel",
};

const initialState = {
	stateValue: null,
};

export default function ContextProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const contextValue = useMemo(() => ({ state, dispatch }), [state]);

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
