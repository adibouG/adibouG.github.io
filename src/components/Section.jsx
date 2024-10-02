

import React from 'react'



const Section = props => {

  const styles = {
    container: {
      
      display: 'flex',
      flexDirection: 'column', 
      justifyContent: 'center',
      padding: '10px',
      //transform: 'translate(-50%, -50%)',
      //width: '100vw',
      height: '100vh',
    } ,
    section: {
      width: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    content: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      borderRadius: '20px',
      padding: '10px',
    }

  }


  return (
    <div className='section' style={styles.container} >
    <div  style={styles.section} >
    <div  style={styles.content} >
        {props.children}
    </div>
    </div>
    </div>
  )
}

export default Section