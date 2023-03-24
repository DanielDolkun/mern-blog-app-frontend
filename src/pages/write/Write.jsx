import { useContext, useState } from 'react'
import './write.css'
import { Context } from '../../context/Context'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Write() {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [file, setFile] = useState(null)
  const { user } = useContext(Context)
  const [published, setPublished] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newPost = {
      username: user.username,
      title,
      desc,
    }
    if (file) {
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append('name', filename)
      data.append('file', file)
      newPost.photo = filename
      try {
        await axios.post(
          'https://mern-blog-app-api-hyra.onrender.com/api/upload',
          data
        )
      } catch (err) {}
    }
    try {
      const res = await axios.post(
        'https://mern-blog-app-api-hyra.onrender.com/api/posts',
        newPost
      )
      setPublished(true)
    } catch (err) {}
  }
  return (
    <div className='write'>
      {published && (
        <span className='pubMsg'>
          Published! return{' '}
          <Link className='link toHome' to='/'>
            Home
          </Link>
        </span>
      )}
      {file && (
        <img className='writeImg' src={URL.createObjectURL(file)} alt='' />
      )}

      <form className='writeForm' onSubmit={handleSubmit}>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fa-solid fa-square-plus'></i>
          </label>
          <input
            type='file'
            id='fileInput'
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type='text'
            placeholder='Title'
            className='writeInput writeTitle'
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='writeFormGroup'>
          <textarea
            placeholder='Tell your story...'
            type='text'
            className='writeInput writeText'
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>

        <button className='writeSubmit' type='submit'>
          Publish
        </button>
      </form>
    </div>
  )
}
