import { useEffect, useState } from "react";
import ContactRow from "./ContactRow";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(()=>{
    async function fetchContacts() {
        try {
            // Fetch data from the API
            const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
             // Parse the response to JSON
            const data = await response.json();
             // Log the data to the console for testing
            console.log('API Data:', data);
            setContacts(data);
        } 
          catch (error) {
            // Log any errors to the console
            console.error('Error fetching contacts:', error);
          }
        }
        fetchContacts();

  },[])
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => {
          return <ContactRow key={contact.id} contact={contact} />;
        })}
      </tbody>
    </table>
  );
};

export default ContactList;