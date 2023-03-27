import AboutBlock from '../../components/aboutBlock/AboutBlock'
import './about.css'

export default function About() {
  return (
    <div className='about'>
      <div className='aboutTitleContainer'>
        <span className='aboutTitle'>About this app</span>
      </div>
      <div className='aboutDescContainer'>
        <span className='aboutSummary'>
          This blog website has the functional features of a real world blog
          website. You are able to register a new account and login to that
          account. After login, you are able to publish blogs and only you can
          edit the content and title of your blog after you publish it, or even
          delete it. You are also able to filter blogs with different
          categories. You can update your account information by clicking the
          profile picture on the top right.
        </span>
      </div>
      <div className='logoContainer'>
        <img
          className='logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png'
          alt=''
        />
        <img
          className='logo'
          src='https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png'
          alt=''
        />
        <img
          className='logo'
          src='https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg'
          alt=''
        />
        <img
          className='logo'
          src='https://www.svgrepo.com/download/303360/nodejs-logo.svg'
          alt=''
        />
      </div>
      <div className='aboutBlockGroup'>
        <AboutBlock
          color={'green'}
          title={'Mongo DB'}
          desc={
            'All the content you see in this blog app is stored using Mongo DB.'
          }
        />
        <AboutBlock
          color={'grey'}
          title={'Express JS'}
          desc={
            'ExpressJS is used on the api built for this blog app to deliver the data from the data base.'
          }
        />
        <AboutBlock
          color={'blue'}
          title={'React JS'}
          desc={'The front end of this blog app is built using ReactJS'}
        />
        <AboutBlock
          color={'lGreen'}
          title={'Node JS'}
          desc={'The api for this blog app is built using NodeJS'}
        />
      </div>
    </div>
  )
}
