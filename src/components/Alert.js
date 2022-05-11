import React from "react";

export const Alert = (props) => {
  return (
    <div>
     <div className="alert alert-danger d-flex align-items-center" role="alert">


      {props.message}
      </div>
    </div>
    
  );
};
