import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";

function Read() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://651e3bc344a3a8aa4767e8fa.mockapi.io/CRUD")
      .then((res) => res.json())
      .then((result) => setdata(result));
  }, []);

  const handledelete = (id) => [
    axios.delete(`https://651e3bc344a3a8aa4767e8fa.mockapi.io/CRUD/${id}`),
  ];

  const settolocalstorage=(id, name, email) => {
    localStorage.setItem("id" , id)
    localStorage.setItem("name" , name)
    localStorage.setItem("email" , email)

  }
  return (
    <div>
      <h2>Read</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>email</th>
            <th></th>
          </tr>
        </thead>
        {data &&
          data.map((d) => {
            return (
              <tbody>
                <tr>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>
                    <Button
                      className="btn-success"
                      onClick={() => settolocalstorage(d.id, d.name, d.email)}
                    >
                      <Link to={"/Update"}>Edit</Link>
                    </Button>
                  </td>
                  <td>
                    <Button
                      className="btn-danger"
                      onClick={() => handledelete(d.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </Table>
    </div>
  );
}

export default Read;
