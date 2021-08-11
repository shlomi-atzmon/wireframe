import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const NewCampaign = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch({ type: "ADD_FORM_DATA", payload: data });
    history.push("./add-recipients");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="ui form">
      <div className="field">
        <label>Campaign title</label>
        <input
          type="text"
          name="campaign-title"
          placeholder="Campaign title"
          {...register("title")}
        />
      </div>
      <div className="field">
        <label>Description</label>
        <input
          type="text"
          name="description"
          placeholder="Description"
          {...register("description")}
        />
      </div>
      <Link to="/dashboard" className="ui left floated button">
        Discard
      </Link>
      <button className="ui right floated primary button" type="submit">
        Next
      </button>
    </form>
  );
};

export default NewCampaign;
