import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LatestUpdate from '../Pages/Shared/LatestUpdate/LatestUpdate';
import LeftNavbar from '../Pages/Shared/LeftNavbar/LeftNavbar';
import Menu from '../Pages/Shared/Menu/Menu';
import RightNavbar from '../Pages/Shared/RightNavbar/RightNavbar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <LatestUpdate />
            <Menu />
            <Container className='mt-5'>
                <Row>
                    <Col lg={3}>
                        <LeftNavbar />
                    </Col>
                    <Col lg={6}>
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

export default Main;