import React, { useState } from "react";

const Footer = (props) => {
  // const handlePrevious = () => {
  //   if (props.current > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  // const handleNext = () => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };
  // onClick={props.handlePrevious}
  // onClick={props.handleNext}

  return (
    <div >
      <button className="buttons" onClick={props.prev} >Previous</button>
      <span>{props.current} of {props.total} </span>
      <button className="buttons" onClick={props.next}>Next</button>
    </div>
  );
};

export default Footer;
