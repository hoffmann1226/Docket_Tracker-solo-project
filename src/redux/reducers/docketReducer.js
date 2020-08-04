const docketReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_DOCKET':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default docketReducer;
