const INITIAL_STATE = {
  board: []
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_BOARDS_FULFILLED:
      return {
        ...state,
        boards: payload
      }
    case FETCH_BOARDS_REJECTED:
      return {
        ...state,
        showError: true,
        error: error
      }
    default:
      return state;
  }
};
