import React from "react";
import { useState } from "react";
import "./category.css";
import Add from "../assets/add_FILL0_wght400_GRAD0_opsz48.svg";
import Edit from "../assets/edit_FILL0_wght400_GRAD0_opsz48.svg";
import Delete from "../assets/delete_FILL0_wght400_GRAD0_opsz48.svg";

export default function Sales({ openInvoice, handleInvoiceHeadingText }) {
  const [deletediv, setDeletediv] = useState(false);
  return (
    <div className="appContainer">
      <div className="appContainer1">
        {/* Main Heading */}
        <div className="h1Container">
          <h3> Sales</h3>
        </div>
        {/* Buttons */}
        <div className="ButtContainer">
          <div className="ButtContainer">
            {/* Function to change Invoice Heading Text */}
            <button
              className="btn"
              onClick={() => {
                handleInvoiceHeadingText("Make Invoice");
                openInvoice();
              }}
            >
              <div className="btn-wrapper">
                <img src={Add} alt="" />
                <span>Add Sale</span>
              </div>
            </button>
            {/* Function to change Invoice Heading Text */}
            <button
              className="btn"
              onClick={() => {
                handleInvoiceHeadingText("Edit Sale");
                openInvoice();
              }}
            >
              <div className="btn-wrapper">
                <img src={Edit} alt="" />
                <span>Edit</span>
              </div>
            </button>
            {/* Function to Handle Delete popup */}
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
      </div>
      {/* Delete and Search Section */}
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
      {/* Sales Table */}
      <div className="appContainer3">
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
              <th>Price</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="row">
              <td>
                <input className="cb1" type="checkbox" />
              </td>
              <td>#001</td>
              <td>01/07/2023</td>
              <td>Customer 1</td>
              <td>Books</td>
              <td>02</td>
              <td>Rs.145.00</td>
              <td colSpan="2"></td>
            </tr>
            <tr>
              <td colSpan="4"></td>
              <td>Pens</td>
              <td>03</td>
              <td>Rs.35.00</td>
              <td>Rs.395.00</td>
              <td className="deliver">Delivered</td>
            </tr>
            <tr>
              <td>
                <input className="cb1" type="checkbox" />
              </td>
              <td>#002</td>
              <td>10/06/2023</td>
              <td>Customer 2</td>
              <td>Books</td>
              <td>02</td>
              <td>Rs.150.00</td>
              <td>Rs.300.00</td>
              <td className="deliver">Delivered</td>
            </tr>
            <tr>
              <td>
                <input className="cb1" type="checkbox" />
              </td>
              <td>#003</td>
              <td>01/06/2023</td>
              <td>Customer 3</td>
              <td>Books</td>
              <td>02</td>
              <td>Rs.150.00</td>
              <td>Rs.300.00</td>
              <td className="deliver">Delivered</td>
            </tr>
            <tr>
              <td>
                <input className="cb1" type="checkbox" />
              </td>
              <td>#004</td>
              <td>11/06/2023</td>
              <td>Customer 4</td>
              <td>Books</td>
              <td>02</td>
              <td>Rs.150.00</td>
              <td>Rs.300.00</td>
              <td className="pending">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
