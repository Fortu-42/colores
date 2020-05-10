import React from 'react';
import { Link } from 'react-router-dom';

const ColorBox = ({ color, id }) => {
  // console.log(color);
  const stylesDecidedByProps = {
    backgroundColor: color.color,
  };

  return (
    <Link
      to={`/single-color/${id}`}
      className='flex flex-grow min-w-1/3'
      style={stylesDecidedByProps}>
      <h1>{color.name}</h1>
      <p>{color.color}</p>
      <p>{color.year}</p>
      <p>{color.pantone_value}</p>
      <p>{color.name}</p>
    </Link>
  );
};

export default ColorBox;
