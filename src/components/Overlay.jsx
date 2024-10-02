import React from 'react'
import { Scroll } from '@react-three/drei'
import Section from './Section'

const Overlay = props => {
  return (
    <Scroll html>

    <div className='overlay'>
    <Section> 
      <h1 className='title'>i@d</h1>
      <p>

      </p>
      <h2 className='title'>I'm Adrien</h2> 
      <p>
      </p> 
      <p>
        
      </p>
      <h3 className='title'>software developer and creative engineering</h3> 
    
      <p className='text'> I can help designing your projects and building your applications, I can help with your ideas and collaborate to your projects</p>
      </Section>
    <Section> 
    <h2 > About me</h2>
      <p>
      From my background and experiences, in art, Webdesign and multimedia production, in IT production, as functional and technical analyst, analyst programmer, this path led me to become focus and specialize in software development amd emgineering. I have gathered knowledge that I use and share to design and build solutions. </p>
    </Section>
    
    <Section> 
      <h2 > Experience </h2>
      <div className='timeLine'></div>
      <div className='time'> 
      <h5 >Software Developer at Enzosystems</h5>
      </div>
      <div className='time'> 
      <h5 >Software Engineer at Truekinetix</h5>
      </div>
      <div className='time'> 
      <h5 >Software Engineer at Medis medical imaging systems</h5>
      </div>
      <div className='time'> 
      <h5 >Software Developer at Enzosystems</h5>
      </div>
      <div className='time'> 
      <h5 >Functional Analyst at La Poste Mobile</h5>
      </div>
      
      <div className='time'> 
      <h5 className='title'> ... see more in my resume, github  or my LinkedIn </h5>
      </div>
      
      <div>
      <p> <a href="https://resume.io/r/0V6BxbRlS">my resume</a></p>
        
      <p><a href="https://github.com/adibouG"> Git</a>
      </p>
      <p><a href="https://linkedin.com/in/adrien-gonzalez-3370ba50">my LinkedIn</a></p>
      </div>
    </Section>
    <Section> 
      <h2 className='title'> Contact </h2>
   
                <form id="contact-form" method="post"  action="https://usebasin.com/f/560fd38666ff">  

<div className="form-group">

  <label htmlFor="name">Name</label>

  <input type="text" required class="form-control" id="name" name="entry.2005620554" placeholder="Enter your name" />

</div>

<div className="form-group">

  <label htmlFor="email">Email address</label>

  <input type="email" required class="form-control" id="email" name="entry.1045781291" 
  placeholder="Enter your email "/>

</div>


<div className="form-group">

  <label htmlFor="message">Message</label>

  <textarea className="form-control" id="message" name="entry.839337160" rows="3" placeholder="Enter your message"></textarea>


</div>

<button type="submit" className="btn">Submit</button>

</form> 

    </Section>
    </div>

    </Scroll>
  )
}


export default Overlay