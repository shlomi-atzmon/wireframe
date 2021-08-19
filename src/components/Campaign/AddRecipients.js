import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import * as XLSX from "xlsx";
import FormWrapper from "../../hoc/FormWrapper/FormWrapper";

const AddRecipients = () => {
  const [showButton, setShowButton] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();
  const { handleSubmit } = useForm();

  const onSubmit = () => {
    dispatch({ type: "ADD_RECIPIENTS", payload: { participants: 3 } });
    history.push("./add-modules");
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      let readedData = XLSX.read(e.target.result, { type: "binary" });
      let wsname = readedData.SheetNames[0];
      let ws = readedData.Sheets[wsname];
      let data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      handleRecipients(data);
    };

    reader.readAsBinaryString(file);

    setShowButton(false);
  };

  const handleRecipients = (data) => {
    data.forEach((row) => {
      console.log(row);
    });
  };

  const renderRecipients = () => {
    return !showButton ? (
      <>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td data-label="First-Name">Monty</td>
            <td data-label="Last-Name">Alon</td>
            <td data-label="Age">alonmo@gmail.com</td>
            <td data-label="Job">0526344250</td>
            <td className="center aligned">
              <i className="edit outline icon"></i>
              <i className="trash alternate outline icon"></i>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td data-label="First-Name">Shlomi</td>
            <td data-label="Last-Name">Atzmon</td>
            <td data-label="Age">shlomiatzmon82@gmail.com</td>
            <td data-label="Job">0546535023</td>
            <td className="center aligned">
              <i className="edit outline icon"></i>
              <i className="trash alternate outline icon"></i>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td data-label="First-Name">Eyal</td>
            <td data-label="Last-Name">Fisher</td>
            <td data-label="Age">fisher.eyal@gmail.com</td>
            <td data-label="Job">0544684772</td>
            <td className="center aligned">
              <i className="edit outline icon"></i>
              <i className="trash alternate outline icon"></i>
            </td>
          </tr>
        </tbody>
      </table>
      <div>Total recipients: 3</div>
      </>
    ) : null;
  };

  return (
    <FormWrapper>
      <h2 className="ui center aligned header">Add Recipients</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="ui large form">
        <div className="field">{renderRecipients()}</div>

        <Link
          to="/new-campaign"
          className="ui left floated secondary basic button"
        >
          Back
        </Link>

        {showButton ? (
          <>
            <input
              type="file"
              id="files"
              style={{ display: "none" }}
              name="recipients"
              onChange={(e) => {
                handleUpload(e);
              }}
            />
            <label
              className="ui right floated purple basic button"
              htmlFor="files"
            >
              Upload Recipients
            </label>
          </>
        ) : (
          <button
            style={{ marginRight: "-35px" }}
            className="ui right floated primary basic button"
            type="submit"
          >
            Next
          </button>
        )}
      </form>
    </FormWrapper>
  );
};

export default AddRecipients;
