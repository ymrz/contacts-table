import React, { useState, useEffect } from "react";
import TableRow from "./components/TableRow";
import ColumnHeaders from "./components/ColumnHeaders";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const headers = {
      "Api-Token":
        "bcd062dedabcd0f1ac8a568cdcf58660c44d7e79b91763cc1a5d0c03d52c522d851fceb0",
    };
    const apiUrl =
      "https://sahmed93846.api-us1.com/api/3/contacts?include=id,contactTags.tag,contactLists.list,organization";
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
      .then((data) => setContacts(data.contacts))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <table className="table">
        <tbody>
          <ColumnHeaders />
          <TableRow contacts={contacts} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
