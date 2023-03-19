import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

export default function SideBar() {
  const [cats, setCats] = useState([])

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get(
        'https://mern-blog-app-api-hyra.onrender.com/api/categories'
      )
      setCats(res.data)
    }
    getCats()
  }, [])
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>About Me</span>
        <img
          className='sidebarImg'
          src='https://i.pinimg.com/564x/7e/a8/f7/7ea8f71ccd442a03950cb19e18ccb683.jpg'
          alt=''
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla animi
          illum inventore aspernatur fugit itaque veniam! Ducimus commodi
          corrupti, quibusdam quia.
        </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>Categories</span>
        <ul className='sidebarList'>
          {cats.map((c) => (
            <Link key={new Date()} className='link' to={`/?cat=${c.name}`}>
              <li className='sidebarListItem'>{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>Follow Us</span>
        <div className='sidebarSocial'>
          <i className='sidebarIcon fa-brands fa-square-facebook'></i>
          <i className='sidebarIcon fa-brands fa-square-twitter'></i>
          <i className='sidebarIcon fa-brands fa-square-pinterest'></i>
          <i className='sidebarIcon fa-brands fa-square-instagram'></i>
        </div>
      </div>
    </div>
  )
}
