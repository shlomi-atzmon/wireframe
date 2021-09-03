import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { addRecipients } from '../../state/actions/campaignActions'
import * as XLSX from "xlsx";
import FormWrapper from "../../hoc/FormWrapper/FormWrapper";

const AddRecipients = () => {
  const [items, setItems] = useState([]);
  const [showButton, setShowButton] = useState(true);
  const [participants, setParticipants] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
  const { handleSubmit } = useForm();

  const onSubmit = () => {
    dispatch(addRecipients({ participants }));
    history.push("./add-modules");
  };

  const readExcel = (file) => {
    new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    }).then((data) => {
      setItems(data);
      setParticipants(data.length);
      setShowButton(false);
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
            {items.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td data-label="First-Name">{data[0]}</td>
                <td data-label="Last-Name">{data[1]}</td>
                <td data-label="Email">{data[2]}</td>
                <td data-label="Mobile">0{data[3]}</td>
                <td className="center aligned">
                  <i className="edit outline icon"></i>
                  <i className="trash alternate outline icon"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>Total recipients: {participants}</div>
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
                const file = e.target.files[0];
                readExcel(file);
              }}
              accept=".xl*"
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
