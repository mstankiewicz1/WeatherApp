import React from 'react';



const Result = props => {

    return (
        <div>
            <h1>{String(props.error)}</h1>
        </div>
    )
};

export default Result;