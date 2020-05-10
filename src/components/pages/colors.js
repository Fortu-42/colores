import React, { useState, useEffect } from 'react';
import { HTTP } from '../../helpers/htttp-common';
import ColorBox from '../colorBox';

const Colors = () => {
  const [pagination, setPagination] = useState({});
  const [colors, setColors] = useState([]);
  useEffect(() => {
    HTTP.get('/colors', { params: pagination.page }).then(({ data }) => {
      //   console.log(response.data);

      setColors(data.data);
      setPagination({
        page: data.page,
        perPage: data.per_page,
        totalItems: data.total,
        totalPages: data.total_pages,
      });
    });
  }, [pagination.page]);

  return colors.map((color, i) => {
    return <ColorBox key={i} color={color} />;
  });
};

export default Colors;
