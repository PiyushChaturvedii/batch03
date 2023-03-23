import React from "react";

import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username : {props.userName}</p>
            <p>Some random data - 2</p>
    </div>
    )
}

export default userOutput;