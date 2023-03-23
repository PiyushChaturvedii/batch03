import React from "react";

const userInput = (props) => {
    const style = {
        border:'3px solid red'
    }

    return <input
        type="text"
        onChange={props.changed}
        value={props.currentName}
        style={style}
    />;
}

export default userInput;