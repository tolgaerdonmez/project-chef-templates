const initialState = {};

interface Action {
	type: string;
	payload: { [key: string]: any } | { [key: number]: any };
}

export default (state = initialState, { type, payload }: Action) => {
	switch (type) {
		case "DUMMY":
			return { ...state, ...payload };

		default:
			return state;
	}
};
