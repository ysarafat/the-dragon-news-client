import moment from 'moment';
import React from 'react';
import Card from 'react-bootstrap/Card';
import { BsBookmark, BsEye, BsShare, BsStar, BsStarFill } from "react-icons/bs";
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './NewsCard.css';
const NewsCard = ({news}) => {
    const {title,image_url, author, details, _id, total_view,rating} = news;
    return (
        <div className='mt-4'>
            <Card className="text-start">
      <Card.Header>
        <div className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
            <div>
                <img className='author_img' src={author?.img} alt="" />
            </div>
            <div>
                <p className='m-0 text-start ms-3 fs-5 fw-bold'>{author?.name}</p>
                <p className='m-0 text-start ms-3 text-secondary'>{moment(author?.published_date).format('LL')}</p>
            </div>
        </div>
        
        <div>
            <Link className='text-secondary'><BsBookmark style={{fontSize:25}}/></Link>
            <Link className='text-secondary'><BsShare style={{fontSize:25, marginLeft:15}} /></Link>
        </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title> <h1 className='fs-3 text-start bold'>{title}</h1> </Card.Title>
          <img className='img-fluid mt-4' src={image_url} alt="" />
        <Card.Text>
            <div className='text-start mt-4 mb-0'>{details.slice(0,200)}...<Link to={`/news/${_id}`}>Read More</Link> </div>
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
    <div className='text-danger d-flex align-content-center'>
         <Rating
            placeholderRating={rating?.number}
            emptySymbol={<BsStar />}
            placeholderSymbol={<BsStarFill />}
            fullSymbol={ <BsStarFill />}
            readonly
        />
    <span className='fs-5 ms-2'>{rating?.number}</span>
    </div>
        <div className=' bold'><BsEye style={{fontSize:20}} /> {total_view}</div>
      </Card.Footer>
    </Card>
        </div>
    );
};

export default NewsCard;