import React  from 'react'
import { useState } from 'react'

const BookForm = (props) => {
    const {handleSubmit}= props
    const [title,setTitle]=useState('')
    const [author,setAuthor]=useState('')
    
      const handleAuthor = (e) =>{
        const author = e.target.value
        setAuthor(author)
      }
      const handleTitle = (e) =>{
        const title = e.target.value
        setTitle(title)
      }
return (
    <div>
        <form className='addContainer'>
            <textarea value={title}  placeholder='Title' onChange={(e)=> handleTitle(e)}></textarea>
            <textarea value={author}  placeholder='Author' onChange={(e)=> handleAuthor(e)}></textarea>
            <input type="submit" value="Submit" onClick={(e)=> handleSubmit(e,author,title)} />
        </form>
    </div>
    )
}
export default BookForm