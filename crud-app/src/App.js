import logo from './logo.svg';
import './App.css';
import Books from './components/Books'
import React, {useEffect,useState}from 'react'

import axios from 'axios';


function App() {

  const [initialData, setInitialData] = useState()

  useEffect(() => {
    axios.get('https://63f4610d2213ed989c416cd7.mockapi.io/users')
        .then(response =>{
                setInitialData(response.data)
            }
        );
    },[])

    function handleDelete(id){
      axios.delete(`https://63f4610d2213ed989c416cd7.mockapi.io/users/${id}`).then(() => setInitialData(
        initialData.filter((post) => {
           return post.id !== id;
        })) )
      }

    function handleAdd(){
      console.log("testing")

    }
  return (
    <div>
      {initialData?.map((book)=>
            <Books 
            title={book.title}
            author={book.author}
            handleDelete={handleDelete}
            id={book.id}
            />
      )}

      <button onClick={handleAdd}>Add book</button>
    </div>
  );
}

export default App;
