import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ColorBox = ({ color, shouldReplace, width }) => {
  // console.log(color);
  const stylesDecidedByProps = {
    backgroundColor: color.color,
  };

  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (copied && copied === true) {
      setTimeout(() => {
        setCopied(false);
      }, 500);
    }

    // return () => {
    //   setCopied(false);
    // };
  }, [copied]);

  // if (copied && copied === true) {
  //   setTimeout(() => {
  //     setCopied(false);
  //   }, 500);
  // }

  return (
    <Link
      replace={shouldReplace}
      to={`/single-color/${color.id}`}
      className={`${width} md:p-1 min-w-1/3`}>
      <CopyToClipboard
        text={color.color}
        onCopy={() => {
          setCopied(true);
        }}
        className='relative flex flex-col items-center justify-center w-full h-full py-8 border border-gray-600 border-solid rounded-lg md:py-0'
        style={stylesDecidedByProps}>
        <button className='acive:outline-none'>
          <h1 className='text-xl'>{color.name}</h1>
          <p className='text-xl font-semibold'>
            <span
              className={`
              transition-all
              duration-500
              ease-in-out
              absolute
                ${
                  copied
                    ? 'opacity-1 pointer-events-auto visible'
                    : 'opacity-0 pointer-events-none invisible'
                }              
              `}>
              Copiado!
            </span>
            <span
              className={`
              transition-all
              duration-500
              ease-in-out
              
                ${
                  copied
                    ? 'opacity-0 pointer-events-none invisible'
                    : 'opacity-1 pointer-events-auto visible'
                }              
              `}>
              {color.color}
            </span>
          </p>
          <p className='absolute top-0 left-0 mt-4 ml-4'>{color.year}</p>
          <p className='absolute bottom-0 right-0 mb-4 mr-4'>
            {color.pantone_value}
          </p>
        </button>
      </CopyToClipboard>
    </Link>
  );
};

export default ColorBox;
