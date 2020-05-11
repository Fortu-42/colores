import React, { useState, useEffect } from 'react';
import useColorsAndPagination from '../../helpers/fetchColors';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ColorBox from '../colorBox';

const Colors = (props) => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    const computedPage = props.match.params.id
      ? parseInt(props.match.params.id)
      : 1;
    setPage(computedPage);
    return () => {
      setPage(1);
    };
  }, [props.match.params]);

  // console.log(parseInt(props.match.params.id) + 1);

  const perPage = props.match.path === '/single-color/:id' ? 1 : 9;

  const { colors, pagination } = useColorsAndPagination(page, perPage);

  const handleNext = () => {
    if (page < pagination.totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
    return;
  };

  return (
    <div className='flex flex-col h-full'>
      <div className='py-4 text-2xl text-center bg-gray-300 border border-gray-600 border-solid rounded'>
        Colores
      </div>
      <div className='flex flex-wrap flex-grow w-full md:h-full'>
        {colors.map((color, i) => {
          return (
            <ColorBox
              width={props.match.path === '/single-color/:id' ? 'w-full' : ''}
              shouldReplace={props.match.url === `/single-color/${color.id}`}
              key={i}
              color={color}
            />
          );
        })}
      </div>
      <div className='flex justify-between px-12 py-4 text-lg text-center bg-gray-300 border border-gray-600 border-solid rounded'>
        <button className='flex items-center' onClick={handlePrev}>
          <IoIosArrowBack />
          <span>Previous</span>
        </button>
        <button className='flex items-center' onClick={handleNext}>
          <span>Next</span>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Colors;
