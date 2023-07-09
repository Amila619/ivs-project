import React from 'react'
import './category.css';
import Add from '../assets/add_FILL0_wght400_GRAD0_opsz48.svg';
import Edit from '../assets/edit_FILL0_wght400_GRAD0_opsz48.svg';
import Delete from '../assets/delete_FILL0_wght400_GRAD0_opsz48.svg';


export default function Category() {
  return (
    <div className='appContainer'>
        <div className='appContainer1'>
            <div className='h1Container'>
                <h1> Categories</h1>
            </div>
            <div className='ButtContainer'>
                <button id='b1'><img src={Add} alt='' />Add Category</button>
                <button id='b2'><img src={Edit} alt='' />Edit</button>
                <button id='b3'><img src={Delete} alt='' />Delete</button>
            </div>
        </div>
        <div className='serarch'>
            <input type="search" id="ser1" name="s1" placeholder="Search Category"/>
        </div>

        <div className='appContainer2'>
            <table>
                <thead>
                    <tr>
                        <th><input id='cb1' type="checkbox"/></th>
                        <th>Category ID</th>
                        <th>Category Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input id='cb1' type="checkbox"/></td>
                        <td>#001</td>
                        <td>Book</td>
                        <td>Stationary Items</td>
                    </tr>
                    <tr>
                        <td><input id='cb1' type="checkbox"/></td>
                        <td>#002</td>
                        <td>Vegitables</td>
                        <td></td> 
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
  )
}
