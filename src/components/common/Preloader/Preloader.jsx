import React from 'react';
import preloader from '../../../assets/images/preloader.svg';

let styleP = {
   display: 'block',
   width: '300px',
   margin: '300px auto'
}

let Preloader = (props) => {
   return (
      // <div style={{ backgroundColor: 'white' }}>
      <img src={preloader} style={styleP} alt='preloader'/>
      // </div>
   )
}

export default Preloader;