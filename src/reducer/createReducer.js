/**
 *
 * @param {object} handlers
 * @param {object} initialState
 * @returns {function}
 */
const createReducer = (handlers, initialState) => (
  state = initialState,
  action
) => {
  const reduce = handlers[action.type];
  if (reduce) {
    return reduce(state, action);
  }
  return state;
};

export default createReducer;
