import './App.css';
import { useState } from 'react';

// Importing all the necessary Components
import Category from './components/category';
import Sales from './components/sales';
import Modal from './components/Modal';
import Invoice from './components/Invoice';

// Importing all the necessary Icons
import Person from './assets/person_FILL0_wght300_GRAD0_opsz48.svg'
import Items from './assets/align_items_stretch_FILL0_wght300_GRAD0_opsz48.svg'
import Categories from './assets/category_FILL0_wght300_GRAD0_opsz48 (1).svg'
import Suppliers from './assets/group_FILL0_wght300_GRAD0_opsz48.svg'
import Customers from './assets/assignment_ind_FILL0_wght300_GRAD0_opsz48.svg'
import SalesIc from './assets/point_of_sale_FILL0_wght300_GRAD0_opsz48.svg'
import Menu from './assets/menu_FILL0_wght400_GRAD0_opsz48.svg'
import Search from './assets/search_FILL0_wght400_GRAD0_opsz48.svg'
import Bell from './assets/notifications_FILL1_wght400_GRAD0_opsz48.svg'
import User from './assets/account_circle_FILL0_wght400_GRAD0_opsz48.svg'




function App() {

  const [modalOpen, setModalOpen] = useState(false);
  const [invOpen, setInvOpen] = useState(false);
  const [disCategory, setDisCategory] = useState(true)
  const [disSales, setDisSales] = useState(false)
  const [btnText, setBtnText] = useState('')
  const [headingText, setHeadingText] = useState('')
  const [invoiceHeadingText, setInvoiceHeadingText] = useState('')

  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <img src={Menu} alt='' />
        <div className='left-icons-header'>
          <img src={Search} alt='' />
          <img src={Bell} alt='' />
          <img src={User} alt='' />
          {/* Selection  */}
          <select name='status' className='user-logged'>
            <option value="Thushara Priyadarshana">Thushara Priyadarshana</option>
            <option value="Amila Sandeepa">Amila Sandeepa</option>
            <option value="Nismal Saumya">Nismal Saumya</option>
            <option value="Pameeshika Maduhansi">Pameeshika Maduhansi</option>
          </select>
        </div>
      </header>
      <div className='main-container'>
        {/* Side Bar */}
        <div className='right-container'>
          <div className='box-icon top'>
            <img src={Person} alt='' />
            <span className='inner-box-text'>User</span>
          </div>
          <div className='box-icon'>
            <img src={Items} alt='' />
            <span className='inner-box-text'>Items</span>
          </div>
          {/* Handle Category Window */}
          <div className='box-icon' onClick={() => {
            setDisCategory(true)
            if (disSales) {
              setDisSales(false)
            }
          }}>
            <img src={Categories} alt='' />
            <span className='inner-box-text'>Categories</span>
          </div>
          <div className='box-icon'>
            <img src={Suppliers} alt='' />
            <span className='inner-box-text'>Suppliers</span>
          </div>
          <div className='box-icon'>
            <img src={Customers} alt='' />
            <span className='inner-box-text'>Customers</span>
          </div>
          {/* Handle Sales Window */}
          <div className='box-icon down' onClick={() => {
            setDisSales(true)
            if (disCategory) {
              setDisCategory(false)
            }
          }}>
            <img src={SalesIc} alt='' />
            <span className='inner-box-text'>Sales</span>
          </div>
        </div>
        {/* Main Window for Components to show up */}
        <div className='left-container'>
          {/* Calliing All the Components */}
          {disCategory && <Category openModal={() => setModalOpen(true)} handleBtnText={(name) => setBtnText(name)} handleHeadingText={(name) => setHeadingText(name)}/>}
          {modalOpen && <Modal closeModal={() => setModalOpen(false)} btnTextVal={btnText} headingTextVal={headingText}/>}
          {disSales && <Sales openInvoice={() => setInvOpen(true)} handleInvoiceHeadingText={(name) => setInvoiceHeadingText(name)}/>}
          {invOpen && <Invoice closeInvoice={() => setInvOpen(false)} invHeadingText={invoiceHeadingText}/>}
    
        </div>
      </div>
    </div>
  );
}

export default App;
