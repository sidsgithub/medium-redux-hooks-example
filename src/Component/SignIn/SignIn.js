import React,{useState} from "react";
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useDispatch} from "react-redux";

export default function Home() {
    const dispatch = useDispatch();
    const [login, setLogin] = useState(false);
    
    const onSubmit =(event) =>{
        localStorage.setItem("username",event.target.username.value)
        dispatch({type:'ADD_USER'},[dispatch]);
        setLogin(true)
    }
  return (
      <div>

          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="exampleEmail">username</Label>
              <Input
                type="text"
                name="username"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
          {login && <Redirect to="/home" />}
      </div>
  );
}
