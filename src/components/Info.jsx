import React from 'react'
/**
 * Component used for displaying some useful information to user.
 * @param {*} param0 
 * @returns 
 */
function Info({children,...props}) {
  return (
    <div {...props}>{children}</div>
  )
}

export default Info