import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './topbar.css'

export default function TopBar() {
  const { user, dispatch } = useContext(Context)
  const PF = 'https://mern-blog-app-api-hyra.onrender.com/images/'

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
  }
  return (
    <div className='top'>
      <div className='topLeft'>
        <i className='topIcon fa-brands fa-square-facebook'></i>
        <i className='topIcon fa-brands fa-square-twitter'></i>
        <i className='topIcon fa-brands fa-square-pinterest'></i>
        <i className='topIcon fa-brands fa-square-instagram'></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link className='link' to='/'>
              Home
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/'>
              About
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/'>
              Contact
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/write'>
              Write
            </Link>
          </li>
          <li className='topListItem' onClick={handleLogout}>
            {user && 'Logout'}
          </li>
        </ul>
      </div>
      <div className='topRight'>
        {user ? (
          <Link className='link' to='/settings'>
            <img
              className='topImg'
              src={
                user.profilePic !== ''
                  ? PF + user.profilePic
                  : 'https://t4.ftcdn.net/jpg/01/18/03/35/360_F_118033506_uMrhnrjBWBxVE9sYGTgBht8S5liVnIeY.jpg'
              }
              alt=''
            />
          </Link>
        ) : (
          <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' to='/login'>
                Login
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/register'>
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className='topSearchIcon fa-solid fa-magnifying-glass'></i>
      </div>
    </div>
  )
}
