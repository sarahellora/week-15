import React  from 'react'
import { useState } from 'react'

const BookForm = (props) => {
    const {handleSubmit}= props
    const [title,setTitle]=useState('Bluey')
    const [author,setAuthor]=useState('Its really good')
    
      const handleAuthor = (e) =>{
        const author = e.target.value
        setAuthor(author)
      }
      const handleTitle = (e) =>{
        const title = e.target.value
        setTitle(title)
      }
      


return (
    <div className='reviewList' >
      <form>
    <textarea value={title}  placeholder='Title' onChange={(e)=> handleTitle(e)}></textarea>
    <textarea value={author}  placeholder='Author' onChange={(e)=> handleAuthor(e)}></textarea>



      <input type="submit" value="Submit" onClick={(e)=> handleSubmit(e,author,title)} />
    </form>
    </div>
    )
}
export default BookForm