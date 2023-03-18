import './header.css'

export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>React + Node</span>
        <span className='headerTitleLg'>Blog</span>
      </div>

      <img
        className='headerImg'
        src='https://www.wallpapertip.com/wmimgs/69-696350_blue-tile-wallpaper.jpg'
        alt=''
      />
    </div>
  )
}
