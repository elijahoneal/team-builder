import React from "react";

const FormData = (props) => {
  return (
    <div className="note-list">
      {props.forms.map((form) => (
        <div className="forms" key={form.id}>
          <h3>{form.name}</h3>
          <p>{form.email}</p>
          <p>{form.role}</p>
        </div>
      ))}
    </div>
  );
};

export default FormData;