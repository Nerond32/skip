const initialState = {
  script: ""
};

function scriptReducer(state = initialState, action) {
  if (action.type === "UPDATE_SCRIPT") {
    return {
      ...state,
      script: action.payload.script
    };
  }
  return state;
}

export default scriptReducer;
