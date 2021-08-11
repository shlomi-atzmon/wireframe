import React from "react";
import { useSelector } from "react-redux";

const AddRecipients = () => {
  const state = useSelector((state) => state);
  return (
    <>
      <div>Add Recipients Form: </div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
};

export default AddRecipients;
