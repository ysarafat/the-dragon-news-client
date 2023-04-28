import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
const LatestUpdate = () => {
    const update = [
        {title: "Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet"},
]
    return (
        <Container className='d-flex bg-light mb-4 fs-5 fw-semibold p-3'>
            <Button className='fs-5 notice_btn px-4 fs-5 fw-semibold' variant="danger">Latest</Button> 
            <Marquee gradient={false} speed={100} className=''>
                {update?.map(title => <span className='mr-5'>{title?.title}</span>)}
            </Marquee>
            </Container>
    );
};

export default LatestUpdate;