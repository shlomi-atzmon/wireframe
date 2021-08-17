import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

// Validator
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

//Components
import FormWrapper from "../../hoc/FormWrapper/FormWrapper";
import ValidationMessage from "../../hoc/ValidationMessage/ValidationMessage";

// TODO - remove to final step
const getDate = () => {
  const date = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    monthNames[date.getMonth()] +
    " " +
    date.getDate() +
    ", " +
    date.getFullYear()
  );
};

const schema = object().shape({
  title: string()
    .max(60, "It's a very long name")
    .required("Title is required"),
  description: string().required("Description is required"),
});

const NewCampaign = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // temp data
    data.user = {
      name: "Eyal",
      avatar: "https://semantic-ui.com/images/avatar/small/elliot.jpg",
    };
    data.scheduled = getDate();
    dispatch({ type: "NEW_CAMPAING", payload: data });
    history.push("./add-recipients");
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

        <Link
          to="/dashboard"
          className="ui left floated secondary basic button"
        >
          Discard
        </Link>
        <button className="ui right floated primary basic button" type="submit">
          Next
        </button>
      </form>
    </FormWrapper>
  );
};

export default NewCampaign;
