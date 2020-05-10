import { useState, useEffect } from 'react';
import { HTTP } from './http-common';

export default function useColorsAndPagination(page, perPage) {
  const [colors, setColors] = useState([]);
  const [pagination, setPagination] = useState({
    total: 0,
    totalPages: 0,
  });
  useEffect(() => {
    const fetchColors = () => {
      HTTP.get('/colors', { params: { page, per_page: perPage } }).then(
        ({ data: { data, total, total_pages } }) => {
          // console.log(data);
          setColors(data);
          setPagination({
            total,
            totalPages: total_pages,
          });
        },
      );
    };
    fetchColors();
  }, [page, perPage]);

  return { colors, pagination };
}
