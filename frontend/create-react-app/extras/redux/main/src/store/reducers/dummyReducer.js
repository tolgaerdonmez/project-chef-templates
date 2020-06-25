const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "DUMMY":
      return { ...state, ...payload };

    default:
      return state;
  }
};
