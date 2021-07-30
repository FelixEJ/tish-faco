import React from "react";

const Image = ({ image }) => {
    return (
        <div >
            <img className="image" src={image.default} alt={image.default}></img>
        </div>
    )
}

export default Image;