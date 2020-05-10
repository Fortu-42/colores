import React from 'react';

const ColorBox = ({ color }) => {
  // console.log(color);
  const stylesDecidedByProps = {
    backgroundColor: color.color,
  };

  return (
    <div className='h-1/3 lg:w-1/3' style={stylesDecidedByProps}>
      <h1>{color.name}</h1>
      <p>{color.color}</p>
      <p>{color.year}</p>
      <p>{color.pantone_value}</p>
      <p>{color.name}</p>
    </div>
  );
};

export default ColorBox;
