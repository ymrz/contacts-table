import React from "react";

//COMMENTS:
//I was able to connect to the API, however, the data that I got was incomplete and I could not do proper "sideloading" as per the documentation.
//For display only, I hardcoded some of the value.

function TableRow(props) {
  return (
    <>
      {props.contacts.map((contact) => {
        return (
          <tr key={contact.id}>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <span>IN</span>
              <a href="#">{`${contact.firstName} ${contact.lastName}`}</a>
            </td>
            <td>
              {"$89,324"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down ml-1"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            </td>
            <td>{"Chicago, IL, USA"}</td>
            <td className="pl-4">{"2"}</td>
            <td>{"customer, new-deals"}</td>
            <td></td>
          </tr>
        );
      })}
    </>
  );
}

export default TableRow;
