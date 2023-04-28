import moment from 'moment';
import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../../assets/logo.png';
import './Header.css';

const Header = () => {
  
    return (
        <Container>
            <div className='text-center mt-4'>
            <img className='img-fluid' src={logo} alt="logo" />
            <p className='text-secondary mt-3'> <small className='fs-6'>Journalism Without Fear or Favour</small></p>
            <p className='fs-5'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </Container>
    );
};

export default Header;