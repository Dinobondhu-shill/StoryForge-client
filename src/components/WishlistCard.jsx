import React from 'react';
import { Link } from 'react-router-dom';

const WishlistCard = ({item}) => {
const data= item?.blog
const {image, short_description, title, posted_date, category, _id } = data
console.log(data)
  return (
    <div className='border p-2 rounded-md  gap-3'>
      <div className='flex gap-5'>
      <img src={image} alt="" className='w-72 h-44 rounded-md'/>
      <div className="mb-5">
        <h2 className="py-2 text-xl font-semibold">{title}</h2>
        <p># Posted on: {posted_date}</p>
        <p className="font-sand ">{short_description}</p>
      </div>
    </div>
    <div className='text-end py-3'>
    <Link to={`/all-blogs/${_id}`} className="px-4 py-2 border ">View Details</Link>
    </div>
    </div>
    
  );
};

export default WishlistCard;