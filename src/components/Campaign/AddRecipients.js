import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import FormContainer from "./FormContainer";

const AddRecipients = () => {
  const [showButton, setShowButton] = useState(true);
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
    setShowButton(false);
    console.log("show table of Recipients");
  };

  return (
    <FormContainer>
      <h2 className="ui center aligned header">Add Recipients</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="ui large form">
        <div className="field">
          {showButton ? (
            <button
              onClick={handleAddRecipients}
              className="ui purple basic button"
              type="button"
            >
              Add Recipients
            </button>
          ) : (
            <table className="ui celled table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Name">Monty Alon</td>
                  <td data-label="Age">alonmo@gmail.com</td>
                  <td data-label="Job">0526344250</td>
                </tr>
                <tr>
                  <td data-label="Name">Shlomi Atzmon</td>
                  <td data-label="Age">shlomiatzmon82@gmail.com</td>
                  <td data-label="Job">0546535023</td>
                </tr>
                <tr>
                  <td data-label="Name">Eyal Fisher</td>
                  <td data-label="Age">fisher.eyal@gmail.com</td>
                  <td data-label="Job">0544684772</td>
                </tr>
              </tbody>
            </table>
          )}
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
