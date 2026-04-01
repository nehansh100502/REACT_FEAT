import React from "react";
import PropsChild from "./PropsChild";

const PropParent = () => {
  const name = "React Js";
  const age = 5;
  const city = "New York";
  return (
    <div>
      <h1>Props Parent Component</h1>
      <PropsChild name={name} age={age} city={city} />
    </div>
  );
};
export default PropParent;

// props : to share the data from parent to child (immutable)
// state: local data of the component (mutable) store the data and can update using setState 
// (in class based component) and useState (in function based component)
