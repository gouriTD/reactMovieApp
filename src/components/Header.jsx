import React from 'react'
import { CONSTANTS } from '../utility/constants'
/**
 * Header component, which will diplay any children passed to it.
 * @param {*} param0 
 * @returns 
 */
function Header({children}) {
  return (
    <div 
    className='w-full fixed top-0 left-0 p-5'
    style={{ 
        backgroundImage: `url('${CONSTANTS.BASE_URL}/images/nav_bar.png')`,
        backgroundRepeat: 'repeat',
        backgroundOrigin: 'center',
        width:'100%' 
      }}
    >{children}</div>
  )
}

export default Header