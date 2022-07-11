import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TableFiltersClient } from '../components';
import { InitialUILParseData, FilterResponseItem, LoadOptionsType } from '../types/filter';
import { stringifyUrl, parseUrl } from './helpers';

interface Response {
  meta: {
    filters: Array<FilterResponseItem>;
  };
}

interface ResponseSource {
  data: Array<{
    id: number;
    name: string;
  }>;
}

const FiltersTablePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [filters, setFilters] = useState<Array<FilterResponseItem>>([]);

  const onLoadSourceOptions = (filterId: string): LoadOptionsType => {
    return async (inputValue, prevOptions, additional = { page: 1 }) => {
      const response = await fetch(
        `https://api.nites.cloud/extranet/hotels/leuschke-plc-hotel-42507/filters/${filterId}/source-data?query=${inputValue}&page=${additional.page}`,
        {
          headers: {
            Authorization:
              'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLm5pdGVzLmNsb3VkXC9leHRyYW5ldFwvYXV0aFwvbG9naW4iLCJpYXQiOjE2NTY0MDc4OTIsImV4cCI6MTY4Nzk0Mzg5MiwibmJmIjoxNjU2NDA3ODkyLCJqdGkiOiJ4YlhudkdkaGlzckI0MW91Iiwic3ViIjoxLCJwcnYiOiI2NDNkOGEwNGY0ZDI2ZjUyNTlmMDI4MjkzNjM4NDk1NzEyNzA0OThmIn0.04MWse5o4LpOjTwQNvIkWdKhiVHJvNvgZF8GjBOZDGs',
          },
        }
      );

      const data: ResponseSource = await response.json();
      const options = data.data.map((item: { id: number; name: string }) => ({ value: String(item.id), label: item.name }));

      return {
        options,
        hasMore: true,
        additional: {
          page: additional.page + 1,
        },
      };
    };
  };

  useEffect(() => {
    fetch('https://api.nites.cloud/extranet/hotels/leuschke-plc-hotel-42507/reservations', {
      headers: {
        Authorization:
          'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLm5pdGVzLmNsb3VkXC9leHRyYW5ldFwvYXV0aFwvbG9naW4iLCJpYXQiOjE2NTY0MDc4OTIsImV4cCI6MTY4Nzk0Mzg5MiwibmJmIjoxNjU2NDA3ODkyLCJqdGkiOiJ4YlhudkdkaGlzckI0MW91Iiwic3ViIjoxLCJwcnYiOiI2NDNkOGEwNGY0ZDI2ZjUyNTlmMDI4MjkzNjM4NDk1NzEyNzA0OThmIn0.04MWse5o4LpOjTwQNvIkWdKhiVHJvNvgZF8GjBOZDGs',
      },
    })
      .then((response) => response.json())
      .then((data: Response) => {
        setFilters(data.meta.filters);
      });
  }, []);
  const queryString =
    '?filters%5B0%5D%5Bvalues%5D%5B0%5D%5Blabel%5D=2&filters%5B0%5D%5Bvalues%5D%5B0%5D%5Bvalue%5D=2&filters%5B0%5D%5Bvalues%5D%5B0%5D%5B__isNew__%5D=true&filters%5B0%5D%5Boperator%5D=<%3D&filters%5B0%5D%5Bid%5D%5Blabel%5D=ID&filters%5B0%5D%5Bid%5D%5Bvalue%5D=1&filters%5B1%5D%5Boperator%5D=<%3D&filters%5B1%5D%5Bvalues%5D%5B0%5D%5Blabel%5D=300&filters%5B1%5D%5Bvalues%5D%5B0%5D%5Bvalue%5D=300&filters%5B1%5D%5Bvalues%5D%5B0%5D%5B__isNew__%5D=true&filters%5B1%5D%5Bid%5D%5Blabel%5D=Сума&filters%5B1%5D%5Bid%5D%5Bvalue%5D=3&filters%5B2%5D%5Boperator%5D=%3D&filters%5B2%5D%5Bvalues%5D%5B0%5D%5Blabel%5D=Підтверджено&filters%5B2%5D%5Bvalues%5D%5B0%5D%5Bvalue%5D=1&filters%5B2%5D%5Bid%5D%5Blabel%5D=Статус&filters%5B2%5D%5Bid%5D%5Bvalue%5D=13';
  // receive filters from url
  const initialFilters = parseUrl<InitialUILParseData>(queryString.slice(1));

  // save filters to url
  const submitForm = (data: InitialUILParseData) => {
    navigate(`?${stringifyUrl(data)}`);
  };

  return (
    <TableFiltersClient
      onAddFilter={() => {
        /* do something after new filter has been added */
      }}
      onRemoveFilter={() => {
        /* do something after some filter has been deleted */
      }}
      onLoadSourceOptions={onLoadSourceOptions}
      onSubmitFilterForm={submitForm} /*  after submit */
      initialFilters={initialFilters} /* from url or localstorage */
      filtersTypesList={filters} /* list from server */
    />
  );
};

export default FiltersTablePage;
