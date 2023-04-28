import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handelRegister = (event) =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        createUser(email, password)
        .then(res=> {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })


    }
    return (
        <Container className='bg-light w-50 p-5 mt-5 pt-5'>
        <Form onSubmit={handelRegister} className=''>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Your Name</Form.Label>
    <Form.Control type="text" name='name' placeholder="Enter Your Name" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Photo URL</Form.Label>
    <Form.Control type="text" name='photoUrl' placeholder="Enter Photo URL" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email' placeholder="Enter email" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' placeholder="Password" required />
  </Form.Group>
  <Button className='w-100' variant="secondary" type="submit">
  Register
  </Button>
  <Form.Group className="mt-3" controlId="formBasicCheckbox">
  <Form.Text className="text-muted">
  If You Have An Account ? <Link className='text-danger' to='/login'>Login</Link>
    </Form.Text>
  </Form.Group>
</Form>
    </Container>
    );
};

export default Register;