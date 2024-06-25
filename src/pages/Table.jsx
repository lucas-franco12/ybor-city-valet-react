
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Table() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    async function fetchCustomers() {
      try {
        const response = await fetch('/api/get-customers');
        const data = await response.json();
        console.log("Fetched customers from server:", data);
        setCustomers(data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    }

    fetchCustomers();
  }, []);

  async function deleteCustomer(index) {
    try {
      const customerToDelete = customers[index];
      await fetch(`/api/delete-customer?id=${customerToDelete._id}`, {
        method: 'DELETE',
      });

      const updatedCustomers = customers.filter((_, i) => i !== index);
      setCustomers(updatedCustomers);
      console.log("Updated customers in state after deletion:", updatedCustomers);
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  }

  return (
    <>
      <Navbar parent={'table'}/>
      <Hero />
      <div className="container">
        <table id="customer-table" className="table">
            <thead>
            <tr>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>Return Time</th>
                <th>Additional Info</th>
            </tr>
            </thead>
            <tbody>
            {customers.map((customer, index) => (
                <tr key={index}>
                <td>{customer.lastName}</td>
                <td>{customer.number}</td>
                <td>{customer.time}</td>
                <td>
                    {customer.additionalInfo} 
                    <button className="btn btn-danger delete-button" onClick={() => deleteCustomer(index)}>X</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
      <Footer parent={'table'}/>
    </>
  );
}
