import React from "react";
import { Info } from "./index";
/**
 * Error component used for displaying error messages.
 * @param {*} param0 
 * @returns 
 */
function Error({ children }) {
  return (
    <Info className='text-2xl font-bold text-red-300 bg-red-700 p-6 text-center'>
      <p>{children}</p>
    </Info>
  );
}

export default Error;
