import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios';

function Update() {
    const [id,setid] = useState("")
    const [name,setname] = useState("")
    const [email,setemail] = useState("")

    useEffect(()=>{
       setid(localStorage.getItem("id"))
       setname(localStorage.getItem("name"))
       setemail(localStorage.getItem("email"))
    }, [])

    const handleupdate = (id) => {
      
        axios.put(`https://651e3bc344a3a8aa4767e8fa.mockapi.io/CRUD/${id}`,
        {
            
            name: name,
            email:email,

        })
    }
  return (
    <div>
      <div>
        <h2>Update</h2>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <input
            type="email"
            placeholder="Update your email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Name</Form.Label>
          <input
            type="text"
            placeholder="Update your name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            
          />
        </Form.Group>
      </Form>

      <Button variant="primary" onClick={()=>handleupdate(id)}>
        Update
      </Button>
    </div>
  )
}

export default Update