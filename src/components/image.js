import React from "react";
import RenderSmoothImage from 'render-smooth-image-react';
import 'render-smooth-image-react/build/style.css';

const Image = ({ image }) => {
    return (
        <div style={{ maxwidth: 600, maxheight: 600 }}>
            <RenderSmoothImage className="image" src={image.default} alt={image.default} />
        </div>
    )
}

export default Image;