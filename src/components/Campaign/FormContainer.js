import React from "react";

const FormContainer = ({ children }) => {
  return (
    <div className="ui center aligned middle grid">
      <div className="column" style={{ maxWidth: "500px" }}>
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
