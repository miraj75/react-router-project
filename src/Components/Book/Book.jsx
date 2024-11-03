import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {bookName,author,image,rating,category,tags,bookId} = book
    return (
        <Link to={`books/${bookId}`}>
        <div>
            <div className="card bg-base-100 w-96 shadow-xl p-6">
  <figure className='bg-zinc-100 py-8 rounded-2xl'>
    <img
    className='h-[196px]'
      src={image}
      alt={bookName} />
  </figure>
  <div className="card-body">
    <div className='flex gap-2'>
    {tags.map((tag,index)=> <h2 key={tag} className='text-green-600'>{tag}</h2>)}
    </div>
    <h2 className="card-title text-2xl font-bold">
      {bookName}
    </h2>
    <p>{author}</p>
    <div className='border-b-2 border-dashed'></div>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{category}</div>
      <div className="badge ">{rating}  
      <div className="rating">
     <input type="radio" name="rating-2" className="mx-2 mask mask-star-2 bg-orange-400" />
     </div>
      </div>
    </div>
  </div>
</div>
        </div>
        </Link>
    );
};

export default Book;