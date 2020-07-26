import React from "react";
import { connect } from "react-redux";
import Person from "./personList/Person";

function PersonList(props) {
  return (
    <div className="person-list">
      {props.personList?.map((person) => (
        <Person
          name={person.name}
          age={person.age}
          key={person.id}
          id={person.id}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    personList: state.personList.personList,
  };
};

export default connect(mapStateToProps, null)(PersonList);
