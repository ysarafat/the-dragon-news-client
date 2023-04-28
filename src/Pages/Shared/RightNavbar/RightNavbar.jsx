import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import QZone from '../QZone/QZone';

const RightNavbar = () => {
    return (
        <div>
            <div>
            <h4 className='mb-4'>Login With</h4>
            <Button className='mb-2 w-100' variant="outline-primary"><FcGoogle /> Login With Goolge</Button>
            <Button className='w-100' variant="outline-secondary"><BsGithub /> Login With Github</Button>
        </div>
        <div className='mt-4'>
            <h4 className='mb-4'>Find Us On</h4>
            <ListGroup className='fs-5 fw-medium'>
                <ListGroup.Item><BsFacebook style={{color : '#0777E8'}} /> Facebook</ListGroup.Item>
                <ListGroup.Item><BsInstagram style={{color : '#DD4570'}}/> Instagram</ListGroup.Item>
                <ListGroup.Item><BsTwitter style={{color: '#1DA1F2'}} /> Twitter</ListGroup.Item>
                <ListGroup.Item><BsYoutube style={{color : '#FF1E1E'}}/> Youtube</ListGroup.Item>
            </ListGroup>
        </div>
        <QZone />
        </div>
    );
};

export default RightNavbar;