import React, { useState } from 'react';

export default function Checkin() {
  const [customer, setCustomer] = useState({
    lastName: '',
    number: '',
    time: '',
    additionalInfo: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value
    }));
  }

  async function newCustomer() {
    if (!validateCustomer(customer)) return;
    
    try {
      const response = await fetch('/api/add-customer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(customer),
      });

      const data = await response.json();
      console.log(data);

      setCustomer({
        lastName: '',
        number: '',
        time: '',
        additionalInfo: ''
      });
    } catch (error) {
      console.error('Error adding customer:', error);
    }
  }

  function validateCustomer(customer) {
    if (!customer.lastName) {
      alert('Please enter your last name.');
      return false;
    }
    if (!customer.number) {
      alert('Please enter your phone number.');
      return false;
    }
    if (!customer.time) {
      alert('Please enter your estimated return time.');
      return false;
    }
    return true;
  }

  return (
    <section id="check-in">
      <form className="container" id="valet-form">
        <h3>Check In</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="input-group mb-3">
              <label htmlFor="lastname">
                <span className="input-group-text" id="basic-addon1">Last Name</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                name="lastName"
                placeholder="Type last name here..."
                aria-label="LastName"
                aria-describedby="basic-addon1"
                value={customer.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="input-group mb-3">
              <label htmlFor="number">
                <span className="input-group-text" id="basic-addon1">Phone Number</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="number"
                name="number"
                placeholder="Type phone number here..."
                aria-label="PhoneNumber"
                aria-describedby="basic-addon1"
                value={customer.number}
                onChange={handleChange}
              />
            </div>
            <div className="input-group mb-3">
              <label htmlFor="time">
                <span className="input-group-text" id="basic-addon1">Estimated Return Time</span>
              </label>
              <input
                type="time"
                className="form-control"
                id="time"
                name="time"
                aria-label="ReturnTime"
                aria-describedby="basic-addon1"
                value={customer.time}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-6 additional-info">
            <div className="input-group mb-3">
              <textarea
                className="form-control"
                id="additional-info"
                name="additionalInfo"
                rows="5"
                placeholder="Please type any special instructions for the attendant here..."
                value={customer.additionalInfo}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <button
            id="form-button"
            type="button"
            className="btn btn-primary"
            onClick={newCustomer}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
