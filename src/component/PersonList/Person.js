import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import ActionType from "../../store/ActionTypes";

function Person(props) {
  const [index, setIndex] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const onSubmit = () => {
    props.edit({ name, age },props.id);
    setIndex(0);
  };

  /* jsx */
  const content = (
    <>
      <div className="item">name : {props.name}</div>

      <div className="item">Age : {props.age}</div>
    </>
  );

  const edit = (
    <div className="item" onClick={() => setIndex(2)}>
      {" "}
      edit
    </div>
  );

  const formEdit = (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <input
          type="text"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button>edit</button>
      </form>
    </div>
  );

  /* <---------------.*/
  const tabComponent = [content, edit, formEdit];
  return (
    <div
      className="person"
      onMouseEnter={() => setIndex(1)}
      onMouseLeave={() => setIndex(0)}
    >
      {tabComponent[index]}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    edit: (payload,id) => dispatch({ type: ActionType.EDIT_PERSON, payload,id }),
  };
};
export default connect(null, mapDispatchToProps)(Person);
