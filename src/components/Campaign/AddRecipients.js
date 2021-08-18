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
    reader.onload = function (e) {
      let readedData = XLSX.read(e.target.result, { type: "binary" });
      let wsname = readedData.SheetNames[0];
      let ws = readedData.Sheets[wsname];
      let dataParse = XLSX.utils.sheet_to_json(ws, { header: 1 });
      handletRecipients(dataParse);
    };
    reader.readAsBinaryString(file);

    setShowButton(false);
  };

  const handletRecipients = (dataParse) => {
    dataParse.forEach((row) => {
      console.log(row);
    });
  };

  return (
    <FormWrapper>
      <h2 className="ui center aligned header">Add Recipients</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="ui large form">
        <div className="field">
          {showButton ? (
            <>
            <input
              type="file"
              id="files"
              style={{display:"none"}}
              name="recipients"
              onChange={(e) => {
                handleUpload(e);
              }}
            />
            <label className="ui purple basic button" htmlFor="files">Upload Recipients</label>
            </>
          ) : (
            <table className="ui celled table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td data-label="Name">Monty Alon</td>
                  <td data-label="Age">alonmo@gmail.com</td>
                  <td data-label="Job">0526344250</td>
                  <td className="center aligned">
                    <i className="edit outline icon"></i>
                    <i className="trash alternate outline icon"></i>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td data-label="Name">Shlomi Atzmon</td>
                  <td data-label="Age">shlomiatzmon82@gmail.com</td>
                  <td data-label="Job">0546535023</td>
                  <td className="center aligned">
                    <i className="edit outline icon"></i>
                    <i className="trash alternate outline icon"></i>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td data-label="Name">Eyal Fisher</td>
                  <td data-label="Age">fisher.eyal@gmail.com</td>
                  <td data-label="Job">0544684772</td>
                  <td className="center aligned">
                    <i className="edit outline icon"></i>
                    <i className="trash alternate outline icon"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>

        <Link
          to="/new-campaign"
          className="ui left floated secondary basic button"
        >
          Back
        </Link>
        <button className="ui right floated primary basic button" type="submit">
          Next
        </button>
      </form>
    </FormWrapper>
  );
};

export default AddRecipients;
