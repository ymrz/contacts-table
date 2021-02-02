import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const headers = {
      "Api-Token":
        "bcd062dedabcd0f1ac8a568cdcf58660c44d7e79b91763cc1a5d0c03d52c522d851fceb0",
    };
    const apiUrl = "https://sahmed93846.api-us1.com/api/3/contacts";
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl + apiUrl, {
      method: "GET",
      headers: {
        "Api-Token":
          "bcd062dedabcd0f1ac8a568cdcf58660c44d7e79b91763cc1a5d0c03d52c522d851fceb0",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Origin":
          "https://sahmed93846.api-us1.com/api/3/contacts",
      },
    })
      .then((response) => response.json())
      .then((data) => setContacts(data.contacts));
  }, []);
  console.log(contacts);
  return (
    <div>
      {contacts.map((contact) => {
        return <p>{contact.email}</p>;
      })}
    </div>
  );
}

export default App;
