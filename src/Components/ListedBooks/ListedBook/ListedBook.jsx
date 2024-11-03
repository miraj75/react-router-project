import React from 'react';

const ListedBook = ({book}) => {
    const {image,author,tags,publisher,category,rating,yearOfPublishing,bookName} =book;
    return (
        <div className='p-6 shadow-md border-2 grid grid-cols-1 gap-4 md:grid-cols-4'>
            <div className='bg-stone-300 w-[229px] h-[230px] flex justify-center items-center rounded-lg'>
            <img className='h-[172px] w-[122px]' src={image} alt="" />
            </div>
            <div>
            <h2 className="card-title text-2xl font-bold">
             {bookName}
            </h2>
            </div>
        </div>
    );
};

export default ListedBook;