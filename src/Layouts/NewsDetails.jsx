import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import RightNavbar from '../Pages/Shared/RightNavbar/RightNavbar';

const NewsDetails = () => {
    return (
        <div>
             <Header></Header>
            <Container className='mt-5'>
                <Row>
                    <Col lg={9}>
                        <Outlet />

                    </Col>
                    <Col lg={3}>
                        <RightNavbar />
                    </Col>
                </Row>
         </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsDetails;