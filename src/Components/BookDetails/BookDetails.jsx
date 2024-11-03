import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToWishList } from '../../Utilities/addtoDB';

const BookDetails = () => {
    const data = useLoaderData();
   const {bookId}= useParams();

   const id = parseInt(bookId)
   const book= data.find(book=>book.bookId=== id)

   const handleMarkasRead=(bookId)=>{
    addToStoredReadList(bookId)
   }

   const handleWishListBtn=(id)=>{
    addToWishList(id)
   }
    return (
            <div className="bg-base-200 gap-4 grid grid-cols-1 md:grid-cols-2">
        <div className='bg-stone-300 flex justify-center p-6'>
            <img className='h-[564px] w-[425px]' src={book.image} alt="" />
        </div>
        <div>
            <div className='p-6'>

            <h1 className='text-4xl font-bold'>{book.bookName}</h1>
            <p className='py-3 text-gray-600'>by: {book.author}</p>
            <div className="divider"></div>
            <p className='py-1 text-gray-600'> {book.category}</p>
            <div className="divider"></div>
            <h2>Review: {book.review}</h2>
            <div className='flex gap-2 py-4 '>
            {book.tags.map((tag,index)=> <h2 key={tag} className='cursor-pointer text-green-600'>{tag}</h2>)}
            </div>
            <div className="divider"></div>
            <div>
                <div className=' flex gap-4'>
            <p className='py-1 text-gray-600'>Number of Pages:</p>
            <p className='ml-6'>{book.totalPages}</p>
                </div>
                <div className=' flex gap-4'>
            <p className='py-1 text-gray-600'> Publisher: </p>
            <p className='ml-20'>{book.publisher}</p>
                </div>
                <div className=' flex gap-4'>
            <p className='py-1 text-gray-600'>Year of Publishing:</p>
            <p className='ml-4'>{book.yearOfPublishing}</p>
                </div>
                <div className=' flex gap-4'>
            <p className='py-1 text-gray-600'>Rating:</p>
            <p className='ml-24'>{book.rating}</p>
                </div>
            </div>

            </div>
            <div className='flex gap-3 ml-2'> 
            <button onClick={()=>handleMarkasRead(bookId)} className="btn btn-outline btn-success">Read</button>
            <button onClick={()=>handleWishListBtn(bookId)} className="btn btn-outline btn-warning">Wishlisht</button>
            </div>
        </div>
        </div>
    );
};

export default BookDetails;