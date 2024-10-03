

import React from 'react'



const Section = props => {

  const styles = {
    container: {
      opacity: props.opacity,
      display: 'flex',
      flexDirection: 'column', 
      justifyContent: 'center',
      padding: '10px',
      height: '100vh',
      alignItems  : props.right ? 'end' : 'start',
    } ,
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50%',
    },
    section: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    content: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      borderRadius: '2.5em',
      padding: '20px',
    }

  }


  return (
    <section style={styles.container} >
    <div style={styles.wrapper}    >
    <div  style={styles.section} >
    <div  style={styles.content} >
        {props.children}
    </div>
    </div>
    </div>
    </section>
  )
}

export default Section