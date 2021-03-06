import React from 'react';

const SVG = ({
    defaultColors = {},
    color = "#4385F4",
    width = 22,
    height = 18,
}) => {
    // Use default colors if none hex color is set
    color = color.startsWith('#') ? color : defaultColors[color];
    return (    
        <svg xmlns="http://www.w3.org/2000/svg" 
            width={width} 
            height={height} 
            viewBox="0 0 22 18">
        <path 
            fill={color} 
            fillRule="evenodd" 
            d="M7.981 12.957h7.75a3.888 3.888 0 0 0 3.881-3.884c0-.659.535-1.198 1.194-1.198.66 0 1.194.528 1.194 1.198a6.278 6.278 0 0 1-6.27 6.272H7.982c-.042 1.324-.161 2.423-.37 2.61C7.057 18.458 0 14.54 0 13.996c0-.545 7.136-4.39 7.612-3.962.195.176.323 1.447.37 2.924zm6.042-7.777H6.271a3.888 3.888 0 0 0-3.883 3.882c0 .66-.535 1.199-1.194 1.199A1.191 1.191 0 0 1 0 9.062a6.278 6.278 0 0 1 6.271-6.27h7.743c.038-1.384.158-2.554.374-2.748C14.943-.456 22 3.461 22 4.005c0 .545-7.136 4.39-7.612 3.962-.189-.17-.315-1.37-.365-2.787z"/>
        </svg>       
    )
};

export default SVG;