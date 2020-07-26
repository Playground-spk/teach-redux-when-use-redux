import ActionTypes from "../action/actionType";

const initialState = {
  personList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PERSONS:
      return { ...state, personList: action.data };

    case ActionTypes.ADD_PERSON:
      return { ...state, personList: action.data };
    case ActionTypes.EDIT_PERSON:
      return { ...state, personList: action.data };
    default:
      return state;
  }
};

export default reducer;
