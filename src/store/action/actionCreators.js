import ActionTypes from "./actionType";
import axios from "../../config/axios";

//personList
const getPersonList = () => {
  return async (dispatch) => {
    const result = await axios.get("/person/get-all");

    dispatch({ type: ActionTypes.GET_PERSONS, data: result.data });
  };
};

const addPersonAndFetchData = (payload) => {
  return async (dispatch) => {
    await axios.post("/person", payload);
    const result = await axios.get("/person/get-all");
    dispatch({ type: ActionTypes.ADD_PERSON, data: result.data });
  };
};

const EditPerson = (payload, id) => {
  return async (dispatch) => {
    await axios.patch(`/person/by-id/${id}`, payload);
    const result = await axios.get("/person/get-all");
    dispatch({ type: ActionTypes.EDIT_PERSON, data: result.data });
  };
};

//user
const login = (username, password) => {
  return async (dispatch) => {
    try {
      const result = await axios.post("/user/login", { username, password });
      dispatch({ token: result.data, type: ActionTypes.USER_LOGIN });
    } catch (error) {
      if (error.response.status === 400) alert("username or password is wrong");
    }
  };
};

const actionCreators = {
  login,
  getPersonList,
  addPersonAndFetchData,
  EditPerson,
};

export default actionCreators;
