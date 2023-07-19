import React from 'react';
const Pagination = (props)=>{
    const handlePrevClick = ()=>{
        props.onPrevClick();
    }
    const handleNextClick = ()=>{
        props.onNextClick();
    }
    return(
        <div>
        </div>
    )
}
export default Pagination;