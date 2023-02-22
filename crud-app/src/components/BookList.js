import React, {useEffect,useState}from 'react'



const BookList = (props) => {   
    const {title,author,handleDelete,id} = props


return (
    <div >
        <h3>{title}</h3>
        <h3>{author}</h3>
        <button onClick={()=>handleDelete(id)}>Delete</button>

    </div>
    )
}
export default BookList