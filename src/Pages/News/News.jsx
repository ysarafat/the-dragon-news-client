import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsight from './EditorsInsight/EditorsInsight';

const News = () => {
    const news = useLoaderData()
    const {title, image_url, details} =news
    return (
        <div>
            <h4 className='mb-4'>Dragon News</h4>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{details}</Card.Text>
                <Link to='/category/0'>
                    <Button variant="danger"><BsArrowLeft style={{fontSize:20}}/> Back to home</Button>
                </Link>
                </Card.Body>
            </Card>
            <div>
                <h4 className='pt-5'>Editors Insight</h4>
                <EditorsInsight />
            </div>
        </div>
    );
};

export default News;