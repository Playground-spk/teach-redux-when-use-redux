import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FormSummit from "./component/FormSummit";
import PersonList from "./component/PersonList";

import "./css/formsummit.css";
import "./css/personList/person.css";
import "./css/personList.css";

function App() {
  return (
    <div className="App">
      <FormSummit />
      <PersonList />
    </div>
  );
}

export default App;
