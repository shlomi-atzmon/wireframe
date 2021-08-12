import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import FormContainer from "./FormContainer";

const AddRecipients = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    // TODO - count table number of participants
    dispatch({ type: "ADD_RECIPIENTS", payload: { participants: 3 } });
    history.push("./add-modules");
  };

  const handleAddRecipients = (e) => {
    // TODO - REMOVE BUTTON
    // TODO - ADD RECIPIENTS TABLE TO DOM ROW NUMBER,NAME,EMAIL,MOBILE
    console.log("show table of Recipients");
  };

  return (
    <FormContainer>
      <h2 className="ui center aligned header">Add Recipients</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="ui large form">
        <div className="field">
          <button
            onClick={handleAddRecipients}
            className="ui purple basic button"
            type="button"
          >
            Add Recipients
          </button>
        </div>

        <Link to="/dashboard" className="ui left floated button">
          Discard
        </Link>
        <button className="ui right floated primary button" type="submit">
          Next
        </button>
      </form>
    </FormContainer>
  );
};

export default AddRecipients;
