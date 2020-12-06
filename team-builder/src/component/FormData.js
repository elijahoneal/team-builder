import React from "react";

const FormData = (props) => {
  return (
    <article className="note-list">
      {props.forms.map((form) => (
        <section className="forms" key={form.id}>
          <h3>{form.name}</h3>
          <p>{form.email}</p>
          <p>{form.role}</p>
        </section>
      ))}
    </article>
  );
};

export default FormData;