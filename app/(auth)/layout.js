//file is created to form a wrapper for both sign-in and sign-up 

import React from 'react'

const Authlayout = ({children}) => {
  return (
    <div className='flex justify-center pt-25'>
      {children}
    </div>
  )
};

export default Authlayout;
