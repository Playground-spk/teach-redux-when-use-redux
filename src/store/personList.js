import ActionType from "./ActionTypes";

const initialState = {
  personList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_PERSON:
      return { ...state, personList: [...state.personList, action.payload] };

    case ActionType.EDIT_PERSON:
      const newPersonList = state.personList.map((person) =>
        person.id === action.id ? action.payload : person
      );
      console.log(newPersonList);
      return {
        ...state,
        personList: newPersonList,
      };

    default:
      return state;
  }
};

export default reducer;
