import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => {
            setCategories(data)
        })
        .catch(err => {
            console.log(err);
        })

    },[])
    return (
        <div>
            <div>
                <h4>All Caterogy</h4>
                <div className='ps-2 pt-2'>
                {
                    categories?.map(category => <p key={category.id}>
                        <NavLink to={`/category/${category.id}`} className={({isActive}) => isActive? 'text-decoration-none text-black fs-5 bg-secondary rounded  p-2 ' : 'text-decoration-none text-secondary fs-5'}>{category.name}</NavLink>
                    </p>)
                }
                </div>

            </div>
        </div>
    );
};

export default LeftNavbar;