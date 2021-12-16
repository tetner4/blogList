import React, { useState } from 'react'

const BlogForm = ({ createBlog }) => {
  const [title, setTitle ] = useState('')
  const [author, setAuthor ] = useState('')
  const [url, setUrl ] = useState('')

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
  }

  const handleUrlChange = (event) => {
    setUrl(event.target.value)
  }

  const addBlog = (event) => {
    event.preventDefault()
    createBlog({
      title: title,
      author: author,
      url: url
    })

    setAuthor('')
    setTitle('')
    setUrl('')
  }

  return (

    <div>
      <h2>Add a New Blog</h2>
      <form onSubmit = {addBlog}>

        <div>
          Title:<input id='title' onChange={handleTitleChange} value={title}/>
        </div>

        <div>
        Author:<input id='author' onChange={handleAuthorChange} value={author}/>
        </div>

        <div>
          URL: <input id='url' onChange={handleUrlChange} value={url}/>
        </div>
        <button type='submit'>submit</button>

      </form>
    </div>
  )
}

export default BlogForm