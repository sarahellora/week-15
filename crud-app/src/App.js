import logo from './logo.svg';
import './App.css';
import BookList from './components/BookList'
import BookForm from './components/BookForm'
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

    function handleAdd(e,author,title){
      e.preventDefault();
      axios.post('https://63f4610d2213ed989c416cd7.mockapi.io/users',{title:title,author:author}).then((response) => {
        setInitialData([response.data, ...initialData]);
     });

    } 
    const handleUpdate = async(e,author,title,id) => {
      await axios.put(`https://63f4610d2213ed989c416cd7.mockapi.io/users/${id}`,{title:title,author:author}).then((response) => {
        setInitialData([response.data, ...initialData]);
     });
    }

  return (
    <div>
      {initialData?.map((book, index)=>
            <BookList
            key={index}
            title={book.title}
            author={book.author}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            id={book.id}
            />
      )}
      <BookForm handleSubmit={handleAdd}/>
    </div>
  );
}

export default App;
