import React from "react";
import { useSelector } from "react-redux";

const AddModules = () => {
  const state = useSelector((state) => state);
  return (
    <>
      <div>Add Modules: </div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
};

export default AddModules;
