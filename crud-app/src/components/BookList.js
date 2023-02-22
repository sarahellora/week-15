import React, {useEffect,useState}from 'react'



const BookList = (props) => {   
    const {title,author,handleDelete,id,handleUpdate, index} = props
    const [showForm,setShowForm]=useState(false)
    const [formTitle,setFormTitle]=useState(title)
    const [formAuthor,setFormAuthor]=useState(author)
    
      const handleAuthor = (e) =>{
        const author = e.target.value
        setFormAuthor(author)
      }
      const handleTitle = (e) =>{
        const title = e.target.value
        setFormTitle(title)
      }


return (
    <div>
        <div className="card">
            <div className="container">
                <h3>{title}</h3>
                <h3>{author}</h3>
                <button onClick={()=>handleDelete(id)}>Delete</button>
                <button onClick={()=>setShowForm(true)}>Update</button>
        {showForm &&
            <>
                <form>
                    <textarea value={formTitle}  placeholder='Title' onChange={(e)=> handleTitle(e)}></textarea>
                    <textarea value={formAuthor}  placeholder='Author' onChange={(e)=> handleAuthor(e)}></textarea>
                    <input type="submit" value="Submit" onClick={(e)=> handleUpdate(e,formAuthor,formTitle,id)} />
                </form>
            </>
        }
            </div>
        </div>
    </div>
    )
}
export default BookList