import React from "react";

const ValidationMessage = ({ type, children }) => {
  const className = type ? "success" : "error";

  return <p className={className}>{children}</p>;
};

export default ValidationMessage;
