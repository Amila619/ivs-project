import React from "react";
import "./Modal.css";

export default function Modal({closeModal, btnTextVal, headingTextVal}) {
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") {
          closeModal();
        }
      }}
    >
      <div className="modal">
        <div className="modal-heading">
          <h2>{headingTextVal}</h2>
        </div>
        <form>
          <div className="form-group top ">
            <label className="input-label">ID</label>
            <input name="page" defaultValue="#001" className="customer-text" />
          </div>
          <div className="form-group">
            <label className="input-label">Name</label>
            <input name="page" defaultValue="Book" className="customer-text" />
          </div>
          <div className="form-group bottom">
            <label className="input-label">Description</label>
            <textarea
              name="description"
              defaultValue="Stationary Items"
              className="customer-text"
            />
          </div>
          <button type="submit" className="btn-add">
            <span>{btnTextVal}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
