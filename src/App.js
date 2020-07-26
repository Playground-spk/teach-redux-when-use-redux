import React, { useState, useEffect } from "react";
import "./App.css";
import FormForSummit from "./component/FormForSummit";
import PersonList from "./component/PersonList";
import { connect } from "react-redux";

import "./css/formForSummit.css";
import "./css/personList.css";
import actionCreators from "./store/action/actionCreators";

function App(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitLoginForm = (e) => {
    e.preventDefault();
    props.login(username, password);
  };

  useEffect(() => {
    props.fetchData();
  }, [props.userStatus]);
  return (
    <div className="App">
      {props.userStatus === "member" ? null : (
        <form onSubmit={onSubmitLoginForm}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>login</button>
        </form>
      )}
      {props.userStatus === "member" ? <FormForSummit /> : null}
      {props.userStatus === "member" ? <PersonList /> : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userStatus: state.user.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) =>
      dispatch(actionCreators.login(username, password)),
    fetchData: () => dispatch(actionCreators.getPersonList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
