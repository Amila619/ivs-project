import React from 'react';
import './Invoice.css';

export default function Invoice({closeInvoice}) {
  return (
    <div className='app-wrapper'
    onClick={(e) => {
      if (e.target.className === "app-wrapper") {
        closeInvoice();
      }
    }}>
      <div className="appContainer">
{/* Heading */}
      <div className='appContainer1'>
        <div className='h1Container'>
          <h1>Make Invoice</h1>
        </div>
      </div>

{/* Input Details */}
<form>
    <table className='form1'>
      <tr>
        <td className='Input1'>
          <span>Invoice ID</span>
        </td>
        <td className='Input2'>
          <input type="text"  />
        </td>
        <td className='Input1'>
          <span>Invoice Date</span>
        </td>
        <td className='Input2'>
          <input type="date" />
        </td>
      </tr>

      <tr>
        <td className='Input1'>
          <span>Customer ID</span>
        </td>
        <td className='Input3'>
          <input type="text" />
          
        </td>
        <td className='Input1'>
          <span>Customer Name</span>
        </td>
        <td className='Input3'>
          <input type="text" />
        </td>
      </tr>

      <tr>
        <td className='Input1'>
          <span>Status</span>
        </td>
        <td className='Input3'>
          <input type="text" />
        </td>
      </tr>
    </table>
</form>
{/* End The Input Details */}
<br></br>
{/*chart Table Details */}
  <table className='table'>
    <thead>
      <th>Product ID</th>
      <th>Item</th>
      <th>Quantity</th>
      <th>Unit Price</th>
      <th>Total Price</th>
    </thead>
    <tbody>
      <tr className='row'>
        <td className='Input3'>#22101</td>
        <td>Atlas CR 40Pg</td>
        <td>02</td>
        <td>Rs.145.00</td>
        <td>Rs.290.00</td>
      </tr>
      <tr className='row'>
        <td className='Input3'>#22025</td>
        <td>Atlas Blue Pen</td>
        <td>03</td>
        <td>Rs.35.00</td>
        <td>Rs.105.00</td>
      </tr>
    </tbody>
  </table>
  <br />

{/* Total Amount */}
<div className='container'>
  <div className='total'>
      
      <span className='text1'>Total Amount</span>
      <span className='text2'>Rs.395.00</span>
      
  </div>
</div>

    
    <br /> <br />
{/* Button */}
    <div className='btnContainer'>
        <button type="button"  className='btn-invoice'>Print Invoice</button>
        <button type="button"  className='btn-invoice'>Save</button>
    </div>


  </div>

    </div>
        
  )
}
