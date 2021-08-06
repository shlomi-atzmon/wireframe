import React from "react";

const Details = () => {
  return (
    <form className="ui form">
      <div className="field">
        <label>Campaign title</label>
        <input type="text" name="campaign-title" placeholder="Campaign title" />
      </div>
      <div className="field">
        <label>Description</label>
        <input type="text" name="description" placeholder="Description" />
      </div>
      <button className="ui left floated button">Discard</button>
      <button className="ui right floated primary button">Next</button>
    </form>
  );
};

export default Details;
