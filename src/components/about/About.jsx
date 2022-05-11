import './about.scss';

function About() {
  return (
    <div className='about' id='about'>
        <div className='container'>
          <div className='title'>
            <h1>About Me</h1>
          </div>
          <div className='top'>
            <div className='left'>
              <img src='pictures/person.png' alt='' />
            </div>
            <div className='right'>
              <h2>Contact</h2>
              <br/>
              <label>Email</label>
              <p>Kyleruban1@outlook.com</p>
              <br/>
              <label>Phone #</label>
              <p>973-362-6288</p>
              <br/>
              <label>Location</label>
              <p>NY/NJ</p>
              <br/>
            </div>
          </div>
          <div className='bottom'>
            Bottom
          </div>
        </div>
    </div>
  )
}

export default About;