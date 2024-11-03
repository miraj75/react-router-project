import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utilities/addtoDB';
import ListedBook from './ListedBook/ListedBook';


const ListedBooks = () => {
    const allBooks = useLoaderData()
    const [readList, setReadList] = useState([])

    useEffect(()=>{
        const storeReadList = getStoredReadList()
        const storeReadListInt = storeReadList.map(id=> parseInt(id))

        const readBookList = allBooks.filter(book=> storeReadListInt.includes(book.bookId))

        setReadList(readBookList)
    },[])
    return (
        <div>
            <Tabs>
    <TabList>
      <Tab><button className="btn btn-outline btn-success">Read List</button></Tab>
      <Tab><button className="btn btn-outline btn-warning">Wishlisht</button></Tab>
    </TabList>

    <TabPanel>
        <div>

      <h2 className='text-3xl font-bold text-green-700'>Books , I read</h2>
      <div className='grid grid-cols-1 gap-4'>
      {
        readList.map(book=> <ListedBook book={book} key={book.bookId}></ListedBook>
      )}
      </div>
        </div>
    </TabPanel>
    <TabPanel>
    <h2 className='text-3xl font-bold text-yellow-300'>My Wish List</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ListedBooks;