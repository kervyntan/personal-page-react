import React from 'react';

const PortfolioItem = (props) => {   
    return (
        <>
        <div className="talent"> {props.talent} </div>
        <div className="project">
            <p> {props.name} </p>
        </div>
        <div className="project-showcase">
            
        </div>
        </>
    )
}

export default PortfolioItem;