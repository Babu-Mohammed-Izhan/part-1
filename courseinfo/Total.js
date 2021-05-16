import React from 'react'

const Total = (props) => {
    const parts = props.course.parts;
    console.log(parts);
    return (
        <div>
            <p>Total number of exercises:
            {parts.reduce((a, b) => {
                return a + b['exercises'];
            }, 0)}
            </p>
        </div>
    )
}

export default Total
