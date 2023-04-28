import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {
  const {login}= useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
    const handelLogin =(e)=> {
        e.preventDefault() 
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
        .then(res => {
          console.log(res);
          navigate(from , {replace:true})
        })
        .catch(err=> {
          console.log(err);
        })
    }
    return (
        <Container className='bg-light w-50 p-5 mt-5 pt-5'>
            <Form onSubmit={handelLogin} className=''>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
      </Form.Group>
      <Button className='w-100' variant="secondary" type="submit">
        Login
      </Button>
      <Form.Group className="mt-3" controlId="formBasicCheckbox">
      <Form.Text className="text-muted">
      Dont’t Have An Account ? <Link className='text-danger' to='/register'>Register</Link>
        </Form.Text>
      </Form.Group>
    </Form>
        </Container>
     
    );
};

export default Login;