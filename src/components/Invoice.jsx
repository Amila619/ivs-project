import React from 'react';
import './Invoice.css';

export default function Invoice({closeInvoice}) {
  return (
    <div className='app-wrapper'>
      <div className="appContainer">
{/* Heading */}
      <div className='appContainer1'>
        <div className='h1Container'>
          <h3>Make Invoice</h3>
        </div>
      </div>

{/* Input Details */}
<div className='inp-table'>
  <form>
    <table className='form1'>
      <tbody>
      <tr>
        <td className='Input'>
          <span className='input-text'>Invoice ID</span>
        </td>
        <td className='Input'>
          <input type="text" defaultValue='#001'  className='inp'/>
        </td>
        <td className='Input'>
          <span className='input-text'>Invoice Date</span>
        </td>
        <td className='Input'>
          <input type="date" placeholder='01/07/2023' className='inp'/>
        </td>
      </tr>
      <tr>
        <td className='Input'>
          <span className='input-text' >Customer ID</span>
        </td>
        <td className='Input'>
          <input type="text" className='inp' defaultValue='2547215452v'/>
          
        </td>
        <td className='Input'>
          <span className='input-text' >Customer Name</span>
        </td>
        <td className='Input'>
          <input type="text" className='inp' defaultValue='Customer 1'/>
        </td>
      </tr>

      <tr>
        <td className='Input'>
          <span className='input-text' >Status</span>
        </td>
        <td className='Input'>
          <input type="text" className='inp' defaultValue='Delivered'/>
        </td>
      </tr>
      </tbody>
    </table>
</form>
</div>

{/*chart Table Details */}
  <div className='table2'>
  <table>
    <tr>
      <th>Product ID</th>
      <th>Item</th>
      <th>Quantity</th>
      <th>Unit Price</th>
      <th>Total Price</th>
    </tr>
    <tbody>
      <tr>
        <td className='Input'>#22101</td>
        <td>Atlas CR 40Pg</td>
        <td>02</td>
        <td>Rs.145.00</td>
        <td>Rs.290.00</td>
      </tr>
      <tr>
        <td className='Input'>#22025</td>
        <td>Atlas Blue Pen</td>
        <td>03</td>
        <td>Rs.35.00</td>
        <td>Rs.105.00</td>
      </tr>
    </tbody>
  </table>
  </div>
  <br />

{/* Total Amount */}
  <div className='total'>
      
      <span className='text1'>Total Amount</span>
      <span className='text2'>Rs.395.00</span>
      
  </div>
{/* Button */}
    <div className='btnContainer'>
        <button type="button"  className='btn-invoice'>Print Invoice</button>
        <button type="button"  className='btn-invoice' onClick={closeInvoice}>Save</button>
    </div>


  </div>

    </div>
        
  )
}
