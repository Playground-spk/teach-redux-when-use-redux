import ActionTypes from "../action/actionType";

const initialState = {
  status: "guest",
  token: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USER_LOGIN:
      return { ...state, status: "member", token: action.token };

    default:
      return state;
  }
};

export default reducer;
