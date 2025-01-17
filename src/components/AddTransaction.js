import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const AddTransaction = () => {
    const[text,setText] = useState('')
    const[amount,setAmount] = useState(0)
    
    const {addTransaction} = useContext(GlobalContext)
    // const bookings = [{
    //   customerName: 'Fiza',
    //   companyName: 'Company',
    //   serviceDate: '1/15/2025',
    //   hazardous: true
    // }, {
    //   customerName: 'Jeff',
    //   companyName: 'Jeff Company',
    //   serviceDate: '1/25/2025',
    //   hazardous: false
    // }]

    const onSubmit = e => {
      e.preventDefault()
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }
      addTransaction(newTransaction)
    }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
      {/* <h1>Table</h1>
      <table>
        <tr>
          <th>Customer Name</th>
          <th>Customer's Company Name</th>
          <th>Booking/Service Appointment Date</th>
          <th>Hazardous</th>
        </tr>
        {bookings.map((i) => {
           return( <tr>
            <td>{i.customerName}</td>
            <td>{i.companyName}</td>
            <td>{i.serviceDate}</td>
            <td><input type="checkbox" checked={i.hazardous}/></td>
          </tr>)
        }) }
        
      </table> */}
      
    </>
  )
}

export default AddTransaction
