import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

//Dummy data
import { getDate } from "../../services/Date";
import User from "../../data/User";

// Validator
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

//Components
import FormWrapper from "../../hoc/FormWrapper/FormWrapper";
import ValidationMessage from "../../hoc/ValidationMessage/ValidationMessage";

const schema = object().shape({
  title: string()
    .max(60, "It's a very long name")
    .required("Title is required"),
  description: string().required("Description is required"),
});

const NewCampaign = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const campaign = useSelector(({ campaign }) => campaign);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
    defaultValues: {
      title: campaign.title,
      description:campaign.description
    }
  });

  const onSubmit = (data) => {
    data.user = User;
    data.scheduled = getDate();
    dispatch({ type: "NEW_CAMPAING", payload: data });
    history.push("./add-recipients");
  };

  const onDiscard = () => {
    dispatch({ type: "REMOVE_CAMPAING" });
    history.push("./dashboard");
  };

  return (
    <FormWrapper>
      <h2 className="ui center aligned header">Add a new campaign</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="ui large form">
        <div className="field">
          <label>Campaign title</label>
          <input
            type="text"
            autoComplete="off"
            placeholder="Campaign title"
            {...register("title")}
          />

          <ValidationMessage type={false}>
            {errors.title?.message}
          </ValidationMessage>
        </div>
        <div className="field">
          <label>Description</label>
          <textarea
            placeholder="Tell us more..."
            rows="3"
            {...register("description")}
          ></textarea>

          <ValidationMessage type={false}>
            {errors.description?.message}
          </ValidationMessage>
        </div>

        <button
          className="ui left floated secondary basic button"
          onClick={onDiscard}
        >
          Discard
        </button>
        <button className="ui right floated primary basic button" type="submit">
          Next
        </button>
      </form>
    </FormWrapper>
  );
};

export default NewCampaign;
