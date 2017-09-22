    // SURVEYFIELD CONTAINS LOGIC TO RENDER A SINGLE LABEL AND TEXT INPUT

import React from 'react';

export default ( {input, label, meta:{error,touched}   })=>{
  return(
    <div>
      <label>{label}</label>
      <input {...input} style={{marginBottom:'5px'}}/>
      <div className="red-text">
      {touched && error}
      </div>
    </div>
  );
}




//{...input}  == onBlur={input.onBlur} or onChange={input.onChange}
