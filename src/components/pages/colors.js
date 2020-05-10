import React, { useState, useEffect } from 'react';
import { HTTP } from '../../helpers/htttp-common';
import ColorBox from '../colorBox';

const Colors = () => {
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({
    perPage: 9,
    total: 12,
    totalPages: 2,
  });
  const [colors, setColors] = useState([]);
  useEffect(() => {
    const fetchColors = () => {
      HTTP.get('/colors', { params: { page, per_page: 9 } }).then(
        ({ data: { data, per_page, total, total_pages } }) => {
          // console.log(data);
          setColors(data);
          setPagination({
            perPage: per_page,
            total,
            totalPages: total_pages,
          });
        },
      );
    };
    fetchColors();
  }, [page]);

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
      <div className='text-2xl text-center py-4 border-solid border rounded border-gray-600 bg-gray-300'>
        Colores
      </div>
      <div className='flex w-full h-full flex-grow flex-wrap'>
        {colors.map((color, i) => {
          return <ColorBox key={i} color={color} />;
        })}
      </div>
      <div className='text-lg flex justify-between px-12 text-center py-4 border-solid border rounded border-gray-600 bg-gray-300'>
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Colors;
