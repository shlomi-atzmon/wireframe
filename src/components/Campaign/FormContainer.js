import React from "react";

const FormContainer = ({ children }) => {
  return (
    <div className="ui center aligned middle grid">
      <div className="column" style={{ maxWidth: "450px" }}>
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
