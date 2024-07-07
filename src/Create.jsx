import React, { Suspense, lazy, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { postData } from "./API";

const Lazy = lazy(() => import("./Lazy"));

function Create() {
  // cosnt queryClient=useQueryClient
  const [name, setname] = useState("");
  const [email, setemail] = useState("");


  const {status,error,mutate} = useMutation({
    mutationFn:postData,
    onSuccess:newData=>{
      console.log("first")
    }
  })

  const header = { "Accesss-Control-Allow-Origin": "*" };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    mutate({
        name: name,
        email: email,
        header,
      })

    
    // axios.post("https://651e3bc344a3a8aa4767e8fa.mockapi.io/CRUD", {
    //   name: name,
    //   email: email,
    //   header,
    // });
  };

  return (
    <div>
      <div>
        <h2>Create</h2>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <input
            type="email"
            placeholder="Enter email"
            onChange={(e) => setemail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Name</Form.Label>
          <input
            type="text"
            placeholder="enter name"
            onChange={(e) => setname(e.target.value)}
          />
        </Form.Group>
      </Form>
      
        <div>
          <Suspense fallback={<div>load.........</div>}>
          <Lazy />
          </Suspense>
          
        </div>
     

      <Button variant="primary" onClick={handlesubmit}>
        <Link to={"/read"}>Submit</Link>
      </Button>
    </div>
  );
}

export default Create;
