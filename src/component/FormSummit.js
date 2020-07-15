import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import ActionTypes from "../store/ActionTypes";

function FormSummit(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const onSummit = (e) => {
    e.preventDefault();
    const id = Date.now();
    props.onSummit({ name, age, id });
    setName("");
    setAge("");
  };
  return (
    <div>
      <h1>Form For Add Person</h1>
      <form onSubmit={onSummit} className="form-summit">
        <div className="item">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder=" name ?"
          />
        </div>
        <div className="item">
          {" "}
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder=" age ?"
          />
        </div>

        <button>summit</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSummit: (payload) => dispatch({ type: ActionTypes.ADD_PERSON, payload }),
  };
};

export default connect(null, mapDispatchToProps)(FormSummit);
