//add wrapper classes 

import React from 'react';

const Mainlayout = ({children}) => {

  return (
    <div className='conotainer mx-auto my-32'>
      {children}
    </div>
  )
    
  
};

export default Mainlayout;
