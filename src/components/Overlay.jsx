import React, {useState} from 'react'
import { Scroll, useScroll } from '@react-three/drei'
import Section from './Section'
import { useFrame } from '@react-three/fiber'
import { abs } from 'three/webgpu'

const Overlay = props => {

  const styles = {
      width: '100vw',
    } 

    const time = {
      position: 'relative',
    }
    const timeline = {
      position: 'absolute',
      top: '60px', 
      right: '-10px',
      borderLeft: '5px solid white',
      borderRadius: '5px',
      height : '40%', // 100vh - height 
      width: '0px',
    }
const date = {
  position: 'absolute',
  top: '-0px', 
  right: '-140px',
  //borderLeft: '5px solid whuite',
  color: 'white',
  
}
const mark = {
  position: 'absolute',
  height: '4px',
  width: '25px',
  borderRadius: '5px',
  background: 'white',
  top: '10px',
  right: '-40px',
}

const scroll = useScroll()
const [firstSectionOpacity, setFirstSectionOpacity] = React.useState(1)
const [secondSectionOpacity, setSecondSectionOpacity] = React.useState(1)
const [thirdSectionOpacity, setThirdSectionOpacity] = React.useState(1)
const [fourthSectionOpacity, setFourthSectionOpacity] = React.useState(0)


useFrame((state, delta) => {
  setFirstSectionOpacity(1 - scroll.range(0, 1/4))
  setSecondSectionOpacity(scroll.curve(1/4, 1/4))
  setThirdSectionOpacity(scroll.curve(2/4, 1/4))
  setFourthSectionOpacity(scroll.curve(3/4, 1/4))
})

console.log(firstSectionOpacity, secondSectionOpacity)

  return (
    <Scroll html>

    <div style={styles}>
    <Section opacity={firstSectionOpacity}> 
      <h1 className='title'>i@d</h1>
      <p>

      </p>
      <h2 className='title'>I'm Adrien</h2> 
      <p>
      </p> 
      <p>
        
      </p>
      <h3 className='title'>software developement and creative engineering</h3> 
    
      <p className='text'> I help designing your projects and building your applications, I can help with your ideas and collaborate to your projects</p>
      </Section>
    <Section right opacity={secondSectionOpacity}> 
    <h2 > About me</h2>
      <p>
      From my background and experiences, in art, Webdesign and multimedia production, in IT production, as functional and technical analyst, analyst programmer, this path led me to become focus and specialize in software development amd emgineering. I have gathered knowledge that I use and share to design and build solutions. </p>
    </Section>
    
    <Section opacity={thirdSectionOpacity}> 
      <h2 > Experience </h2>
      <div style={timeline} ></div>
      <div style={time}> 
      <h5 >Software Engineer at Truekinetix</h5>
      <span style={date}> 2023 - 2024</span>
      <div  style={mark} ></div>
      </div>
      <div style={time}>  
      <h5 >Software Engineer at Medis medical imaging systems</h5>
      <span style={date}> 2021 - 2022</span>
      <div  style={mark} ></div>
    
      </div>
      <div style={time}>  
      <h5 >Software Developer at Enzosystems</h5>
      <span style={date}> 2018 - 2021</span>
      <div  style={mark} ></div>
    
      </div>
      <div style={time}>  
      <h5 >Analyst Programmer at La Poste Mobile</h5>
      <span style={date}> 2015 - 2016</span>
      <div  style={mark} ></div>
    
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
    <Section right opacity={fourthSectionOpacity}> 
      <h2 className='title'> Contact </h2>
   
                <form id="contact-form" method="post"  action="https://usebasin.com/f/560fd38666ff">  

<div className="form-group">
  <input type="text" required  className='form-control'
  id="name" name="entry.2005620554" 
  placeholder="Enter your name" />
</div>
<div className="form-group">
  <input type="email" required className="form-control" 
  id="email" name="entry.1045781291" 
  placeholder="Enter your email"/>
</div>
<div className="form-group">
  <textarea className="form-control" id="message" 
  name="entry.839337160" rows="3" 
  placeholder="Enter your message">
  </textarea>

</div>

<button type="submit" className="btn">Submit</button>

</form> 

    </Section>
    </div>

    </Scroll>
  )
}


export default Overlay