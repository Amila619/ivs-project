import React from "react";
import "./category.css";
import Add from "../assets/add_FILL0_wght400_GRAD0_opsz48.svg";
import Edit from "../assets/edit_FILL0_wght400_GRAD0_opsz48.svg";
import Delete from "../assets/delete_FILL0_wght400_GRAD0_opsz48.svg";

export default function Sales() {
  return (
    <div className="appContainer">
      <div className="appContainer1">
        <div className="h1Container">
          <h3> Sales</h3>
        </div>
        <div className="ButtContainer">
          <div className="ButtContainer">
            <button className="btn">
              <div className="btn-wrapper">
                <img src={Add} alt="" />
                <span>Add Sale</span>
              </div>
            </button>
            <button className="btn">
              <div className="btn-wrapper">
                <img src={Edit} alt="" />
                <span>Edit</span>
              </div>
            </button>
            <button className="btn">
              <div className="btn-wrapper">
                <img src={Delete} alt="" />
                <span>Delete</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="search">
        <input
          type="search"
          id="ser1"
          name="s1"
          placeholder="Search Category"
        />
      </div>

      <div className="appContainer2">
        <table>
          <thead>
            <tr>
              <th>
                <input className="cb1" type="checkbox" />
              </th>
              <th>ID</th>
              <th>Date</th>
              <th>Name</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price Rs.</th>
              <th>Total Rs.</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input className="cb1" type="checkbox" />
              </td>
              <td>#001</td>
              <td>10/06/2023</td>
              <td>Customer 1</td>
              <td>Books</td>
              <td>02</td>
              <td>150</td>
              <th>300</th>
              <th>Delivered</th>
            </tr>
            <tr>
              <td>
                <input className="cb1" type="checkbox" />
              </td>
              <td>#002</td>
              <td>12/06/2023</td>
              <td>Customer 2</td>
              <td>Pens</td>
              <td>10</td>
              <td>35</td>
              <th>350</th>
              <th>Delivered</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
