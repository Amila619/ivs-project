import React, { useState } from "react";
import "./category.css";
import Add from "../assets/add_FILL0_wght400_GRAD0_opsz48.svg";
import Edit from "../assets/edit_FILL0_wght400_GRAD0_opsz48.svg";
import Delete from "../assets/delete_FILL0_wght400_GRAD0_opsz48.svg";

export default function Category({ openModal }) {
  const [deletediv, setDeletediv] = useState(false);
  return (
    <div
      className="appContainer"
      onClick={(e) => {
        if (e.target === "appContainer") {
          console.log(e.target.value);
          setDeletediv(false);
        }
      }}
    >
      <div className="appContainer1">
        <div className="h1Container">
          <h3>Categories</h3>
        </div>
        <div className="ButtContainer">
          <button className="btn" onClick={() => openModal()}>
            <div className="btn-wrapper">
              <img src={Add} alt="" />
              <span>Add Category</span>
            </div>
          </button>
          <button className="btn">
            <div className="btn-wrapper">
              <img src={Edit} alt="" />
              <span>Update</span>
            </div>
          </button>
          <button className="btn">
            <div
              className="btn-wrapper"
              onClick={() => {
                if (!deletediv) {
                  setDeletediv(true);
                } else {
                  setDeletediv(false);
                }
              }}
            >
              <img src={Delete} alt="" />
              <span>Delete</span>
            </div>
          </button>
        </div>
      </div>
      <div className="search">
        {deletediv && (
          <div className="delete">
            <span id="delete-msg">Successfully Deleted</span>
          </div>
        )}
        {!deletediv && (
          <input
            type="search"
            id="ser1"
            name="s1"
            placeholder="Search Category"
          />
        )}
      </div>

      <div className="appContainer2">
        <table>
          <thead>
            <tr>
              <th>
                <input className="cb1" type="checkbox" />
              </th>
              <th>Category ID</th>
              <th>Category Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input className="cb1" type="checkbox" />
              </td>
              <td>#001</td>
              <td>Book</td>
              <td>Stationary Items</td>
            </tr>
            <tr>
              <td>
                <input className="cb1" type="checkbox" />
              </td>
              <td>#002</td>
              <td>Vegitables</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <input className="cb1" type="checkbox" />
              </td>
              <td>#003</td>
              <td>Fruits</td>
              <td>Imported</td>
            </tr>
            <tr>
              <td>
                <input className="cb1" type="checkbox" />
              </td>
              <td>#004</td>
              <td>Ice Cream</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
