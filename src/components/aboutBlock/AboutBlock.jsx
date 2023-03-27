import './aboutBlock.css'

export default function AboutBlock({ color, title, desc }) {
  return (
    <div className={`aboutBlock ${color}`}>
      <span className='title'>{title}</span>

      <div className='descContainer'>
        <p className='aboutDesc'>{desc}</p>
      </div>
    </div>
  )
}
